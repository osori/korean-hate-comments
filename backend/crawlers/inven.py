import requests
import time
import datetime
from bs4 import BeautifulSoup
import unicodedata
import json

INVEN_TOP_ARTICLES_URL = "http://www.inven.co.kr/board/webzine/2097?my=chu&sort=PID&iskin=webzine&p=1" # 오픈 이슈 갤러리의 3추글 모음
INVEN_COMMENTS_URL = "http://www.inven.co.kr/common/board/comment.json.php"

headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.95 Safari/537.36'}


class Inven:
    def __init__(self):
        pass

    def get_top_articles(self, start_page_no, end_page_no):
        articles = []
        url = INVEN_TOP_ARTICLES_URL
        for page_no in range(start_page_no, end_page_no+1):
            params = {"p": str(page_no)}
            response = requests.get(url, headers=headers, params=params)

            soup = BeautifulSoup(response.content, "html.parser")
            article_rows = soup.find_all("tr", {"class":"ls"})
            for article in article_rows:
                article_link = article.find("a", {"class":"sj_ln"})
                article_title = article_link.text.strip()
                article_url = article_link.get("href").split("?")[0]
                article_date = article.find("td", {"class": "date"}).text.strip()
                article_title = unicodedata.normalize("NFKD", article_title)
                if article_date[2] == ":":
                    article_date = datetime.date.today().strftime("%Y-%m-%d")
                else:
                    article_date = str(datetime.date.today().year) + "-" + article_date
                articles.append({
                    "title": article_title,
                    "url": article_url,
                    "date": article_date
                })
            print("Finished getting articles on page", page_no, "of", end_page_no)
            time.sleep(1)
        return articles

    def get_comments(self, article_url):
        article_id = article_url.split('/')[-1]
        url = INVEN_COMMENTS_URL
        form_data = {
            "comeidx": 2097,
            "articlecode": article_id,
            "titles": 100 # get first 100 comments
        }

        comments = []
        response = requests.post(url, form_data, headers=headers)
        response = response.json()

        num_comments = response['cmtcount']
        if num_comments == 0:
            return []
        page_count = num_comments // 100 + 1

        comments_page1 = self._parse_comments(response, 1)
        comments.extend(comments_page1)

        if page_count > 1:
            time.sleep(0.25)
            for page_no in range(2, page_count+1):
                form_data["titles"] = page_no*100
                response = requests.post(url, form_data, headers=headers)
                response = response.json()
                comments_pageN = self._parse_comments(response, page_no)
                comments.extend(comments_pageN)

        print("Finished getting comments on article", article_url)

        return comments

    def _parse_comments(self, response, page_no):
        comment_list = []
        comments = response["commentlist"][page_no-1]["list"]
        for c in comments:
            comment = {
                "datetime": c["o_date"],
                "commenter": c["o_name"],
                "text": c["o_comment"].replace('&amp;nbsp;', ' ')
            }
            comment_list.append(comment)
        return comment_list
