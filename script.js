//realizar una app que permita capturar 
//nombre, apellido, matricula, curso, nota.
//debe de tener boton agregar
//los datos se deben de mostrar en una  tabla con los campos
//los datos en la tabla deben de tener una columna de acciones 
//con las funcionalidades de editar y eliminar.


const form = document.getElementById("formulario");
const tbdatos= document.getElementById("data");
let estudiantes= [];



form.addEventListener("submit", (e) => {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const apellido = document.getElementById("apellido").value;
    const matricula = document.getElementById("matricula").value;
    const curso = document.getElementById("curso").value;
    const nota = document.getElementById("nota").value;
    const validacion = estudiantes.some(estudiante => estudiante.matricula === matricula);

    if (nombre && apellido && matricula && curso && nota ) {
        if (!validacion) {
            const estudiante = { nombre, apellido, matricula, curso, nota };
            estudiantes.push(estudiante);
           agregarData();
           form.reset();
            
        } else {
            alert("Ya existe un estudiante con esta matricula");
       }
    }else{
        alert("Por favor, complete todos los campos.");
    }

});



function agregarData (){
    tbdatos.innerHTML = "";
    estudiantes.forEach((estudiante, indice) => {
        const fila = document.createElement("tr");
        fila.innerHTML = `
        <td>${estudiante.nombre}</td>
        <td>${estudiante.apellido}</td>
        <td>${estudiante.curso}</td>
        <td>${estudiante.matricula}</td>
        <td>${estudiante.nota}</td>
        <td>
            <button class="editar-btn" onclick="editar(${indice})">Editar</button>
            <button class="eliminar-btn" onclick="eliminar(${indice})">Eliminar</button>
        </td>
    `;
        tbdatos.appendChild(fila);
    });
   
}


function editar(indice){
    
    const estudiante = estudiantes[indice];
    document.getElementById("nombre").value = estudiante.nombre;
    document.getElementById("apellido").value = estudiante.apellido;
    document.getElementById("curso").value = estudiante.curso;
    document.getElementById("matricula").value = estudiante.matricula;
    document.getElementById("nota").value = estudiante.nota;

    estudiantes.splice(indice, 1);
 
    agregarData();
    
}


function eliminar(indice) {

    estudiantes.splice(indice, 1);
  
    agregarData();
}







