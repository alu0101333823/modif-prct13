import {Athlete} from './athlete';
import { exit } from 'process';
import './mongoose';

function deleteByDNI(dni: string) {
  const filter = {dni: dni};

  Athlete.findOneAndDelete(filter).then((ath) => {
    if (ath) {
      console.log('Sportsman has been removed');
      exit(0);
    } else {
      console.log('Athlete not found');
      exit(0);
    }
  });
}

deleteByDNI('111F');
