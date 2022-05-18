import {Athlete} from './athlete';
import { exit } from 'process';
import './mongoose';

function findByDNI(dni: string) {
  const filter = {dni: dni};

  Athlete.find(filter).then((ath) => {
    if (ath) {
      console.log(ath);
      exit(0);
    } else {
      console.log('Athlete not found');
      exit(0);
    }
  });
}

findByDNI('1111F');
