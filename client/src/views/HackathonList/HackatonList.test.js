import { makeDate, filterHackathons } from "./helper";

const hackathons = [
  {
    name: "Hackathon 1",
    date: "2020-01-01T00:00:00.000Z",
  },
  {
    name: "Hackathon 2",
    date: "2020-01-01T00:00:00.000Z",
  },
  {
    name: "Hackatlon 3",
    date: "2020-02-01T00:00:00.000Z",
  },
];

describe("HackatonList helpers unit tests", () => {
  it("makeDate should parse the date to a more legible format", async () => {
    const date = "2020-01-01T00:00:00.000Z";
    expect(makeDate(date)).toEqual("Tuesday, December 31, 2019 9:00 PM");
  });

  it("filterHackathons should filter the hackathons by name", () => {
    const filters = "Hackathon";
    expect(filterHackathons(hackathons, filters)).toEqual([
      {
        name: "Hackathon 1",
        date: "2020-01-01T00:00:00.000Z",
      },
      {
        name: "Hackathon 2",
        date: "2020-01-01T00:00:00.000Z",
      },
    ]);
  });

  it("filterHackathons should filter the hackathons by date", () => {
    const filters = "Friday";
    expect(filterHackathons(hackathons, filters)).toEqual([
      {
        name: "Hackatlon 3",
        date: "2020-02-01T00:00:00.000Z",
      },
    ]);
  });
});
