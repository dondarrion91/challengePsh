/**
 * Function recieves hackaton position and returns the ranking position points.
 * @param {number} position
 * @returns number
 */
export const calculateHackatonPoints = (position) => {
  const points = {
    1: 100,
    2: 90,
    3: 80
  };

  return points[position];
};
