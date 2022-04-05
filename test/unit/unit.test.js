import "babel-polyfill";
import { calculateHackatonPoints } from "../../src/utils/helper";

const FIRST_PLACE = 1;
const SECOND_PLACE = 2;
const THIRD_PLACE = 3;

describe("calculateHackatonPoints should return the amount of points corresponding to his position", () => {
  it("First place should return 100 points", async () => {
    const points = calculateHackatonPoints(FIRST_PLACE);
    expect(points).toEqual(100);
  });

  it("Second place should return 90 points", async () => {
    const points = calculateHackatonPoints(SECOND_PLACE);
    expect(points).toEqual(90);
  });

  it("Third place should return 80 points", async () => {
    const points = calculateHackatonPoints(THIRD_PLACE);
    expect(points).toEqual(80);
  });
});
