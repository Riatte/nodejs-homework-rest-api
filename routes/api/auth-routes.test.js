const app = require("../../app");
const moongoose = require("mongoose");
const request = require("supertest");
const User = require("../../models/user");

const { DB_HOST, PORT, DB_NAME } = process.env;

describe("test login route", () => {
  let server = null;

  beforeAll(async () => {
    await moongoose.connect(DB_HOST, {
      dbName: DB_NAME,
    });
    server = app.listen(PORT);
  });

  afterAll(async () => {
    await moongoose.connection.close();
    server.close();
  });

  test("test correct login data", async () => {
    const loginData = {
      email: "varvara.babich13@gmail.com",
      password: "123456",
    };

    const { body, statusCode, token } = await request(app)
      .post("/users/login")
      .send(loginData);
    expect(statusCode).toBe(200);
    expect(token).toBe();
    expect(body.user.email).toBe(loginData.email);
    expect(body.user.subscription).toBe("starter");
  });
});
