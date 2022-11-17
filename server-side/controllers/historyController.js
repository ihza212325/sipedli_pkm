const { History } = require("../models/index");

class HistoryController {
  static async getHistory(req, res, next) {
    try {
      //   console.log("ihza");
      const readHistory = await History.findAll({
        order: [["createdAt", "DESC"]],
      });
      res.status(200).json(readHistory);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = HistoryController;
