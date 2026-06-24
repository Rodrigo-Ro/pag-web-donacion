from sqlalchemy import Column, Integer, String, Text, DateTime
from datetime import datetime
from src.database import Base  # ← agregar src.

class Donacion(Base):
    __tablename__ = "donaciones"

    id             = Column(Integer, primary_key=True, index=True)
    nombre         = Column(String(100), nullable=False)
    email          = Column(String(100), nullable=False)
    telefono       = Column(String(9),   nullable=False)
    tipos_donacion = Column(Text,        nullable=False)
    punto_entrega  = Column(String(50),  nullable=False)
    descripcion    = Column(Text,        nullable=False)
    fecha_registro = Column(DateTime,    default=datetime.utcnow)