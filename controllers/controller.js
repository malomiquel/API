import db from "../models/sequelize.js";
const Music = db.musics;
const Op = db.Sequelize.Op;

// Create and Save a new Tutorial
const createOne = (req, res) => {
    console.log(req);
  // Validate request
//   if (!req.body.title) {
//     res.status(400).send({
//       message: "Content can not be empty!",
//     });
//   }
  // Save Tutorial in the database
  Music.create({
    title: req.body.title,
    artist: req.body.artist,
    year: req.body.year,
    // cover: req.body.cover,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the Music.",
      });
    });
};

// Retrieve all Tutorials from the database.
const findAll = (req, res) => {
  const title = req.query.title;
  const condition = title ? { title: { [Op.iLike]: `%${title}%` } } : null;
  Music.findAll({ where: condition })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving musics.",
      });
    });
};

// Find a single Music with an id
const findOne = (req, res) => {
  const id = req.params.id;
  Music.findByPk(id)
    .then((data) => {
      if (data) {
        res.send(data);
      } else {
        res.status(404).send({
          message: `Cannot find Music with id=${id}.`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Music with id=" + id,
      });
    });
};

// Update a Music by the id in the request
const updateOne = (req, res) => {
  const id = req.params.id;
  Music.update(req.body, {
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Music was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Music with id=${id}. Maybe Music was not found or req.body is empty!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Music with id=" + id,
      });
    });
};

// Delete a Music with the specified id in the request
const deleteOne = (req, res) => {
  const id = req.params.id;
  Music.destroy({
    where: { id: id },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Music was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Music with id=${id}. Maybe Music was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Music with id=" + id,
      });
    });
};

const musics = {
  createOne,
  findAll,
  findOne,
  updateOne,
  deleteOne,
};

export default musics;
