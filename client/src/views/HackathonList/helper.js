import moment from "moment";

/**
 * Method to filter the hackathons by name and date
 * @param {Array} hackathons
 * @param {object} filters
 * @returns
 */
export const filterHackathons = (hackathons, filters) => {
  return hackathons.filter((hackathon) => {
    return (
      hackathon.name.toLowerCase().includes(filters.toLowerCase()) ||
      makeDate(hackathon.date).toLowerCase().includes(filters.toLowerCase())
    );
  });
};

/**
 * Method to format the hackathon date to a more legible format
 * @param {Date} date
 * @returns string
 */
export const makeDate = (date) => {
  return moment(new Date(date)).format("LLLL");
};
