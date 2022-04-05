import "babel-polyfill";
import server from "../index.js";
import supertest from "supertest";
const requestWithSupertest = supertest(server);

afterEach(async (done) => {
  await server.end();
  done();
});

describe("Developer endpoints", () => {
  it("GET /developer should show all developers", async () => {
    const res = await requestWithSupertest.get("/api/v1/developer");
    expect(res.status).toEqual(200);
    expect(res.type).toEqual(expect.stringContaining("json"));
  });
});
