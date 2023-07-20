const {
    findAll,
    findById,
    addMusic,
    modifyMusic,
    removeMusic,
  } = require('./model');
  
  const getAll = async (req, res) => {
    try {
      const musics = await findAll();
      res.status(200).json(musics);
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
      const [music] = await findById(id);
      console.log(music);
      res.status(200).json(music);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const postMusic = async (req, res) => {
    const music = req.body;
    const uploadedFilePath = req.protocol + '://' + req.get('host') + '/upload/' + req.files[0].filename;
    console.log(music);
    try {
      const newMusic = await addMusic(music, uploadedFilePath);
      res.status(201).json(newMusic);
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  const updateMusic = async (req, res) => {
    const music = req.body;
    const id = parseInt(req.params.id);
    const url = req.protocol + '://' + req.get('host') + '/upload/' + req.files[0].filename
    await modifyMusic(music,url, id )
    res.json(url)

   
    // try {
    //   const result = await modifyMusic(music, uploadedFilePath, id);
    //   if (result.affectedRows === 1) {
    //     res.status(201).json({ id, ...music});
    //   } else {
    //     res.status(404).json({ message: 'no music found with this id' });
    //   }
    // } catch (error) {
    //   res.status(500).json({ message: 'Server error' });
    // }
  };
  
  const deleteMusic = async (req, res) => {
    const id = parseInt(req.params.id);
    try {
      const result = await removeMusic(id);
      if (result.affectedRows === 1) {
        res.sendStatus(204);
      } else {
        res.status(404).json({ message: 'no music found with this id' });
      }
    } catch (error) {
      res.status(500).json({ message: 'Server error' });
    }
  };
  
  module.exports = { getAll, getOne, postMusic, updateMusic, deleteMusic };
  