const supertest = require("supertest");
const server = require("../server");
const db = require("../data/config");

test("GET /", async () => {
  const res = await supertest(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toBe("Welcome to the DevDesk Queue BackEnd");
});
