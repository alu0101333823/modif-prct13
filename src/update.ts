import {Athlete} from './athlete';
import { exit } from 'process';
import './mongoose';

function updateByDNI(dni: string) {
  const filter = {dni: dni};
  const allowedUpdates = ['name', 'surname', 'dni', 'age', 'sport', 'best_mark'];
  const newAth = new Athlete ({
    name: 'Alberto',
    surname: 'Contador',
    dni: '222F',
    age: 43,
    sport: 'cycling',
    best_mark: '1 hour'
  })
  const actualUpdates = Object.keys(newAth);
  const isValidUpdate =
      actualUpdates.every((update) => allowedUpdates.includes(update));
    
  Athlete.findOneAndUpdate(filter, newAth, {
    new: true,
    runValidators: true,   
  }).then((ath)=> {
    if (isValidUpdate) {
      console.log('Sportsman updated');
      console.log(ath);
      exit(0);
    } else {
      console.log('Not valid update');
      exit(0);
    }
  }).catch((error) => {
    console.log(error);
    exit(0);
  })
}

updateByDNI('1111F');