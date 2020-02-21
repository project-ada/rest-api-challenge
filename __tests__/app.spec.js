const app = require("../app")
const request = require('supertest');

describe("app", () => {
  it("/ returns 'Hello world'", async () => {
    const response = await request(app).get("/");
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello World!');
  })

  it("/suggest returns JSON data", async () => {
    const response = await request(app).get("/suggest");
    const data = [
      { key: 1, name: "Mac Cheese" },
      { key: 2, name: "Roast chicken" },
      { key: 3, name: "Fajita" },
      { key: 4, name: "Spicy Thai Peanut Sauce over Roasted Sweet Potatoes" },
      { key: 5, name: "Pizza" },
      { key: 6, name: "Prawn Masala" },
      { key: 7, name: "Beans and rice" },
      { key: 8, name: "Sugar Snap Pea and Carrot Soba Noodles" },
      { key: 9, name: "Eggs on Toast" }
    ]
    
    expect(response.statusCode).toBe(200);
    expect(response.type).toBe('application/json');
    expect(response.text).toBe(JSON.stringify(data));
  })
})
