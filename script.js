
const ramos = [
  { nombre: "morfología integral", semestre: 1 },
  { nombre: "química General y orgánica", semestre: 1 },
  { nombre: "biología celular", semestre: 1 },
  { nombre: "razonamiento matemático", semestre: 1 },
  { nombre: "bases teorías de enfermería", semestre: 1 },
  { nombre: "microbiologia", semestre: 2, requisitos: ["biología celular"] },
  { nombre: "bioquímica", semestre: 2, requisitos: ["biología celular"] },
  { nombre: "Psicológia evolutiva", semestre: 2 },
  { nombre: "socioantropologia", semestre: 2 },
  { nombre: "bases del cuidado de enfermería", semestre: 2, requisitos: ["morfología integral", "bases teorías de enfermería"] },
  { nombre: "CFG: habilidades comunicativas", semestre: 2 },
  { nombre: "fisiología", semestre: 3, requisitos: ["morfología integral"] },
  { nombre: "salud pública 1", semestre: 3, requisitos: ["razonamiento matemático", "bases del cuidado de enfermería"] },
  { nombre: "enfermería en la promoción y Prevención en salud", semestre: 3, requisitos: ["bases teorías de enfermería", "socioantropologia"] },
  { nombre: "cuidado de enfermería en el ciclo vital", semestre: 3, requisitos: ["Psicológia evolutiva", "bases del cuidado de enfermería"] },
  { nombre: "ingles 1", semestre: 3 },
  { nombre: "fisiopatologia", semestre: 4, requisitos: ["fisiología"] },
  { nombre: "fármacologia general", semestre: 4, requisitos: ["microbiologia", "bioquímica"] },
  { nombre: "salud publica 2", semestre: 4, requisitos: ["salud pública 1", "enfermería en la promoción y Prevención en salud"] },
  { nombre: "bases de enfermería en salud familiar y comunitaria", semestre: 4, requisitos: ["enfermería en la promoción y Prevención en salud"] },
  { nombre: "cuidado de enfermería en adulto y adulto mayor", semestre: 4, requisitos: ["fisiología", "cuidado de enfermería en el ciclo vital"] },
  { nombre: "ingles 2", semestre: 4, requisitos: ["ingles 1"] },
  { nombre: "farmacologia clinica y fármacovigilancia", semestre: 5, requisitos: ["fisiopatologia", "fármacologia general"] },
  { nombre: "cuidados de enfermería en salud familiar", semestre: 5, requisitos: ["salud publica 2", "bases de enfermería en salud familiar y comunitaria"] },
  { nombre: "cuidado de enfermería en el niño y adulto", semestre: 5, requisitos: ["fisiopatologia", "cuidado de enfermería en adulto y adulto mayor"] },
  { nombre: "fundamentos de gestión y liderazgo en enfermería", semestre: 5, requisitos: ["salud publica 2"] },
  { nombre: "integrador 1: cuidado de enfermería 1", semestre: 5, requisitos: ["fisiopatologia", "fármacologia general", "salud publica 2", "bases de enfermería en salud familiar y comunitaria", "cuidado de enfermería en adulto y adulto mayor", "CFG: habilidades comunicativas"] },
  { nombre: "ingles 3", semestre: 5, requisitos: ["ingles 2"] }
, 
  { nombre: "cuidados de enfermería en salud mental y comunidad", semestre: 6, requisitos: ["cuidados de enfermería en salud familiar", "integrador 1: cuidado de enfermería 1"] },
  { nombre: "cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud", semestre: 6, requisitos: ["farmacologia clinica y fármacovigilancia", "cuidado de enfermería en el niño y adulto", "integrador 1: cuidado de enfermería 1"] },
  { nombre: "metodos de analisis en enfermería", semestre: 6, requisitos: ["fundamentos de gestión y liderazgo en enfermería", "cuidado de enfermería en adulto y adulto mayor"] },
  { nombre: "administración en unidades de enfermería", semestre: 6, requisitos: ["fundamentos de gestión y liderazgo en enfermería"] },
  { nombre: "ingles 4", semestre: 6, requisitos: ["ingles 3"] },
  { nombre: "CFG: razonamiento científico y tecnológias de información", semestre: 6, requisitos: ["CFG: habilidades comunicativas"] },
  { nombre: "ética y legislación en enfermería", semestre: 7, requisitos: ["integrador 1: cuidado de enfermería 1"] },
  { nombre: "cuidados de enfermería en salud familiar y comunitario", semestre: 7, requisitos: ["cuidados de enfermería en salud mental y comunidad"] },
  { nombre: "cuidado de enfermería en el niño y adolescente con alteraciones de la salud", semestre: 7, requisitos: ["cuidado de enfermería en el niño y adulto", "integrador 1: cuidado de enfermería 1"] },
  { nombre: "desarrollo de proyectos en enfermería", semestre: 7, requisitos: ["administración en unidades de enfermería"] },
  { nombre: "CFG: pensamiento critico", semestre: 7, requisitos: ["CFG: razonamiento científico y tecnológias de información"] },
  { nombre: "cuidado integral del niño y adulto", semestre: 8, requisitos: ["ética y legislación en enfermería", "cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud", "cuidado de enfermería en el niño y adolescente con alteraciones de la salud"] },
  { nombre: "seminario de investigación en enfermería", semestre: 8, requisitos: ["ética y legislación en enfermería", "metodos de analisis en enfermería", "ingles 4"] },
  { nombre: "integrador 2: cuidado de enfermería 2", semestre: 8, requisitos: ["ética y legislación en enfermería", "cuidados de enfermería en salud familiar y comunitario", "cuidado de enfermería en el Adulto y adulto mayor con alteraciones de salud", "cuidado de enfermería en el niño y adolescente con alteraciones de la salud", "desarrollo de proyectos en enfermería"] },
  { nombre: "CFG: responsabilidad social", semestre: 8, requisitos: ["CFG: pensamiento critico"] },
  { nombre: "integrador 3: gestión del cuidado en unidades de enfermería", semestre: 9, requisitos: ["cuidado integral del niño y adulto", "seminario de investigación en enfermería", "integrador 2: cuidado de enfermería 2", "CFG: responsabilidad social"] },
  { nombre: "integrador 4: gestión del cuidado en salud familiar y comunitaria", semestre: 10, requisitos: ["cuidado integral del niño y adulto", "seminario de investigación en enfermería", "integrador 2: cuidado de enfermería 2", "CFG: responsabilidad social"] }
];

const mallaDiv = document.getElementById("malla");
const modal = document.getElementById("modal");
const mensajeModal = document.getElementById("mensajeModal");
const cerrarModal = document.getElementById("cerrarModal");

function getAprobados() {
  return JSON.parse(localStorage.getItem("ramosAprobados") || "[]");
}
function guardarAprobados(aprobados) {
  localStorage.setItem("ramosAprobados", JSON.stringify(aprobados));
}
function estaAprobado(nombre) {
  return getAprobados().includes(nombre);
}

function renderMalla() {
  mallaDiv.innerHTML = "";
  for (let i = 1; i <= 10; i++) {
    const semestreDiv = document.createElement("div");
    semestreDiv.classList.add("semestre");
    const titulo = document.createElement("h3");
    titulo.textContent = `Semestre ${i}`;
    semestreDiv.appendChild(titulo);

    ramos.filter(r => r.semestre === i).forEach(ramo => {
      const div = document.createElement("div");
      div.textContent = ramo.nombre;
      div.className = "ramo";
      if (estaAprobado(ramo.nombre)) {
        div.classList.add("aprobado");
      } else if (ramo.requisitos && !ramo.requisitos.every(estaAprobado)) {
        div.classList.add("bloqueado");
      }

      div.onclick = () => {
        const aprobados = getAprobados();
        if (estaAprobado(ramo.nombre)) {
          guardarAprobados(aprobados.filter(n => n !== ramo.nombre));
        } else if (!ramo.requisitos || ramo.requisitos.every(estaAprobado)) {
          guardarAprobados([...aprobados, ramo.nombre]);
        } else {
          const faltantes = ramo.requisitos.filter(r => !estaAprobado(r));
          mensajeModal.textContent = `Debes aprobar: ${faltantes.join(", ")}`;
          modal.style.display = "block";
        }
        renderMalla();
      };

      semestreDiv.appendChild(div);
    });

    mallaDiv.appendChild(semestreDiv);
  }
}

cerrarModal.onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// Modo oscuro
document.getElementById("modoSwitch").addEventListener("change", function () {
  document.body.classList.toggle("dark-mode", this.checked);
});

// Cambio de color
const root = document.documentElement;
document.getElementById("colorPrimario").addEventListener("input", e => {
  root.style.setProperty("--color-principal", e.target.value);
});
document.getElementById("colorSecundario").addEventListener("input", e => {
  root.style.setProperty("--color-secundario", e.target.value);
});
document.getElementById("resetColores").onclick = () => {
  root.style.setProperty("--color-principal", "#00b4d8");
  root.style.setProperty("--color-secundario", "#caf0f8");
};

// Reset progreso
document.getElementById("resetProgreso").onclick = () => {
  if (confirm("¿Estás seguro de reiniciar tu progreso?")) {
    localStorage.removeItem("ramosAprobados");
    renderMalla();
  }
};

renderMalla();
