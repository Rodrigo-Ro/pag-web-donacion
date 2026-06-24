from pydantic import BaseModel, EmailStr
from datetime import datetime

class DonacionCreate(BaseModel):
    nombre:         str
    email:          str
    telefono:       str
    tipos_donacion: str    
    punto_entrega:  str
    descripcion:    str


class DonacionResponse(DonacionCreate):
    id:             int
    fecha_registro: datetime

    class Config:
        from_attributes = True