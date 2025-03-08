// --------------------------------Aula 25-02--------------------------------
let mensagem: string = "Olá, TypeScript!";
console.log(mensagem);

// Exercício 1
let valores: number[] = [10, 20, 30];
let somaValores: number = valores.reduce((acc, val) => acc + val, 0);
console.log("Soma dos valores:", somaValores);

// Exercício 2
function mensagemPersonalizada(nome: string): string {
    return `Olá, ${nome}! Bem-vindo ao TypeScript.`;
}
console.log(mensagemPersonalizada("Ana"));

// Exercício 3
class Carro {
    constructor(public marca: string, public modelo: string, public ano: number) {}
    detalhes(): string {
        return `${this.marca} ${this.modelo}, Ano: ${this.ano}`;
    }
}
const carro1 = new Carro("Toyota", "Corolla", 2022);
console.log(carro1.detalhes());

// --------------------------------Aula 07-03--------------------------------

// Exercício 1
interface Carros {
    marca: string;
    modelo: string;
    ano: number;
    motor?: string;
}

const meuCarro: Carros = {
    marca: "toyota",
    modelo: "corolla",
    ano: 2022,
    motor: "2.0 L Dual VVT-iE 16 V DOHC Flex"
};

console.log(meuCarro)

// Exercício 2
interface Multiplicacao {
    (num1: number, num2: number): number;
}

const multiplicar: Multiplicacao = (x, y) => x * y;
console.log("Resultado da multiplicação: " + multiplicar(10,20));


// Exercício 3
function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
}

const numeros: number[] = [1, 2, 3, 4, 5];
console.log("Array de números invertido:", inverterArray(numeros));

const strings: string[] = ["a", "b", "c", "d", "e"];
console.log("Array de strings invertido:", inverterArray(strings));

// Exercício 4
interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
}

class UsuarioRepositorio implements Repositorio<{ nome: string; email: string }> {
    private usuarios: { nome: string; email: string }[] = [];
    salvar(dado: { nome: string; email: string }): void {
        this.usuarios.push(dado);
    }
    obterTodos(): { nome: string; email: string }[] {
        return this.usuarios;
    }
}

const repo = new UsuarioRepositorio();
repo.salvar({ nome: "Eduardo Akira Murata", email: "eduardoakiramurata@gmail.com" });
repo.salvar({ nome: "Larissa Midori Martins Uehara", email: "larissamidori1300@gmail.com" });
console.log("Lista de usuários:", repo.obterTodos());

// Exercício 5
type RespostaServidor = string | boolean;
function processarResposta(resposta: RespostaServidor): void {
    if (typeof resposta === "string") {
        console.log(`Resposta do servidor: ${resposta}`);
    } else if (typeof resposta === "boolean") {
        console.log(`Operação foi bem-sucedida? ${resposta ? "Sim" : "Não"}`);
    }
}
// Teste da função
processarResposta("Dados processados com sucesso!");
processarResposta(true);
processarResposta(false);

// Exercício 6
type Estudante = {
    nome: string;
    curso: string;
};
type Trabalhador = {
    empresa: string;
    cargo: string;
};
type EstudanteTrabalhador = Estudante & Trabalhador;
const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: "Eduardo Akira Murata",
    curso: "Engenharia de Software",
    empresa: "Itaú Unibanco",
    cargo: "Anl de Eng de Ti Júnior"
};
console.log("Estudante Trabalhador:", estudanteTrabalhador);
