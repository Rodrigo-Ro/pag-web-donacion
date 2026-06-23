from sqlalchemy.orm import Session
from src.models.donacion_model import Donacion  # ← src.
from src.schemas.donacion import DonacionCreate  # ← src.

def crear_donacion(db: Session, datos: DonacionCreate):
    nueva = Donacion(**datos.model_dump())
    db.add(nueva)
    db.commit()
    db.refresh(nueva)
    return nueva

def obtener_donaciones(db: Session):
    return db.query(Donacion).all()