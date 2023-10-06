import { createServer } from "node:http";
import Chance from "chance";

// export const server = …

const chance = new Chance();

export const server = createServer((request, response) => {
  const name = chance.name();
  const age = chance.age();
  const profession = chance.profession();

  const responseString = `Hello, my name is ${name} and I am ${age} years old. I am a ${profession}.`;

  responseString.setHeader("Content-Type", "text/plain");
  response.statusCode = 200;

  response.end(responseString);
});
