import "babel-polyfill";
import server from "../index.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

afterEach(async (done) => {
  await server.close();
  done();
});

describe("Hackaton endpoints", () => {
  it("GET /hackaton should show all hackton with rankings", async () => {
    const res = await requestWithSupertest.get("/api/v1/hackaton");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});
