import pymysql
import os
from dotenv import load_dotenv
load_dotenv()

SECRET_ENV = os.getenv("MYSQL_USER")
SECRET_ENV = os.getenv("MYSQL_USER")
SECRET_ENV = os.getenv("MYSQL_USER")


mysql = pymysql.connect(
    user=os.getenv("MYSQL_USER"), 
    passwd=os.getenv("MYSQL_PW"), 
    host=os.getenv("MYSQL_HOST"), 
    db=os.getenv("MYSQL_DB"), 
)

cursor = mysql.cursor(pymysql.cursors.DictCursor)