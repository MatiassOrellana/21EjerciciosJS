// Definición del objeto Persona
function Persona(nombre, edad, género) {
    this.nombre = nombre;
    this.edad = edad;
    this.género = género;
  }

  // Definición del objeto Estudiante que hereda de Persona
  function Estudiante(nombre, edad, género, curso, grupo) {
    Persona.call(this, nombre, edad, género);
    this.curso = curso;
    this.grupo = grupo;
  }
  
  function Profesor(nombre, edad, género, asignatura, nivel) {
    Persona.call(this, nombre, edad, género);
    this.asignatura = asignatura;
    this.nivel = nivel;
  }

  // Método para mostrar detalles de la persona
  Persona.prototype.obtDetalles = function() {
    resultado.textContent = `Nombre: ${this.nombre}, Edad: ${this.edad}, Género: ${this.género}`;
    
  };
  // Establecer la herencia de Estudiante desde Persona
  Estudiante.prototype = Object.create(Persona.prototype);
  
  // Método para registrar al estudiante
  Estudiante.prototype.registrar = function() {
    resultado1.textContent = `Estudiante ${this.nombre} registrado en el curso ${this.curso}, grupo ${this.grupo}`;
  };
  
  // Definición del objeto Profesor que hereda de Persona
  // Establecer la herencia de Profesor desde Persona
  Profesor.prototype = Object.create(Persona.prototype);
  
  // Método para asignar al profesor
  Profesor.prototype.asignar = function() {
    resultado2.textContent = `Profesor ${this.nombre} asignado a la asignatura ${this.asignatura}, nivel ${this.nivel}`;
  };
  


  function mostrarResultado() {

      // Crear objetos de prueba
    const estudiante1 = new Estudiante("Juan", 20, "Masculino", "101", "A");
    const profesor1 = new Profesor("Diana", 35, "Femenino", "Matemáticas", "Avanzado");
    
    // Pruebas
    resultado.textContent = "Detalles del estudiante:";
    estudiante1.obtDetalles();
    estudiante1.registrar();
    
    resultado.textContent = "\nDetalles del profesor:";
    profesor1.obtDetalles();
    profesor1.asignar();
      
    
}