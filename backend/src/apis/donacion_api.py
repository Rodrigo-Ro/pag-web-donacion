from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from src.database import get_db  # ← src.
from src.schemas.donacion import DonacionCreate, DonacionResponse  # ← src.
from src.services.donacion_service import registrar_donacion, listar_donaciones  # ← src.

router = APIRouter(prefix="/donaciones", tags=["Donaciones"])

@router.post("/", response_model=DonacionResponse)
def crear(datos: DonacionCreate, db: Session = Depends(get_db)):
    return registrar_donacion(db, datos)

@router.get("/", response_model=list[DonacionResponse])
def listar(db: Session = Depends(get_db)):
    return listar_donaciones(db)