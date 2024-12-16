import motor.motor_asyncio
from dotenv import load_dotenv
import os

load_dotenv()

MONGO_URI=os.getenv("MONGO_URI")
client = motor.motor_asyncio.AsyncIOMotorClient(MONGO_URI)
db = client.to_do_app

#database connection
def init_db():
    print("Database connection successful!")