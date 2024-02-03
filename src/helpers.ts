import { faker } from '@faker-js/faker';

export interface IPost {
  title: string;
  body: string;
}

export function createRandomPost(): IPost {
  return {
    title: `${faker.hacker.adjective()} ${faker.hacker.noun()}`,
    body: faker.hacker.phrase(),
  };
}
