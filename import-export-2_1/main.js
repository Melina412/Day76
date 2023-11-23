import { data } from "./cities.js";
import { filterHighPopulation, filterLowPopulation } from "./filter.js";

console.log("-- Städte mit mehr als 100.000 Einwohnern:");
console.log(filterHighPopulation(data));
console.log("-- Städte mit weniger als 100.000 Einwohnern:");
console.log(filterLowPopulation(data));
