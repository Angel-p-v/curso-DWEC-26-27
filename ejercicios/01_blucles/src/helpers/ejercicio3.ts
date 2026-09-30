/// Ejercicio uso de filter, maps y otros en typescript
//
// crear programa que muestre el nombre de los alumnos 
// calcule su nota media
// mostrar alumnos con nota media mas alta 
// calcular la media global de la clase
//
// {nombre: 'Luis',edad: 22, notas [5,4,6,3] }
// {nombre: 'Dani',edad: 19, notas [1,2,5,8] }
// {nombre: 'Sara',edad: 20, notas [5,6,6,1] }
// {nombre: 'Alvaro',edad: 21, notas [10,10,9,10] }
//
// para declarar tipos de objetos en typescript uso type y el objeto comienza siempre en mayuscula 
//
// --- declaracion de tipos ---

type Alumno = {
  nombre : string;
  edad : number;
  notas : number[];
}

// ---declaracion de variables---

const alumnado : Alumno[] = [
 {nombre: 'Luis',edad: 22, notas: [5,4,6,3] },
 {nombre: 'Dani',edad: 19, notas: [1,2,5,8] },
 {nombre: 'Sara',edad: 20, notas: [5,6,6,8] },
 {nombre: 'Alvaro',edad: 21, notas: [10,10,9,10] },
]


// obten los nombres(solo) de los alumnos
function obtenerNombres (alumnos : Alumno[]){
  return alumnos.map( alumno => alumno.nombre )
}
// const obtenerNombresV2 = (alumnos : Alumno[]) => alumnos.map( alumno => alumno.nombre )


// obtener la media de cada alumno 
function obtenerMedias (alumnos : Alumno[]){
  const notas = alumnos.map( alumno => alumno.notas)
  const puntos : number[] = []
  for (const nota of notas){
    let suma = 0
    let totalNotas = 0

    for (const punto of nota){
      suma += punto
      totalNotas++
    } 
    puntos.push(suma/totalNotas)
  }
  return puntos
}


// obtener alumnos con mayor nota media
function mayorMediaAlumno(alumnos : Alumno[]){
  const nombres : string[] = obtenerNombres(alumnos)
  const medias : number[] = obtenerMedias(alumnos)
  const nombreYNota : [string,number][] = []
  let posicion : number = 0

  for (const nombre of nombres){
    nombreYNota.push([nombre,medias[posicion]])
    posicion++
  }
  return nombreYNota.filter(([nombre,nota]) => nota >= mediaGlobal(alumnos))
}


// obtener media global
function mediaGlobal(alumno : Alumno[]){
  let mediaIndividual : number[] = obtenerMedias(alumno)
  let numeroAlumnos : number = 0
  let totalNotas : number = 0
  for(const media of mediaIndividual){
    totalNotas += media
    numeroAlumnos++
  }
  return Number((totalNotas / numeroAlumnos).toFixed(2))
}


//--- inicializar el ejercicio ---
console.log("El nombre de los alumnos es: " + obtenerNombres(alumnado))
console.log("La media de cada alumno es: " + obtenerMedias(alumnado))
console.log ("Los alumnos con las notas medias más altas son: " + mayorMediaAlumno(alumnado))
console.log("La media de la clase es de: " + mediaGlobal(alumnado))


