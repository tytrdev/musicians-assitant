import { Item } from 'linked-list';
import _ from 'lodash';

function generateItem(note, index) {
  const item = new Item();
  item.note = note;
  item.index = index;
  return item;
}

const C = generateItem('C', 0);
const G = generateItem('G', 1);
const D = generateItem('D', 2);
const A = generateItem('A', 3);
const E = generateItem('E', 4);
const B = generateItem('B', 5);
const Gb = generateItem('Gb', 6);
const Db = generateItem('Db', 7);
const Ab = generateItem('Ab', 8);
const Eb = generateItem('Eb', 9);
const Bb = generateItem('Bb', 10);
const F = generateItem('F', 11);

const unrolled = [C, G, D, A, E, B, Gb, Db, Ab, Eb, Bb, F];

const tuples = [
  [0, 1],
  [11, 2],
  [10, 3],
  [9, 4],
  [8, 5],
  [7, 6],
];

function getIndex(index, offset) {
  return (index + offset) % 12;
}

function fromCenter(note) {
  const fifth = _.find(unrolled, n => n.note === note);
  const offset = fifth.index;

  const reversibleMap = {};

  tuples.forEach((tuple) => {
    const i1 = getIndex(tuple[0], offset);
    const i2 = getIndex(tuple[1], offset);

    const n1 = unrolled[i1];
    const n2 = unrolled[i2];

    reversibleMap[n1.note] = n2;
    reversibleMap[n2.note] = n1;
  });

  return reversibleMap;
}

export default {
  fromCenter,
};
