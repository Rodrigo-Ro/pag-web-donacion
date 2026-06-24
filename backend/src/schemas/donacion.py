from pydantic import BaseModel, EmailStr
from datetime import datetime

# Lo que llega desde el formulario de Angular
class DonacionCreate(BaseModel):
    nombre:         str
    email:          str
    telefono:       str
    tipos_donacion: str    # "Ropa, Alimentos, Juguetes"
    punto_entrega:  str
    descripcion:    str

# Lo que devuelve la API al frontend
class DonacionResponse(DonacionCreate):
    id:             int
    fecha_registro: datetime

    class Config:
        from_attributes = True