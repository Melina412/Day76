// Erstelle eine Funktion, die mit Hilfe von Filter ein Array mit Objekten anhand der Bevölkerungszahl filtert. Sie soll die Städte zurückgeben, die mehr als 100000 Einwohner haben.
export function filterHighPopulation(array) {
  return array
    .filter((city) => city.population > 100000)
    .map((city) => city.city);
}

// Erstelle eine weitere Funktion, die die Städte zurückgibt, die weniger als 100000 Einwohner haben.
export function filterLowPopulation(array) {
  return array
    .filter((city) => city.population < 100000)
    .map((city) => city.city);
}
