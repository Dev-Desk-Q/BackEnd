const supertest = require("supertest");
const server = require("../server");
const db = require("../data/config");


// Test that the API works and is online
test("GET /", async () => {
  const res = await supertest(server).get("/");
  expect(res.statusCode).toBe(200);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toBe("Welcome to the DevDesk Queue BackEnd");
});


// Test that logging in with the wrong credentials rejects it with the proper code and message
test("Login POST", async () => {
  const userInfo = {username: "student1", password: "badpassword"}
  const res = await supertest(server)
  .post("/api/users/login")
  .send(userInfo)
  expect(res.statusCode).toBe(401);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toBe("Invalid Credentials");
});

// Test that trying to register with an existing account rejects it due to a username overlap
test("Registration Duplicate Username POST", async () => {
  const userInfo = {username: "student1", password: "badpassword"}
  const res = await supertest(server)
  .post("/api/users/register")
  .send(userInfo)
  expect(res.statusCode).toBe(409);
  expect(res.type).toBe("application/json");
  expect(res.body.message).toBe("Username is already taken");
});

