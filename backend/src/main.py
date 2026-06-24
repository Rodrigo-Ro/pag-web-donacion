from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:4200"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Donacion(BaseModel):
    nombre: str
    monto: float
    mensaje: str | None = None

donaciones = []

@app.get("/")
def home():
    return {"mensaje": "Backend funcionando "}

@app.post("/donaciones")
def crear_donacion(donacion: Donacion):
    donaciones.append(donacion)
    return {
        "mensaje": "Donación registrada correctamente",
        "total_donaciones": len(donaciones),
        "data": donacion
    }

@app.get("/donaciones")
def listar_donaciones():
    return {
        "total": len(donaciones),
        "donaciones": donaciones
    }