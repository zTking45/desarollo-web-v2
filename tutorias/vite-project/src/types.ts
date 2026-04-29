export interface Tutor {
  id: number;
  nombre: string;
  especialidad: string;
  materia: string;
  precio: number;
  descripcion: string;
  horarios: string[];
}

export interface CarritoItem {
  nombre: string;
  tutor: string;
  descripcion: string;
  modalidad: string;
  fecha: string;
  hora: string;
  precio: number; // 🔥 CLAVE
}