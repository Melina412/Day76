import _ from "lodash";

// - Alle Funktionen bekommen ein Array übergeben.
// Jeder der folgenden Punkte ist eine EIGENE Funktion!

// Gib nur das ERSTE Element des Arrays zurück
export function erstesElement(array) {
  return array[0];
}

// Gib nur das LETZTE Element des Arrays zurück
export function letztesElement(array) {
  //   return array[array.length - 1]; // js rafft array[-1] nicht lol
  return _.last(array);
}

// Gib alle AUSSER dem letzten Element des Arrays zurück
export function alleAusserLetztesElement(array) {
  return array.slice(0, -1);
}

// Gib ALLE AUSSER DEM ERSTEN Element des Arrays zurück
export function alleAusserErstesElement(array) {
  return array.slice(1);
}

// schreibe eine function, die ein bestimmtes Element komplett aus deinem Array entfernt=> Input: ([“remove”, “stay”, “stay5”, 22, true, “remove”], “remove”)=> Output: [“stay”, “stay5”, 22, true]
export function removeElement(array, element) {
  let array_copy = [...array];
  while (array_copy.indexOf(element) !== -1) {
    array_copy.splice(array_copy.indexOf(element), 1);
  }
  return array_copy;
  // loop weil sonst nur das erste vorkommen gelöscht würde
  // array kopieren damit die anderen aufgaben danach noch funktionieren
  // toSpliced geht hier auch nicht wegen dem loop
}

// Gib ein Array zurück, das nur aus einzigartigen Werten besteht. Entferne die doppelten Elemente!=> Input: [1,6,9,2,1,6,7,10]=> Output: [1,6,9,2,7,10]
export function uniqueValues(array) {
  return [...new Set(array)];
  //   Set = object mit einzigartigen Werten
}

// Gib die Summe des Arrays “numbers” zurück.
export function sum(array) {
  return array.reduce((sum, currentValue) => sum + currentValue, 0);
}
// * alternativ: lodash library hat sum function analog zu numpy ^^
export function sum2(array) {
  return _.sum(array);
}

//

// - hier function ohne Array, trotzdem mit ParameternJeder der folgenden Punkte ist eine EIGENE Funktion!

// Die function bekommt zwei Parameter übergeben. Gib eine zufällige Zahl zurück, die zwischen diesen beiden liegt
export function randomNumber(num1, num2) {
  return _.random(num1, num2);
}

// Erstelle eine function, der ein String übergeben wird. Sie soll den ersten Buchstaben in einen Großbuchstaben umwandelt.
export function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

// Erstelle eine function, der ein String übergeben wird. Sie soll den gesamten String in Großbuchstaben umwandeln
export function uppercase(string) {
  return string.toUpperCase();
}

// Erstelle eine function, mit zwei Parametern. Sie soll überprüfen ob der letzte Buchstabe von Parameter 1 mit dem Parameter 2 überein stimmt=> Input: (‘Test’, ‘t’)=> Output: true => Input: (‘Test’, ‘q’)=> Output: false
export function lastLetter(param1, param2) {
  // index -1 rafft charAt nicht
  if (param1.charAt(param1.length - 1) === param2) {
    return true;
  } else {
    return false;
  }
}
