const baseFilmes = [
  'tt0107688',
  'tt0099785',
  'tt0038650',
  'tt3281548',
  'tt0170016',
  'tt0319343',
  'tt0170016',
  'tt4729430',
  'tt0338348',
  'tt0033045',
];

const catalogo = [];

function criaCatalogo() {
  while (catalogo.length < 5) {
    let id = randomID();
    if (catalogo.indexOf(baseFilmes[id]) == -1) {
      catalogo.push(baseFilmes[id]);
    }
  }
}

function randomID() {
  return Math.floor(Math.random() * baseFilmes.length);
}