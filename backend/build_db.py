import sqlite3

from crawlers.ilbe import Ilbe
from crawlers.inven import Inven

from model.create_model import HateBert

conn = sqlite3.connect('comments.db')
c = conn.cursor()
model = HateBert()

def create_tables():
    c.execute('''CREATE TABLE ARTICLES
                 ([generated_id] INTEGER PRIMARY KEY,[title] text, [url] text, [date] text)''')

    c.execute('''CREATE TABLE COMMENTS
                 ([generated_id] INTEGER PRIMARY KEY,[text] text, [commenter] text, [datetime] text, [article_url] text)''')

    conn.commit()

def save_ilbe_articles(num):
    print("[ILBE]")
    ilbe = Ilbe()
    articles = ilbe.get_top_articles(1, num // 60)
    new = []
    for article in articles:
        if c.execute("SELECT * FROM ARTICLES WHERE url=(?)", (article['url'],)).fetchall():
            continue
        c.execute('''INSERT INTO ARTICLES (title, url, date)
                     VALUES (?, ?, ?)''', (article['title'], article['url'], article['date']))
        new.append(article)
    conn.commit()
    print(str(len(new)), "new articles found")
    return new

def save_inven_articles(num):
    print("[INVEN]")
    inven = Inven()
    articles = inven.get_top_articles(1, num // 50)
    new = []
    for article in articles:
        if c.execute("SELECT * FROM ARTICLES WHERE url=(?)", (article['url'],)).fetchall():
            continue
        c.execute('''INSERT INTO ARTICLES (title, url, date)
                     VALUES (?, ?, ?)''', (article['title'], article['url'], article['date']))
        new.append(article)
    conn.commit()
    print(str(len(new)), "new articles found")
    return new

def save_comments(articles, website):
    if website == "ilbe":
        parser = Ilbe()
    elif website == "inven":
        parser = Inven()
    else:
        raise Exception("unsupported")

    comments = []

    for idx, article in enumerate(articles):
        print("Getting comments of article #", idx+1, "of", len(articles))
        _comments = parser.get_comments(article['url'])
        comments.append({
            "article_url": article['url'],
            "comments": []
        })
        comments[idx]['comments'] = _comments

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

def save_prob():
    rows = c.execute('select * from comments where prob IS NULL ORDER BY generated_id DESC').fetchall()
    count = 0
    for row in rows:
        prob = model.predict_comment(row[1])
        try:
            c.execute(f"UPDATE COMMENTS SET prob={prob} WHERE generated_id={row[0]}")
            print(row[0], row[1], "prob:", prob)
            count += 1
            # conn.commit()
        except Exception as e:
            print("Error: ", e)
        if count == 100:
            conn.commit()
            count = 0
    conn.commit()

ilbe_articles = save_ilbe_articles(300)
inven_articles = save_inven_articles(300)
save_comments(ilbe_articles, "ilbe")
save_comments(inven_articles, "inven")
save_prob()
