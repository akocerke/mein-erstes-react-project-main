// userData.js

import { fakerDE as faker } from '@faker-js/faker';

const generateRandomUserData = () => {
  return {
    username: faker.internet.userName(),
    profileImage: faker.image.avatar(),
    posts: faker.number.int({ min: 1, max: 500 }),
    followers: faker.number.int({ min: 1, max: 10000 }),
    following: faker.number.int({ min: 1, max: 700 }),
    bio: faker.lorem.sentences(),
  };
};

export default generateRandomUserData;
