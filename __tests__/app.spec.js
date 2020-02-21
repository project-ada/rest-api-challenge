const app = require("../app")
const request = require('supertest');

describe("app", () => {
  it("/ returns 'Hello world'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  })
})
