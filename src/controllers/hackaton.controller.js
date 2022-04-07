import { Hackaton, Ranking, Developer } from "../../models";

export const getHackatons = async (req, res) => {
  try {
    const filters = {
      include: [
        {
          model: Ranking,
          attributes: ["id"],
          include: [{ model: Developer, through: { attributes: ["position"] }}]
        },
      ],
    };

    if (req.query.id) filters.where = {id: req.query.id}

    const hackatonData = await Hackaton.findAll(filters);

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