/*
Exercício 11: Produza três querys para o filme Batman :
Adicione o campo actor , que deve ser um array com o valor Christian Bale , ao array de cast em que o campo character seja igual a Batman ;
Adicione o campo actor , que deve ser um array com o valor Michael Caine , ao array de cast em que o campo character seja igual a Alfred ;
Adicione o campo actor , que deve ser um array com o valor Heath Ledger , ao array de cast em que o campo character seja igual a Coringa .
*/

db.movies.updateOne(
  { title: "Batman" },
  { $set: { "cast.$[element].actor": ["Christian Bale"] } },
  { arrayFilters: [{ "element.character": "Batman" }] }
);

db.movies.updateOne(
  { title: "Batman" },
  { $set: { "cast.$[element].actor": ["Michael Caine"] } },
  { arrayFilters: [{ "element.character": "Alfred" }] }
);

db.movies.updateOne(
  { title: "Batman" },
  { $set: { "cast.$[element].actor": ["Heath Ledger"] } },
  { arrayFilters: [{ "element.character": "Coringa" }] }
);
