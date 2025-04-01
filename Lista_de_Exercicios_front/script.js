alert("Hello World");

console.log("Meu primeiro script em JavaScript");

let n1 = 10, n2 = 10;

console.log(n1 + n2);

let nome;

nome = prompt("Digite seu nome: ");
alert(`Ola ${nome}, seja bem vindo!`);


let num = "35";

console.log(parseInt(num));

let boll = false;
console.log(boll);

let letra = "A"

console.log(typeof(letra));

function calcular(){
    let n1 = Number(document.getElementById('num1').value);
    let n2 = Number(document.getElementById('num2').value);
    alert(`A soma dos números foi de: ${n1 + n2}`);
}

let val = 10;
console.log(`Valor da variável no momento: ${val}`);
val = 20;
console.log(`Valor da variável dps damudança: ${val}`);

let teste = 24;

if(teste % 2 == 0){
    console.log("O número é par");
} else {
    console.log("O número é impar");
}

const nomi = "Cloves";

console.log("A constante n pode mudar pq ela é uma constante, uma vez definida, n pode ser mudada");

let muda = 115;

console.log(`O valor da variável muda é: ${muda}`);

muda += 200;

console.log(`O valor da variável muda dps da mudança é: ${muda}`);

let v1 = 50, v2 = 50;v3 = 50;

console.log((v1 + v2 + v3) / 3);

function dobrar(){
    let n  = Number(document.getElementById('dobro').value);
    alert(n * 2);
}

function converter(){
    let celsius = Number(document.getElementById('convert').value);
    alert(`${celsius*1.8 + 32}°F`)
}

function verificId(){
    let calll = Number(document.getElementById('id1').value);   
    let calll2 = Number(document.getElementById('id2').value);   
    if(calll > calll2){
        alert(calll + " é maior");
    }
    else{
        alert(calll2 + " é menor");
    }
}

function CalcuMai(){
    let veomaior = Number(document.getElementById('nume1').value);
    let veomaior2 = Number(document.getElementById('nume2').value);
    let veomaior3 = Number(document.getElementById('nume3').value);
    if (veomaior >= veomaior2 && veomaior >= veomaior3) {
        alert(veomaior + " é maior");
    } else if (veomaior2 >= veomaior && veomaior2 >= veomaior3) {
        alert(veomaior2 + " é maior");
    } else if (veomaior3 >= veomaior && veomaior3 >= veomaior2) {
        alert(veomaior3 + " é maior");
    } else if(veomaior3 == veomaior && veomaior3 == veomaior2) {
        alert("Os números são iguais");
    }
}

for(let i = 1; i < 11; i++){
    console.log(i);
}

let h = 10;

while(h >= 1){
    console.log(h);
    h--;
}



prompt("Digite um valor: ");

function maiorque(){
    let verifiMaior = Number(document.getElementById('umValor').valor);

    for(let i = 0; verifiMaior < 10;i++){
        console.log(verifiMaior);
        verifiMaior++;
    }
}