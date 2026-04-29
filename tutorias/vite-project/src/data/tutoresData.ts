import type { Tutor } from "../types";

const tutores: Tutor[] = [

  // 🔵 PROGRAMACIÓN (10)
  { id: 1, nombre: "Juan Pérez", especialidad: "Frontend", materia: "programacion", precio: 20000, descripcion: "Aprende React, componentes reutilizables y diseño moderno de interfaces.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 2, nombre: "Laura Martínez", especialidad: "Backend", materia: "programacion", precio: 22000, descripcion: "Construye APIs robustas con Java y Spring Boot.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 3, nombre: "Andrés López", especialidad: "FullStack", materia: "programacion", precio: 25000, descripcion: "Desarrollo completo frontend + backend con buenas prácticas.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 4, nombre: "Santiago Ruiz", especialidad: "Node.js", materia: "programacion", precio: 21000, descripcion: "Crea APIs REST escalables con Node.js.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 5, nombre: "Camila Torres", especialidad: "React", materia: "programacion", precio: 23000, descripcion: "Hooks, estado global y arquitectura en React.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 6, nombre: "Felipe Gómez", especialidad: "Python", materia: "programacion", precio: 20000, descripcion: "Automatización, scripts y backend con Python.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 7, nombre: "Daniel Castro", especialidad: "C++", materia: "programacion", precio: 24000, descripcion: "Programación avanzada y optimización en C++.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 8, nombre: "Natalia Ríos", especialidad: "JavaScript", materia: "programacion", precio: 21000, descripcion: "Fundamentos sólidos de JS moderno (ES6+).",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 9, nombre: "Miguel Herrera", especialidad: "Bases de datos", materia: "programacion", precio: 22000, descripcion: "Modelado, consultas SQL y optimización de datos.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 10, nombre: "Valentina Cruz", especialidad: "DevOps", materia: "programacion", precio: 26000, descripcion: "CI/CD, Docker y despliegue en la nube.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },

  { id: 11, nombre:"Ana Gómez", especialidad: "Conversacional", materia: "ingles", precio: 15000, descripcion: "Habla inglés con fluidez en situaciones reales.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 12, nombre: "David Torres", especialidad: "Técnico", materia: "ingles", precio: 17000, descripcion: "Inglés aplicado a tecnología y trabajo.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 13, nombre: "Laura Díaz", especialidad: "Gramática", materia: "ingles", precio: 14000, descripcion: "Domina estructuras gramaticales correctamente.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 14, nombre: "Carlos Méndez", especialidad: "IELTS", materia: "ingles", precio: 20000, descripcion: "Prepárate para IELTS con simulacros reales.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 15, nombre: "Sofía Vargas", especialidad: "Listening", materia: "ingles", precio: 16000, descripcion: "Mejora tu comprensión auditiva.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 16, nombre: "Juan Rojas", especialidad: "Pronunciación", materia: "ingles", precio: 18000, descripcion: "Corrige tu acento y pronunciación.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 17, nombre: "María León", especialidad: "Business English", materia: "ingles", precio: 21000, descripcion: "Inglés para entrevistas y entorno laboral.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 18, nombre: "Andrés Mora", especialidad: "Reading", materia: "ingles", precio: 15000, descripcion: "Lectura rápida y comprensión avanzada.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 19, nombre: "Paula Castillo", especialidad: "Writing", materia: "ingles", precio: 17000, descripcion: "Redacción de textos formales.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 20, nombre: "Diego Salazar", especialidad: "TOEFL", materia: "ingles", precio: 22000, descripcion: "Entrenamiento completo para TOEFL.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },

  // 🟣 MATEMÁTICAS (10)
  { id: 21, nombre: "Carlos Ruiz", especialidad: "Álgebra", materia: "matematicas", precio: 18000, descripcion: "Ecuaciones y álgebra paso a paso.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 22, nombre: "Sofía Herrera", especialidad: "Estadística", materia: "matematicas", precio: 19000, descripcion: "Análisis de datos y probabilidad.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 23, nombre: "Luis Pérez", especialidad: "Cálculo", materia: "matematicas", precio: 20000, descripcion: "Derivadas y límites explicados fácil.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 24, nombre: "Ana Torres", especialidad: "Trigonometría", materia: "matematicas", precio: 17000, descripcion: "Funciones trigonométricas aplicadas.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 25, nombre: "David Gómez", especialidad: "Geometría", materia: "matematicas", precio: 16000, descripcion: "Figuras y razonamiento lógico.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 26, nombre: "Miguel Castro", especialidad: "Cálculo II", materia: "matematicas", precio: 21000, descripcion: "Integrales y aplicaciones.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 27, nombre: "Laura Sánchez", especialidad: "Álgebra lineal", materia: "matematicas", precio: 20000, descripcion: "Matrices y vectores.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 28, nombre: "Andrés Díaz", especialidad: "Probabilidad", materia: "matematicas", precio: 18000, descripcion: "Eventos y combinatoria.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 29, nombre: "Camila Rojas", especialidad: "Mat básica", materia: "matematicas", precio: 15000, descripcion: "Refuerza fundamentos matemáticos.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 30, nombre: "Felipe Vargas", especialidad: "Cálculo III", materia: "matematicas", precio: 22000, descripcion: "Cálculo multivariable.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },

  // 🟠 FÍSICA (10)
  { id: 31, nombre: "Luis Ramírez", especialidad: "Mecánica", materia: "fisica", precio: 20000, descripcion: "Movimiento, fuerza y leyes físicas.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 32, nombre: "Ana Castillo", especialidad: "Termodinámica", materia: "fisica", precio: 21000, descripcion: "Calor, energía y sistemas.", horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 33, nombre: "Carlos Vega", especialidad: "Electromagnetismo", materia: "fisica", precio: 22000, descripcion: "Campos eléctricos y magnéticos.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 34, nombre: "Sofía Pardo", especialidad: "Óptica", materia: "fisica", precio: 18000, descripcion: "Lentes, luz y reflexión.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 35, nombre: "Miguel Soto", especialidad: "Física moderna", materia: "fisica", precio: 23000, descripcion: "Relatividad y física cuántica básica.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 36, nombre: "Laura Peña", especialidad: "Acústica", materia: "fisica", precio: 17000, descripcion: "Ondas sonoras y vibraciones.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 37, nombre: "David Ortiz", especialidad: "Dinámica", materia: "fisica", precio: 20000, descripcion: "Fuerzas y movimiento.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 38, nombre: "Camila Núñez", especialidad: "Cinemática", materia: "fisica", precio: 18000, descripcion: "Movimiento en diferentes sistemas.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 39, nombre: "Andrés Gil", especialidad: "Fluidos", materia: "fisica", precio: 21000, descripcion: "Hidrostática y dinámica de fluidos.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 40, nombre: "Valentina Lara", especialidad: "Astrofísica", materia: "fisica", precio: 25000, descripcion: "Universo, estrellas y galaxias.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },

  // 🧪 QUÍMICA (10)
  { id: 41, nombre: "Daniel Mejía", especialidad: "Orgánica", materia: "quimica", precio: 20000, descripcion: "Estructura y reacciones del carbono.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 42, nombre: "Paula Ríos", especialidad: "Inorgánica", materia: "quimica", precio: 18000, descripcion: "Elementos y compuestos químicos.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 43, nombre: "Luis Castro", especialidad: "Analítica", materia: "quimica", precio: 21000, descripcion: "Análisis químico y laboratorio.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 44, nombre: "Ana Torres", especialidad: "Bioquímica", materia: "quimica", precio: 22000, descripcion: "Procesos químicos en seres vivos.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 45, nombre: "Carlos Díaz", especialidad: "Física química", materia: "quimica", precio: 23000, descripcion: "Energía y transformaciones químicas.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 46, nombre: "Sofía Vargas", especialidad: "General", materia: "quimica", precio: 17000, descripcion: "Fundamentos básicos de química.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 47, nombre: "Miguel León", especialidad: "Polímeros", materia: "quimica", precio: 20000, descripcion: "Materiales y plásticos.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 48, nombre: "Laura Gómez", especialidad: "Ambiental", materia: "quimica", precio: 18000, descripcion: "Impacto ambiental y química verde.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 49, nombre: "David Ruiz", especialidad: "Laboratorio", materia: "quimica", precio: 19000, descripcion: "Prácticas y técnicas de laboratorio.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 50, nombre: "Camila Herrera", especialidad: "Estequiometría", materia: "quimica", precio: 21000, descripcion: "Cálculos químicos paso a paso.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },

  // 🌿 BIOLOGÍA (10)
  { id: 51, nombre: "Juan Pérez", especialidad: "Celular", materia: "biologia", precio: 18000, descripcion: "Estructura y función celular.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 52, nombre: "Ana Gómez", especialidad: "Genética", materia: "biologia", precio: 20000, descripcion: "Herencia y ADN.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 53, nombre: "Carlos Ruiz", especialidad: "Evolución", materia: "biologia", precio: 21000, descripcion: "Teoría evolutiva y selección natural.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 54, nombre: "Sofía Torres", especialidad: "Ecología", materia: "biologia", precio: 17000, descripcion: "Ecosistemas y medio ambiente.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 55, nombre: "Luis Díaz", especialidad: "Anatomía", materia: "biologia", precio: 22000, descripcion: "Cuerpo humano y sistemas.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 56, nombre: "Laura Martínez", especialidad: "Microbiología", materia: "biologia", precio: 19000, descripcion: "Microorganismos y bacterias.", horarios: ["09:00","12:00","18:00"] },
  { id: 57, nombre: "Miguel Castro", especialidad: "Zoología", materia: "biologia", precio: 18000, descripcion: "Estudio de los animales.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 58, nombre: "Paula Herrera", especialidad: "Botánica", materia: "biologia", precio: 17000, descripcion: "Estudio de las plantas.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 59, nombre: "Andrés Vega", especialidad: "Biotecnología", materia: "biologia", precio: 23000, descripcion: "Innovación biológica aplicada.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },
  { id: 60, nombre: "Camila Ríos", especialidad: "Fisiología", materia: "biologia", precio: 20000, descripcion: "Funciones vitales del cuerpo.",horarios: ["10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00"] },

  // 🟡 MARKETING (10)
{ id: 61, nombre: "Laura Méndez", especialidad: "Marketing Digital", materia: "marketing", precio: 22000, descripcion: "Publicidad en redes sociales y ventas.", horarios:["10:00","11:00","12:00"] },
{ id: 62, nombre: "Juan Torres", especialidad: "SEO", materia: "marketing", precio: 21000, descripcion: "Posicionamiento web en Google.", horarios:["10:00","11:00","12:00"] },
{ id: 63, nombre: "Camila Díaz", especialidad: "Email Marketing", materia: "marketing", precio: 20000, descripcion: "Campañas efectivas por correo.", horarios:["10:00","11:00","12:00"] },
{ id: 64, nombre: "David Rojas", especialidad: "Branding", materia: "marketing", precio: 23000, descripcion: "Construcción de marca poderosa.", horarios:["10:00","11:00","12:00"] },
{ id: 65, nombre: "Sofía Gómez", especialidad: "Ventas", materia: "marketing", precio: 24000, descripcion: "Técnicas de cierre de ventas.", horarios:["10:00","11:00","12:00"] },

// 🎨 DISEÑO
{ id: 66, nombre: "Ana Ruiz", especialidad: "Photoshop", materia: "diseno", precio: 22000, descripcion: "Edición profesional de imágenes.", horarios:["10:00","11:00","12:00"] },
{ id: 67, nombre: "Carlos León", especialidad: "Illustrator", materia: "diseno", precio: 21000, descripcion: "Diseño vectorial creativo.", horarios:["10:00","11:00","12:00"] },
{ id: 68, nombre: "Laura Peña", especialidad: "Canva", materia: "diseno", precio: 18000, descripcion: "Diseños rápidos y modernos.", horarios:["10:00","11:00","12:00"] },
{ id: 69, nombre: "Miguel Soto", especialidad: "UI/UX", materia: "diseno", precio: 25000, descripcion: "Experiencia de usuario profesional.", horarios:["10:00","11:00","12:00"] },
{ id: 70, nombre: "Valentina Díaz", especialidad: "Brand Design", materia: "diseno", precio: 23000, descripcion: "Identidad visual empresarial.", horarios:["10:00","11:00","12:00"] },

// 🎵 MÚSICA
{ id: 71, nombre: "Daniel Mora", especialidad: "Guitarra", materia: "musica", precio: 20000, descripcion: "Aprende guitarra desde cero.", horarios:["10:00","11:00","12:00"] },
{ id: 72, nombre: "Paula Torres", especialidad: "Piano", materia: "musica", precio: 22000, descripcion: "Clases prácticas de piano.", horarios:["10:00","11:00","12:00"] },
{ id: 73, nombre: "Juan Castro", especialidad: "Canto", materia: "musica", precio: 21000, descripcion: "Técnica vocal y respiración.", horarios:["10:00","11:00","12:00"] },
{ id: 74, nombre: "Laura Pérez", especialidad: "Violín", materia: "musica", precio: 24000, descripcion: "Interpretación musical.", horarios:["10:00","11:00","12:00"] },
{ id: 75, nombre: "Camila Herrera", especialidad: "Producción Musical", materia: "musica", precio: 26000, descripcion: "Crea música digital.", horarios:["10:00","11:00","12:00"] },

// 💰 FINANZAS
{ id: 76, nombre: "Andrés Ruiz", especialidad: "Finanzas Personales", materia: "finanzas", precio: 22000, descripcion: "Manejo inteligente del dinero.", horarios:["10:00","11:00","12:00"] },
{ id: 77, nombre: "David León", especialidad: "Inversiones", materia: "finanzas", precio: 25000, descripcion: "Introducción a inversiones.", horarios:["10:00","11:00","12:00"] },
{ id: 78, nombre: "Ana Gómez", especialidad: "Contabilidad", materia: "finanzas", precio: 21000, descripcion: "Bases contables fáciles.", horarios:["10:00","11:00","12:00"] },
{ id: 79, nombre: "Carlos Díaz", especialidad: "Excel Financiero", materia: "finanzas", precio: 23000, descripcion: "Modelos financieros en Excel.", horarios:["10:00","11:00","12:00"] },
{ id: 80, nombre: "Laura Ríos", especialidad: "Presupuestos", materia: "finanzas", precio: 20000, descripcion: "Planeación financiera.", horarios:["10:00","11:00","12:00"] },

// 📚 HISTORIA
{ id: 81, nombre: "Miguel Pérez", especialidad: "Historia Universal", materia: "historia", precio: 18000, descripcion: "Grandes eventos mundiales.", horarios:["10:00","11:00","12:00"] },
{ id: 82, nombre: "Paula Vargas", especialidad: "Historia de Colombia", materia: "historia", precio: 19000, descripcion: "Procesos históricos nacionales.", horarios:["10:00","11:00","12:00"] },
{ id: 83, nombre: "Sofía Ruiz", especialidad: "Edad Media", materia: "historia", precio: 17000, descripcion: "Europa medieval explicada.", horarios:["10:00","11:00","12:00"] },
{ id: 84, nombre: "Juan León", especialidad: "Guerras Mundiales", materia: "historia", precio: 22000, descripcion: "Análisis histórico moderno.", horarios:["10:00","11:00","12:00"] },
{ id: 85, nombre: "Camila Torres", especialidad: "Historia Antigua", materia: "historia", precio: 20000, descripcion: "Grecia, Roma y Egipto.", horarios:["10:00","11:00","12:00"] },
];

export default tutores;