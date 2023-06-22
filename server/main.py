from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles
from datetime import datetime
import mysql as M
import model as Model
from uuid import uuid4
import style as S
from fastapi.middleware.cors import CORSMiddleware
from time import sleep

app = FastAPI()
origins = ["*"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount('/public', StaticFiles(directory='public'), name='public')

@app.post("/drawing")
def create_image(prompt: str, style: str):
    
    style_eng = S.style_prompt(style)
    now = datetime.today().strftime("%Y/%m/%d %H:%M:%S")
    
    # img = Model.image_generate(prompt, style_eng)
    # img_title = str(uuid4()) + '.png'
    # img_URL = "http://localhost:8000/public/arts/" + img_title
    
    # img.save('./public/arts/' + img_title, "PNG")
    
    img_URL = 'http://localhost:8000/public/arts/1905a241-90e9-45d0-bb26-051f62e6c7c7.png'

    sql = f"INSERT INTO Arts_TBL VALUES (NULL, %s, %s, %s, %s);" 

    M.cursor.execute(sql, (prompt, style, img_URL, now))
    M.mysql.commit()
    
    sleep(2)

    return {'status': 'success', 'data':{'img_URL': img_URL, 'style':style, 'prompt' : prompt}}

@app.get("/arts/all")
async def get_arts_all():
    # try:
    sql = f"select * from arts_tbl order by create_date DESC LIMIT 50" 
    M.cursor.execute(sql)
    result =  M.cursor.fetchall()
    # finally:
    #     M.mysql.close()
    return {'status': 'success', 'data' : result}

@app.get("/arts/recent")
async def get_arts_recent():

    sql = f"select * from arts_tbl order by create_date DESC LIMIT 9"
    M.cursor.execute(sql)
    result =  M.cursor.fetchall()
    # finally:
    #     M.mysql.close()
    return {'status': 'success', 'data' : result}


