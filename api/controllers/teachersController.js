const TeacherModel = require('../models/teacherModel'); // Llama al modelo TeacherModel
const { createHash, validPassword } = require('../utils/hashPassword'); // Llama a la funcion createHash

const getAllTeachersController = async () => {
  const { docs, hasPrevPage, hasNextPage, nextPage, prevPage, totalPages } =
    await TeacherModel.paginate({}, { page: 1, limit: 10, lean: true });

  if (!docs) throw new Error('No se pudieron obtener los profesores');
  return {
    teachers: docs,
    hasPrevPage,
    hasNextPage,
    nextPage,
    prevPage,
    totalPages,
  };
};

const teacherLoginController = async (email, password, check) => {
  if (!email || !password || !check) throw new Error('Dato faltante');
  if (check !== 'teacher') throw new Error('El usuario no es un profesor');

  const foundTeacher = await TeacherModel.findOne({ email: email });

  if (!foundTeacher) throw new Error('Usuario incorrecto');

  if (!validPassword(foundTeacher, password))
    throw new Error('Contraseña incorrecta');

  return foundTeacher;
};

const registerTeacherController = async (newTeacher) => {
  // valido que esten ingresados todos los datos
  if (
    !newTeacher.firstName ||
    !newTeacher.lastName ||
    !newTeacher.password ||
    !newTeacher.email ||
    !newTeacher.dni ||
    !newTeacher.dob ||
    !newTeacher.address ||
    !newTeacher.assignments
  )
    throw new Error('Ingrese todos los datos');

  newTeacher.password = createHash(newTeacher.password); // encripto la contraseña

  const teacherExists = await TeacherModel.findOne({ email: newTeacher.email }); // aca me devuelve el profesor si existe
  if (teacherExists) throw new Error('El usuario ya existe');

  //guardo el nuevo profesor en la DB
  const response = await TeacherModel.create(newTeacher);

  return response;
};

module.exports = {
  getAllTeachersController,
  teacherLoginController,
  registerTeacherController,
};