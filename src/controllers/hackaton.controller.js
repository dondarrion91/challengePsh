import { Hackaton, Ranking, Developer, RankingDeveloper } from "../../models";

export const getHackatons = async (req, res) => {
  try {
    const hackatonData = await Hackaton.findAll({
      include: [
        {
          model: Ranking,
          attributes: {exclude: ["id", "hackatonId"]},
          include: [
            {
              model: Developer,
              through: {
                attributes: ["position"]
              },
            },
          ],
        },
      ],
    });

    res.status(200).json({
      data: hackatonData,
      message: "Data found",
      status: "OK",
      code: 200,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Unknow server error",
      status: "error",
      code: 500,
    });
  }
};
