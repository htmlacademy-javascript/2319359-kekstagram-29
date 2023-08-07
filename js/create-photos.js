import {createRandomInteger} from './randomizer.js';

const descriptions = [
  'Цветочное поле весной',
  'Вид на сад',
  'Милые собaчки',
  'Красивый домик',
  'Вид на море'
];

const likes = {
  MIN: 15,
  MAX: 200,
};

const messages = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Лица у людей на фотке перекошены, как будто их избивают.'
];

const names = [
  'Павел',
  'Артём',
  'Наталья',
  'Виктор',
  'Настя'
];

const createComment = () => ({
  id: Math.random() * 10000,
  avatar: `img/avatar-${createRandomInteger(0, 6)}.svg`,
  message: messages[createRandomInteger(0, messages.length - 1)],
  name: names[createRandomInteger(0, 5)]
});

const createComments = (count) => {
  const comments = [];
  for (let i = 0; i < count; i++) {
    comments.push(createComment());
  }
  return comments;
};

const createPhoto = (id) => ({
  id: id,
  url:`photos/${id}.jpg`,
  description: descriptions [createRandomInteger(0, descriptions.length - 1)],
  likes: createRandomInteger(likes.MIN, likes.MAX),
  comments: createComments(createRandomInteger(0, 30))
});

const createPhotos = () => {
  const photosAll = [];
  for (let i = 1; i <= 25; i++) {
    photosAll.push(createPhoto(i));
  }
  return photosAll;
};

createPhotos();
