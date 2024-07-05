const marvel_heros=["thor","Ironman","spiderman"]
const dc_heros=["Superman","Flash","Batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);

const all_new_heros=[...marvel_heros,...dc_heros]   //spread operate denoted by ... and it use for add two arrays
// console.log(all_new_heros);

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity) // flat used for add more than two or three array in one array

console.log(real_another_array);

console.log(Array.isArray("Achyut")) // check it is it array or not
console.log(Array.from("Achyut"))   // from used to convert it into array
console.log(Array.from({name:"Achyut"})) //intresting


let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3))