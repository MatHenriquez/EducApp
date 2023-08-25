const {
  getAllTeachersController,
  teacherLoginController,
  registerTeacherController,
} = require('../controllers/teachersController');

const getAllTeachersHandler = async (req, res) => {
  let { page, limit } = req.query;
  page = parseInt(page);
  limit = parseInt(limit);
  try {
    const response = await getAllTeachersController(page, limit);
    res.send(response);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const teacherLoginHandler = async (req, res) => {
  const { dni, password, check } = req.body;
  try {
    const login = await teacherLoginController(dni, password, check);
    res.send(login);
  } catch (error) {
    res.status(500).json(error.message);
  }
};

const registerTeacherHandler = async (req, res) => {
  const {
    firstName,
    lastName,
    password,
    email,
    dni,
    dob,
    address,
    assignments,
  } = req.body;

  const newTeacher = {
    firstName,
    lastName,
    password,
    email,
    dni,
    dob,
    address,
    assignments,
  };
  try {
    const response = await registerTeacherController(newTeacher);
    //valido que el profesor se haya guardado correctamente en la DB
    if (!response) throw new Error('No se pudo registrar el usuario');
    res.send('Usted se registró correctamente');
  } catch (error) {
    res.status(500).json(error.message);
  }
};

module.exports = {
  getAllTeachersHandler,
  teacherLoginHandler,
  registerTeacherHandler,
};
