# korean-hate-comments
**국립국어원 2020 국어정보처리시스템 경진대회 금상 수상** ![(보고서)](images/선플수호자_보고서.pdf) ![(발표 자료)](images/선플수호자_발표자료.pdf) ![(동영상)](https://youtu.be/NpDwP6HeZlo)

~~**지금 바로 사용해 보세요! [(링크)](http://akpl.xyz)**~~ 예측 모델을 돌리는 서버의 비용 부담으로 인해 잠시 웹사이트를 닫았습니다. 아카이브 작업이 끝나는 대로 다시 열겠습니다.


[Korean Hate Speech Dataset](https://github.com/kocohub/korean-hate-speech)을 이용해 구현한 악플 예측 모델 및 인터넷 커뮤니티의 악플 내려받기 서비스

## 디렉토리 구조 및 주요 파일 설명
```
+-- good_comments_guardian_ipynb: 모델 구현 과정을 담은 Jupyter Notebook
+-- backend
|	+-- crawlers: 일베, 인벤 등에서 댓글 수집
|	+-- model: 예측 모델 생성
|	+-- build_db.py: crawlers 를 이용해 DB 구축
|	+-- comments.db: build_db.py로 구축된 DB
|	+-- main.py
+-- frontend: Ionic + React로 구현된 프론트엔드
```

## 사진
### 댓글 DB 구축 과정
#### build_db.py 구동
![build_db.py](images/build_db.png)

#### 생성된 DB
+ 총 게시물 수: 22,582건 (일베:12,304건, 인벤: 10,278건)
  + 일베: `2020-08-28 ~ 2020-09-15` 사이의 일간 베스트 게시글
  + 인벤: `2020-06-07 ~ 2020-09-15` 사이의 오픈 이슈 갤러리 3추글

+ 총 댓글 수: 494,331건 (일베:325,890건, 인벤: 198,636건)

![DB 구조](images/db.png)
