const {
  findAll,
  findById,
  addShow,
  modifyShow,
  removeShow,
} = require('./model');

const getAllShows = async (req, res) => {
  try {
    const shows = await findAll();
    res.status(200).json(shows);
  } catch (error) {
    res.status(500).json({ message: 'server error' });
  }
};

const getOne = async (req, res) => {
  const id = parseInt(req.params.id);
  console.log(id);
  if (isNaN(id)) {
    res.status(400).json({ message: 'wrong id type (getOne) !' });
  }
  try {
    const [show] = await findById(id);
    console.log(show);
    res.status(200).json(show);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const postShow = async (req, res) => {
  const show = req.body;
  console.log(show);
  try {
    const newShow = await addShow(show);
    res.status(201).json(newShow);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateShow = async (req, res) => {
  const show = req.body;
  const id = parseInt(req.params.id);
  try {
    const updatedShow = await modifyShow(show, id);
    if (updatedShow.affectedRows === 1) {
      console.log(show);
      res.status(201).json({ id, ...show });
    } else {
      res.status(404).json({ message: 'no show found with this id' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const deleteShow = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const result = await removeShow(id);
    if (result.affectedRows === 1) {
      res.sendStatus(204);
    } else {
      res.status(404).json({ message: 'no show found with this id' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllShows, getOne, postShow, updateShow, deleteShow };
