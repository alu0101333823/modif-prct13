import { Athlete } from "./athlete";
import './mongoose';
import { exit } from 'process';

function addAthlete(name: string, surname: string, dni: string, 
    age: number, sport: string, best_mark: string) {

  const athlete = new Athlete ({
    name: name,
    surname: surname,
    dni: dni,
    age: age,
    sport: sport,
    best_mark: best_mark
  })
  
  athlete.save().then((ath) => {
    console.log('The sportsman has been added');
    console.log(ath);
    exit(0);
  }).catch((error) => {
    console.log(error);
    exit(0);
  })
}

addAthlete('Usain', 'Bolt', '1111F', 35, 'sprint', '11 seconds');