const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };

//1 - adicionando turno manhã em lesson2
const trocaTurno = (obj, key, value) => obj[key] = value;
//console.log(trocaTurno(lesson2, 'turno', 'manhã'));

//2 - Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.
const listKey = (obj) => Object.keys(obj);
//console.log(listKey(lesson3));

//3 - Crie uma função para mostrar o tamanho de um objeto.
const lengthObj = (obj) => Object.keys(obj).length;
//console.log(lengthObj(lesson3));

//4 - Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.
const valueObj = (obj) => Object.values(obj);
//console.log(valueObj(lesson3));

//5 - Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:
const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
//console.log(allLessons)


//6 - Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

const getNumberOfStudents = (obj) => {

    let array = Object.keys(obj);
    let total = 0;
    for (key in array) {
        
        total += obj[array[key]].numeroEstudantes;
    }

    return total;
}
//console.log(getNumberOfStudents(allLessons));

//7 Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. 

const getKeyValue = (obj,number) => Object.values(obj)[number];
console.log(getKeyValue(lesson1, 0));
// Output: 'Matématica'

//8 Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.
const verifyPair = (obj, key, value) => {
    const arr = Object.entries(obj);
    let isEqual = false;
    for (let i in arr) {
      if (arr[i][0] === key && arr[i][1] === value) isEqual = true;
    }
    return isEqual;
  };
  console.log(verifyPair(lesson2,'professor','Carlos'));

  //Bônus Crie uma função para contar quantos estudantes assistiram às aulas de matemática. Use o objeto criado no exercício 5.
  const getNumberOfStudentsMath = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
      if(obj[array[i]].materia === 'Matemática'){
      total += obj[array[i]].numeroAlunos;
      }
    }
    return total;
  }
  console.log(getNumberOfStudents(allLessons));

  //Crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes. Use o objeto criado no exercício 5:
  const getInfo = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (i in array) {
      if (array[i].professor === name) {
        allLessons.push(array[i].materia)
        allStudent += array[i].numeroAlunos;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getInfo(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));