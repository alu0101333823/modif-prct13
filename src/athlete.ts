import {Document, Schema, model} from 'mongoose';

interface AthleteDocumentInterface extends Document {
  name: string,
  surname: string,
  dni: string,
  age: number,
  sport: string,
  best_mark: string
}

const AthleteInterface = new Schema<AthleteDocumentInterface> ({
  name: {
    type: String,
    required: true,
    trim: true
  },

  surname: {
    type: String,
    required: true,
    trim: true
  },

  dni: {
    type: String,
    required: true,
    trim: true,
    unique: true
  },

  age: {
    type: Number,
    required: true,
    validate: (age: number) => {
      if (age < 18) {
        throw new Error('He must be an adult');
      }
    }
  },

  sport: {
    type: String,
    required: true,
    trim: true
  },

  best_mark: {
    type: String,
    required: true,
    trim: true
  },
});

export const Athlete = model<AthleteDocumentInterface>('Athlete', AthleteInterface);