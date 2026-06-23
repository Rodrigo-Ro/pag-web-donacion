from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from src.apis.donacion_api import router as donacion_router
from src.database import engine
import src.models.donacion_model as models

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(donacion_router)