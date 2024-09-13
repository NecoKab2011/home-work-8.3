let string = "";
const words = ["Mango", "Poly", "Kiwi", "Ajax"];
console.log(words);
for (let i = 0; i < words.length; i ++) {
  string = string + words[i] + ",";
}
console.log(string);
string = words.join(",");
console.log(string);

const cards = [
    "Карточка-1",
    "Карточка-2",
    "Карточка-3",
    "Карточка-4",
    "Карточка-5",
  ];
const cardToRemove = "Карточка-3";
const cardToInsert = "Карточка-6";
const cardToUpdate = "Карточка-4";
console.log(cards);
cards.splice(cards.indexOf(cardToRemove), 1);
console.log(cards);
cards.push(cardToInsert);
console.log(cards);
cards.splice(cards.indexOf(cardToUpdate), 1, "Карточка-7");
console.log(cards);