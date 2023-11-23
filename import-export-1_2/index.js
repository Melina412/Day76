import { names, numbers } from "./data.js";
import _ from "lodash";
import {
  alleAusserErstesElement,
  alleAusserLetztesElement,
  erstesElement,
  letztesElement,
  removeElement,
  uniqueValues,
  sum,
  sum2,
  randomNumber,
  capitalize,
  uppercase,
  lastLetter,
} from "./function.js";

// ----------------------------------------------------------------------------
console.log("Erstes Element des Arrays:");
console.log(erstesElement(names));
console.log(erstesElement(numbers));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("Letztes Element des Arrays:");
console.log(letztesElement(names));
console.log(letztesElement(numbers));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("alle AUSSER dem letzten Element des Array:");
console.log(alleAusserLetztesElement(names));
console.log(alleAusserLetztesElement(numbers));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("ALLE AUSSER DEM ERSTEN Element des Arrays:");
console.log(alleAusserErstesElement(names));
console.log(alleAusserErstesElement(numbers));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log(
  "function, die ein bestimmtes Element komplett aus deinem Array entfernt:"
);
console.log(removeElement(names, "Simon"));
console.log(removeElement(numbers, 2));
console.log(
  removeElement(["remove", "stay", "stay5", 22, true, "remove"], "remove")
);
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("gibt Array zurück, das nur aus einzigartigen Werten besteht:");
console.log(uniqueValues([1, 6, 9, 2, 1, 6, 7, 10]));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("Summe des Arrays “numbers”:");
console.log("mit reduce --", sum(numbers));
console.log("mit _.sum (lodash) --", sum2(numbers));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("Zufällige Zahl zwischen zwei Paramatern:");
console.log(randomNumber(1, 10));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("ersten Buchstaben in einen Großbuchstaben umwandeln:");
console.log(capitalize("hallo"));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log("gesamten String in Großbuchstaben umwandeln:");
console.log(uppercase("hallo"));
console.log("====================================");

// ----------------------------------------------------------------------------
console.log(
  "überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt:"
);
console.log(lastLetter("Test", "t"));
console.log(lastLetter("Test", "q"));
console.log("====================================");
