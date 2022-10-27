/* # Exercício 3

Agora, vamos manipular os arrays, adicionando ou removendo informações. Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`, e faça o que se pede abaixo nas cópias dos arrays originais; */
const numbers = [71, 99, 10, 96,13];
const numbersCopy = numbers.slice();


const strings = ["Vinícius", "Joyce", "Phellipe", "Sueli"];
const stringsCopy = strings.slice();


const mix = ["Vinícius", 26, true];
const mixCopy= mix.slice();


//- Adicione um item `number` ao início do primeiro array. Utilize `console.log()` para exibir o original e a cópia;
numbersCopy.unshift(26);

console.log("Array 'number' original:",numbers);
console.log("Cópia do array 'number':",numbersCopy);


//- Remova o último item do segundo array. Utilize `console.log()` para exibir o original e a cópia;
stringsCopy.pop();

console.log("Array 'string' original:", strings);
console.log("Cópia do array 'string':", stringsCopy);


//- Remova o segundo item do terceiro array. Utilize `console.log()` para exibir o original e a cópia;
mixCopy.splice(1,1);

console.log("Array 'mix' original:",mix);
console.log("Cópia do array 'mix':",mixCopy);