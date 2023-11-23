import { arrayCars, arrayNumbers } from "./data.js";
import { compareNumbers, sortArray } from "./function.js";

console.log("Autos alphabetisch sortiert:", sortArray(arrayCars));
console.log("Zahlen alphabetisch(◔_◔) sortiert:", sortArray(arrayNumbers));
console.log("Zahlen aufsteigend sortiert:", compareNumbers(arrayNumbers));
