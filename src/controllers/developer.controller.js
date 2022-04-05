import { Op } from "sequelize";
import { Developer } from "../../models";

export const getDevelopers = async (req, res) => {
  try {
    const bestDevelopers = await Developer.findAll(_makeBestDevelopersFilter(req.query));

    res.status(200).json({
      data: bestDevelopers,
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

// Make query filter to get the 10 best developers in the world
const _makeBestDevelopersFilter = (filters) => {
  if (!Object.keys(filters).length) return {};

  const order = filters.order.split(":")

  return {
    where: {
      hackatonPoints: {
        [Op.ne]: 0,
      },
    },
    order: [order],
    limit: parseInt(filters.limit),
  };
};
