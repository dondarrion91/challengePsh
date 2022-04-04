import moment from "moment";
import { sequelize, Developer } from "../../models";
import { saveHackaton } from "./saveHackaton";
import { randomIntFromInterval } from "./helper";
const DEVELOPER_LIMIT=300;

export const createHackaton = async () => {
  const transac = await sequelize.transaction();
  const offset = randomIntFromInterval(0, DEVELOPER_LIMIT);

  try {
    const developers = await Developer.findAll({
      offset,
      limit: 10
    });

    const developerMockData = developers.map((developer) => ({
      id: developer.id,
      firstName: developer.firstName,
      lastName: developer.lastName,
      gender: developer.gender,
      country: developer.country,
      email: developer.email,
      image: developer.image,
    }));

    const hackatonRandomLocation = developers[0].country;

    const hackatonData = {
      name: `Hackaton ${hackatonRandomLocation} ${moment().year()}`,
      place: `${hackatonRandomLocation}`,
      date: moment().utc().toISOString(),
    };

    // Save Hackaton and Developers many to many relationship.
    await saveHackaton(hackatonData, developerMockData, transac);

    await transac.commit();
  } catch (error) {
    console.log(error);
    await transac.rollback();
  }
};
