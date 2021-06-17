# Mynovelontology


## Spaql Endpoint 
***http://173.230.152.120:8889/bigdata/sparql***
## Ontology Vocabulary Specification 
***https://hackmd.io/@0KtPNHSTRDWi9ig-_bDr2Q/H16VYDb_d***
## Visualization of Ontology
***http://localhost:3000***

## Visualization method

### 呈現方式(程式碼附於Ont資料夾中)
**後端**
利用Django作為後端，連接虛擬機中的blazegraph api，因此可透過python對endpoint 下sparql指令。並提供RESTful API以供前端連接。


**前端**
利用React實現前端頁面的渲染，利用選單讓用戶查詢人物關係，在將用戶選擇的資料post到後端以做查詢。



![](https://i.imgur.com/cqYmUGs.png)

### 安裝物件
***1.python***
***2.Django(包含相關的python套件)***
***3.Nodejs***
***4.npm 與相關套件***

### 執行方式
**Step1.下載相關物件**
**Step2.打開 terminal，進入Ont資料夾**
**Step3.下指令 : python manage.py runserver**
**Step4.進入frontend 資料夾**
**Step5.下指令 : npm run start**



