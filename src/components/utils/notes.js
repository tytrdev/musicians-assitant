import LinkedList, { Item } from 'linked-list';

function generateItem(note, index) {
  const item = new Item();
  item.note = note;
  item.index = index;
  return item;
}

const A = generateItem('A', 0);
const Bb = generateItem('Bb', 1);
const B = generateItem('B', 2);
const C = generateItem('C', 3);
const Db = generateItem('Db', 4);
const D = generateItem('D', 5);
const Eb = generateItem('Eb', 6);
const E = generateItem('E', 7);
const F = generateItem('F', 8);
const Gb = generateItem('Gb', 9);
const G = generateItem('G', 10);
const Ab = generateItem('Ab', 11);

const list = LinkedList.from([
  A,
  Bb,
  B,
  C,
  Db,
  D,
  Eb,
  E,
  F,
  Gb,
  G,
  Ab,
]);

function toArray() {
  const array = [];

  let item = list.head;

  do {
    array.push(item);
    item = item.next;
  } while (item);

  return array;
}

export default {
  A,
  Bb,
  B,
  C,
  Db,
  D,
  Eb,
  E,
  F,
  Gb,
  G,
  Ab,
  list,
  array: toArray(),
};
