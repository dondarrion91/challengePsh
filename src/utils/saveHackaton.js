import { Hackaton, Ranking, DeveloperHackatons, RankingDeveloper } from "../../models";

const saveHackaton = async (hackatonData, developerMockData, t) => {
  const savedHackaton = await Hackaton.create(hackatonData, {
    transaction: t,
  });

  const savedRanking = await _saveRankingHackaton(savedHackaton.id, t);

  return await _saveRankingDeveloper(developerMockData, savedRanking, t);
}

/**
 * save one to one relationship between Hackaton and Ranking
 */
const _saveRankingHackaton = async (hackatonId, t) => {
  return await Ranking.create({hackatonId}, { transaction: t})
}

/**
 * save many to many relationship between Developers and Ranking
 */
const _saveRankingDeveloper = async (savedDevelopers, savedRanking, t) => {
  const developerRankingIds = savedDevelopers.map((savedDeveloper, index) => ({
    developerId: savedDeveloper.id,
    rankingId: savedRanking.id,
    position: index + 1
  }));

  return await RankingDeveloper.bulkCreate(developerRankingIds, { transaction: t})
}

export {
  saveHackaton
}