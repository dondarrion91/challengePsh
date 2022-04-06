import moment from "moment";

export const filterHackathons = (hackathons, filters) => {
  return hackathons.filter((hackathon) => {
    return (
      hackathon.name.toLowerCase().includes(filters.toLowerCase()) ||
      makeDate(hackathon.date).toLowerCase().includes(filters.toLowerCase())
    );
  });
};

export const makeDate = (date) => {
  return moment(date).format("LLLL");
};
