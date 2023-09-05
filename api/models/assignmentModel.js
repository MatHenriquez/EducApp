const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  teachers: {
    type: Schema.Types.ObjectId, //Conecta con modelo Teacher
    ref: 'Teacher',
  },
  students: [
    {
      student: {
        type: Schema.Types.ObjectId, //Conecta con modelo Student
        ref: 'Student',
      },
      missedClasses: {
        // Inasistencias - Profesor read+write, estudiante read
        type: Number,
        default: 0,
      },
    },
  ],
  exams: [
    new Schema({
      date: Date,
      time: String,
      duration: Number,
      type: {
        type: String,
        enum: ['Parcial', 'Final'],
      },
      grades: [
        {
          student: {
            type: Schema.Types.ObjectId,
            ref: 'Student',
          },
          grade: Number,
        },
      ],
    }),
  ],
  days: {
    type: [String],
  },
  schedule: {
    type: String,
  },
  classroom: {
    type: String,
  },
  links: {
    type: [String],
  },
  fileNames: {
    type: [String],
  },
});

const AssignmentModel = mongoose.model('Assignment', AssignmentSchema);
module.exports = AssignmentModel;
