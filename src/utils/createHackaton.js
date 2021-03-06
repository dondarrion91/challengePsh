import moment from "moment";
import { sequelize, Developer } from "../../models";
import { saveHackaton } from "./saveHackaton";
import { calculateHackatonPoints } from "./helper";

export const createHackaton = async () => {
  const transac = await sequelize.transaction();

  try {
    const developers = await Developer.findAll({
      order: sequelize.literal("rand()"),
      limit: 10,
    });

    const developerMockData = developers.map((developer, index) => ({
      id: developer.id,
      firstName: developer.firstName,
      lastName: developer.lastName,
      gender: developer.gender,
      country: developer.country,
      city: developer.city,
      image: developer.image,
      hackatonPoints:
        developer.hackatonPoints + (calculateHackatonPoints(index + 1) || 0),
    }));

    // Adds actual hackaton points to developer total points
    await Promise.all(
      developerMockData.map((developer) =>
        Developer.update(
          developer,
          { where: { id: developer.id } },
          { transaction: transac }
        )
      )
    );

    // Gets the first developer location to use it as hackaton location.
    const hackatonRandomLocation = {
      country: developers[0].country,
      city: developers[0].city,
    };

    const hackatonData = {
      name: `Hackaton ${hackatonRandomLocation.city} ${moment().year()}`,
      place: `${hackatonRandomLocation.country} - ${hackatonRandomLocation.city}`,
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
