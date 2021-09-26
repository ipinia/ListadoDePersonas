const personas = [new Persona("Carlos", "Lopez"), new Persona("Ale ", "Lara")];

function mostrarPersonas() {
    console.log("Mostrar Personas...");
    let texto = "";
    for (let persona of personas) {
        console.log(persona);
        texto += `<li>${persona.nombre} ${persona.apellido}</li>`;
    }
    document.getElementById("personas").innerHTML = texto;
}

function agregarPersona() {
    const forma = document.forms["forma"]; //recuperamos el objeto de forma
    const nombre = forma["nombre"];
    const apellido = forma["apellido"];

    if (nombre.value != "" && apellido.value != "") {
        const persona = new Persona(nombre.value, apellido.value);
        console.log(persona);
        personas.push(persona);
        mostrarPersonas();
    } else {
        console.log("No hay información que agregar");
    }
}