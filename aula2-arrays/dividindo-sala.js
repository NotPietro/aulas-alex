const alunos = [
    "João",
    "Pietro",
    "Ana",
    "Felipe",
    "Isaac",
    "Caua",
    "Gustavo",
    "Renan",
    "Luis",
    "Livia",
    "Giovana",
    "Miguel",
    "Allan",
    "Jorge",
    "Carlos",
    "Adriam",
    "Pedro",
    "Leonardo",
    "Shauan",
    "Matheus",
];

// alunos.slice(0, 10);

// console.log(alunos);

const sala1 = alunos.slice(0, alunos.length / 2);
const sala2 = alunos.slice(alunos.length / 2);

console.log(sala1);
console.log(sala2);