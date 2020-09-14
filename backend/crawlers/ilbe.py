import requests
import time
import datetime
from bs4 import BeautifulSoup
import unicodedata
import json

ILBE_TOP_ARTICLES_URL = "https://www.ilbe.com/list/ilbe" # 일베 게시판 https://www.ilbe.com/list/ilbe?page=2&listSize=60&listStyle=list
ILBE_ROOT_URL = "https://www.ilbe.com"
ILBE_COMMENTS_URL = "https://www.ilbe.com/commentlist/"

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}

class Ilbe:
    def __init__(self):
        pass

    def get_top_articles(self, start_page_no, end_page_no):
        articles = []
        url = ILBE_TOP_ARTICLES_URL
        for page_no in range(start_page_no, end_page_no+1):
            params = {"page": str(page_no), "listSize": "60"}
            response = requests.get(url, headers=headers, params=params)

            soup = BeautifulSoup(response.content, "html.parser")
            board_body = soup.find("ul", {"class":"board-body"})
            article_titles = board_body.find_all("li", {"class":""})
            for article in article_titles:
                article_title = article.find("a").text
                article_url = ILBE_ROOT_URL + article.find("a").get("href").split("?")[0]
                article_date = article.find("span", {"class": "date"}).text
                if article_date[2] == ":":
                    article_date = datetime.date.today().strftime("%Y-%m-%d")
                articles.append({
                    "title": article_title,
                    "url": article_url,
                    "date": article_date
                })
            print("Finished getting articles on page", page_no, "of", end_page_no)
            time.sleep(1)
        return articles
    
    def get_comments(self, article_url):
        article_id = article_url.split('view/')[1]
        url = ILBE_COMMENTS_URL + article_id
        params = {
            "page": 1
        }
        comments = []
        
        response = requests.get(url, headers=headers, params=params)
        soup = BeautifulSoup(response.content, "html.parser")
        comments_page1 = self._parse_comments(soup)
        comments.extend(comments_page1)
        
        p = soup.find("a", {"class": "next"}).get("onclick")
        last_comment_page_no = int(p[p.find("(")+1:p.find(")")])
        
        if last_comment_page_no > 1:
            time.sleep(0.25)
            for page_no in range(2, last_comment_page_no+1):
                params['page'] = page_no
                response = requests.get(url, headers=headers,params=params)
                soup = BeautifulSoup(response.content, "html.parser")
                comments_pageN = self._parse_comments(soup)
                comments.extend(comments_pageN)
                
        print("Finished getting comments on article", article_url)
            
        return comments
            
    def _parse_comments(self, soup):
        comment_list = []
        comments = soup.find_all("div", {"class": "comment-item-box"})
        for c in comments:
            if c.find("span", {"class":"comment-box"}):
                commenter = c.find("span", {"class":"global-nick"}).text
                date_time = c.find("span", {"class":"date-line"}).text.strip()
                text = c.find("span", {"class":"comment-box"}).text.strip()
                comment_list.append({
                    "commenter": commenter,
                    "datetime": date_time,
                    "text": text
                })
        return comment_list
