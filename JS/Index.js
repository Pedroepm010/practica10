const personajes = [
  {
    nombre: "Rick",
    apellido: "Sanchez",
    edad: 70,
    profesion: "Científico loco",
    direccion: { calle: "GaraGe de la familia Smith", ciudad: "Earth (C-137)", estado: "Dimensión Central Finita" },
    hobbies: ["Viajar entre dimensiones", "Inventar gadgets", "Beber"],
    foto: "https://rickandmortyapi.com/api/character/avatar/1.jpeg"
  },
  {
    nombre: "Morty",
    apellido: "Smith",
    edad: 14,
    profesion: "Estudiante de secundaria / Acompañante de Rick",
    direccion: { calle: "Harry Herpson High School", ciudad: "Earth (C-137)", estado: "Suburbios" },
    hobbies: ["Aventuras con Rick", "Videojuegos", "Pasar tiempo con Jessica"],
    foto: "https://rickandmortyapi.com/api/character/avatar/2.jpeg"
  },
  {
    nombre: "Summer",
    apellido: "Smith",
    edad: 17,
    profesion: "Estudiante de preparatoria",
    direccion: { calle: "Casa de los Smith", ciudad: "Earth (C-137)", estado: "Suburbios" },
    hobbies: ["Redes sociales", "Sobrevivir apocalipsis", "Sarcasmo"],
    foto: "https://rickandmortyapi.com/api/character/avatar/3.jpeg"
  },
  {
    nombre: "Beth",
    apellido: "Smith",
    edad: 34,
    profesion: "Veterinaria (cirugía de caballos) / ¿Clon?",
    direccion: { calle: "Hospital veterinario", ciudad: "Earth (C-137)", estado: "Suburbios" },
    hobbies: ["Trabajo", "Debatir con Jerry", "Aventuras con Space Beth"],
    foto: "https://rickandmortyapi.com/api/character/avatar/4.jpeg"
  },
  {
    nombre: "Jerry",
    apellido: "Smith",
    edad: 35,
    profesion: "Padre de familia (a veces desempleado)",
    direccion: { calle: "Casa de los Smith", ciudad: "Earth (C-137)", estado: "Suburbios" },
    hobbies: ["Publicidad fallida", "Cazar dragones (mal)", "Pasatiempos dudosos"],
    foto: "https://rickandmortyapi.com/api/character/avatar/5.jpeg"
  },
  {
    nombre: "Abadango",
    apellido: "Cluster Princess",
    edad: 300,
    profesion: "Gobernante de Abadango",
    direccion: { calle: "Palacio Real", ciudad: "Abadango", estado: "Cluster" },
    hobbies: ["Política intergaláctica", "Bailes reales", "Protocolo"],
    foto: "https://rickandmortyapi.com/api/character/avatar/6.jpeg"
  }
];

const columna = document.querySelector(".container .row:nth-of-type(2) .col-12");

columna.innerHTML = `
  <div class="row g-4">
    ${personajes.map(p => `
      <div class="col-sm-6 col-md-4">
        <div class="card shadow h-100">
          <img
            src="${p.foto || ''}"
            alt="${p.nombre} ${p.apellido}"
            class="d-block mx-auto my-3"
            style="
              width:170px;
              height:210px;
              object-fit:cover;
              object-position:50% 12%;
              border-radius:12px;
            "
          >
          <div class="card-body">
            <h5 class="card-title">${p.nombre} ${p.apellido}</h5>
            <p>Edad: ${p.edad} años</p>
            <p>Profesión: ${p.profesion}</p>
            <p>Dirección: ${p.direccion.calle}, ${p.direccion.ciudad}, ${p.direccion.estado}</p>
            <p>Hobbies:</p>
            <ul>
              ${p.hobbies.map(h => `<li>${h}</li>`).join("")}
            </ul>
          </div>
        </div>
      </div>
    `).join("")}
  </div>
`;
