const supertest = require("supertest");
const server = require("../server");


describe( 'get weather' , () => {
    it("GET / works",  async () => {
        const response = await supertest(server).get("/california");
        expect(response.status).toBe(200);
        expect(response.body.country).toBe("US");
    })
})

// test("get weather", async () => {
//   const response = await supertest(server).get("/casablanca");
//   expect(response.status).toBe(200);
// });
