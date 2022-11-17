const { Op } = require("sequelize");
const { Company, Job, Skill, User } = require("../models/index");

class JobController {
  static async readJobs(req, res, next) {
    console.log("ihza");
    try {
      let { page, search } = req.query;
      // console.log(search);
      // console.log("ihza");
      page = +page;
      // console.log(page);

      // console.log(req.query.page);
      // console.log(req.user);
      if (!page) {
        page = 0;
      }

      // console.log(page);
      const limit = 9;
      const offset = page * limit;
      let option = {
        limit: limit,
        offset: offset,
        order: [["id", "ASC"]],
        where: { title: { [Op.iLike]: `%%` } },
      };

      if (search) {
        option.where.title = { [Op.iLike]: `%${search}%` };
      }
      if (!req.user) {
        // console.log("ihza vu");
        req.user = {
          role: "client",
        };
      }
      // console.log(req.user.role);
      if (req.user.role === "admin") {
        option.include = [
          { model: Company },

          {
            model: User,
            attributes: { exclude: ["password"] },
          },
        ];
      }

      console.log(option);
      const allJobs = await Job.findAndCountAll(option);
      console.log(allJobs);
      // console.log(allMovies.count);
      if (allJobs.rows.length === 0) {
        throw { name: "DATA_NOT_FOUNDS" };
      }
      const totalPages = Math.ceil(allJobs.count / limit);
      allJobs.totalPage = totalPages;
      allJobs.currentPage = `${+page + 1}`;
      res.status(200).json(allJobs);
    } catch (error) {
      next(error);
      // res.status(500).json({msg:"internal Server Error"})
    }
  }

  static async createJobs(req, res, next) {
    try {
      const { title, description, jobType, companyId } = req.body;
      // console.log(req.user.id);
      const authorId = req.user.id;
      // console.log(req.user);
      const status = "active";
      const create = await Job.create({
        title,
        description,
        jobType,
        companyId,
        authorId,
      });
      //   console.log(create);
      if (create) {
        const description = `Movie ${title} with id ${create.id} has been created`;
        const updatedBy = req.user.email;
        // const createHistory = await History.create({
        //   title,
        //   description,
        //   updatedBy,
        // });
      }
      res.status(201).json({
        msg: "Succes Create Movie",
        msg2: "activity added to history",
        create,
      });
    } catch (error) {
      next(error);
      // if (
      //     error.name === 'SequelizeValidationError' ||
      //     error.name === 'SequelizeUniqueConstraintError'
      //     ) {
      //         error=error.errors.map(el=>{
      //         return el.message
      //     })
      //     res.status(400).json({msg:"Validasi Error",error})
      // }else{
      //     res.status(500).json({msg:"internal Server Error"})
      // }
    }
  }

  static async readJobId(req, res, next) {
    try {
      const { id } = req.params;
      let option = {
        where: { id: id },
        order: [["id", "ASC"]],
        include: [
          { model: Company },
          {
            model: User,
            attributes: { exclude: ["password"] },
          },
        ],
      };
      const jobById = await Job.findOne(option);
      // console.log(jobById);
      if (!jobById) throw { name: "DATA_NOT_FOUND", id };
      // console.log(jobById);

      res.status(200).json(jobById);
    } catch (error) {
      next(error);
      // console.log(error);
      // if (error.name==='notFound') {
      //     res.status(404).json({msg:"Movie Not Found"})
      // }else{

      //     res.status(500).json({msg:"internal Server Error"})
      // }
    }
  }

  static async deleteId(req, res, next) {
    try {
      const { id } = req.params;
      let option = {
        where: { id: id },
      };
      // console.log("lontong");
      const findMovie = await Movie.findOne(option);
      const movieById = await Movie.destroy(option, { returning: true });
      // console.log(movieById);
      if (!movieById) throw { name: "DATA_NOT_FOUND", id };
      // console.log(movieById);
      res.status(200).json({ msg: `${findMovie.title} succes to delete` });
    } catch (error) {
      next(error);
      // if (error.name==='notFound') {
      //     error={}
      //     res.status(404).json({msg:"Movie Not Found"})
      // }else{
      //     res.status(500).json({msg:"internal Server Error"})
      // }
    }
  }

  static async updateMovieByid(req, res, next) {
    try {
      //   console.log("ihza");
      //   console.log(req.params.id);
      const authorId = req.user.id;
      const { title, synopsis, trailerUrl, imageUrl, rating, genreId } =
        req.body;
      //   console.log(req.user);
      //   console.log(req.body);
      const updateMovie = await Movie.update(
        {
          title,
          synopsis,
          trailerUrl,
          imageUrl,
          rating,
          genreId,
          authorId,
        },
        { where: { id: req.params.id } }
      );
      if (updateMovie) {
        const description = `Movie with id ${req.params.id} Updated`;
        const updatedBy = req.user.email;
        const createHistory = await History.create({
          title,
          description,
          updatedBy,
        });
      }
      // console.log("INI IHZs");
      res
        .status(200)
        .json({ msg: "Update Success", msg2: "activity added to history" });
    } catch (error) {
      next(error);
    }
  }

  static async patchStatus(req, res, next) {
    try {
      //   console.log("ihza");
      const { status } = req.body;
      const { id } = req.params;
      const beforeupdate = await Movie.findByPk(req.params.id);
      //   console.log(beforeupdate);
      const updateMovie = await Movie.update(
        { status },
        { where: { id: req.params.id } }
      );
      //   console.log(updateMovie);
      if (updateMovie) {
        const title = beforeupdate.title;
        const description = `Movie status with id ${id} has been updated from ${beforeupdate.status} to ${status}`;
        const updatedBy = req.user.email;
        const createHistory = await History.create({
          title,
          description,
          updatedBy,
        });
      }
      res
        .status(200)
        .json({ msg: "Update Success", msg2: "activity added to history" });
    } catch (error) {
      next(error);
    }
  }
  static async detailMovie(req, res, next) {
    const { id } = req.params;
    // console.log(id);

    // console.log(process.env.HAPPI_ID);
    const detailMovie = await Movie.findByPk(id);
    // const cek = await Favorite.findAll({ include: Movie });
    // console.log(cek);
    // console.log(detailMovie);
    // const sendData = "localhost:3000/movies/detail/3";
    // const { data } = await axios.get(
    //   `https://api.happi.dev/v1/qrcode?data=${sendData}&apikey=${process.env.HAPPI_ID}`
    // );

    res.status(200).json(detailMovie);
  }

  static async addFavorite(req, res, next) {
    try {
      const { MovieId } = req.params;

      const UserId = req.user.id;
      const addFavorite = await Favorite.create({
        MovieId,
        UserId,
      });
      res.status(201).json({ msg: "created favorite success" });
    } catch (error) {
      next(error);
    }
  }
  static async favoriteList(req, res, next) {
    try {
      const { id } = req.user;
      const readFavorite = await Favorite.findAndCountAll({
        where: { UserId: id },
        include: Movie,
      });
      // console.log(readFavorite);
      // console.log(readFavorite.rows);
      res.status(200).json(readFavorite);
    } catch (error) {
      next(error);
    }
  }
}
module.exports = JobController;
