# korean-hate-comments

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
