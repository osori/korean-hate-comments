import sqlite3

from crawlers.ilbe import Ilbe
from crawlers.inven import Inven

conn = sqlite3.connect('comments.db')
c = conn.cursor()

def create_tables():
    c.execute('''CREATE TABLE ARTICLES
                 ([generated_id] INTEGER PRIMARY KEY,[title] text, [url] text, [date] text)''')

    c.execute('''CREATE TABLE COMMENTS
                 ([generated_id] INTEGER PRIMARY KEY,[text] text, [commenter] text, [datetime] text, [article_url] text)''')

    conn.commit()

def save_ilbe_articles(num):
    ilbe = Ilbe()
    articles = ilbe.get_top_articles(1, num // 60)
    for article in articles:
        c.execute('''INSERT INTO ARTICLES (title, url, date)
                     VALUES (?, ?, ?)''', (article['title'], article['url'], article['date']))
    conn.commit()

def save_inven_articles(num):
    inven = Inven()
    articles = inven.get_top_articles(1, num // 50)
    for article in inven_articles:
        c.execute('''INSERT INTO ARTICLES (title, url, date)
                     VALUES (?, ?, ?)''', (article['title'], article['url'], article['date']))
    conn.commit()

def save_comments(articles, website):
    if website == "ilbe":
        parser = ilbe()
    elif webiste == "inven":
        parser = Inven()
    else:
        raise Exception("unsupported")

    comments = []

    for idx, article in enumerate(articles):
        print("Getting comments of article #", idx+1, "of", len(articles))
        comments = parser.get_comments(article['url'])
        comments.append({
            "article_url": article['url'],
            "comments": []
        })
        comments[idx]['comments'] = comments

    for idx, _c in enumerate(comments):
        url = _c['article_url']
        print("Inserting comment of articles", idx, "of", len(comments))
        for _comment in _c['comments']:
            text = _comment['text']
            commenter = _comment['commenter']
            date_time = _comment['datetime']
            c.execute('''INSERT INTO COMMENTS (text, commenter, datetime, article_url)
                         VALUES (?, ?, ?, ?)''', (text, commenter, date_time, url))

    conn.commit()
