const minhaString = "Eu não sou supersticioso, mas sou um pouco ________.      ";/* # Exercício 2 */


const numbers = [71, 99, 10, 96,13];
const strings = ["Vinícius", "Joyce", "Phellipe", "Sueli"];
const mix = ["Vinícius", 26, true];


/* Com os arrays criados, agora vamos observar os arrays. Faça o que se pede abaixo, utilizando `console.log()`:

- Imprima a quantidade de itens de cada array (utilize um console.log() para cada impressão); */
console.log(numbers);
console.log("A quantidade de itens nesse array é de:",numbers.length);

console.log(strings);
console.log("A quantidade de itens nesse array é de:",strings.length);

console.log(mix);
console.log("A quantidade de itens nesse array é de:",mix.length);

//- Imprima o primeiro item do primeiro array, o segundo item do segundo array, e o terceiro item do terceiro array;
console.log("O primeiro item do array 'numbers' é o:",numbers[0]);

console.log("o segundo item do array 'string' é o:",strings[1]);

console.log("O terceiro item do array 'mix' é o:",mix[2]);


//- Verifique se um item está incluído no primeiro array e depois no terceiro array e imprima o resultado destas verificações no console.log(). A primeira impressão deve retornar um booleano true e a segunda deve retornar um booleano false. 
console.log(`No array 'numbers' possui o item "${96}"?`, numbers.includes(96));

console.log(`No array 'mix' possui o item "${"joyce"}"?`, numbers.includes("Joyce"));

