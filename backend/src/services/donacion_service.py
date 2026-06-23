from sqlalchemy.orm import Session
from src.repository.donacion_repository import crear_donacion, obtener_donaciones  # ← src.
from src.schemas.donacion import DonacionCreate  # ← src.

def registrar_donacion(db: Session, datos: DonacionCreate):
    return crear_donacion(db, datos)

def listar_donaciones(db: Session):
    return obtener_donaciones(db)