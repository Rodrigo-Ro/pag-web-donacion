import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface DonacionPayload {
  nombre: string;
  email: string;
  telefono: string;
  tipos_donacion: string;
  punto_entrega: string;
  descripcion: string;
}

export interface DonacionResponse extends DonacionPayload {
  id: number;
  fecha_registro: string;
}

@Injectable({
  providedIn: 'root'
})
export class DonacionService {
  private apiUrl = 'http://localhost:8000/donaciones/';

  constructor(private http: HttpClient) {}

  crearDonacion(donacion: DonacionPayload): Observable<DonacionResponse> {
    return this.http.post<DonacionResponse>(this.apiUrl, donacion);
  }
}