import { spawn } from 'child_process';
import * as express from 'express';

const app = express();
const port: number = 3000;

app.get('/execmd', (req, res) => {
  if (!req.query.cmd) {
    res.send({
      error: 'A command has to be provided',
    });
  } else if (!req.query.args) {
    res.send({
      error: 'No arguments were provided',
    });
  }

  const cmd: string = req.query.cmd as string;
  const args: string = req.query.args as string;
  const argsArray: string[] = args.split(' ');
  
  const command = spawn(cmd, argsArray);
  let allData: string = '';

  command.stdout.on('data', (data) => {
    allData += data;
  });

  command.on('close', () => {
    res.send({
      cmd: cmd,
      args: argsArray,
      execution: allData,
    });
  })

  command.on('error', (err) => {
    if (err) {
      console.log('An error has ocurred on the command execution');
      res.send({
        error: 'An error has ocurred on the command execution',
      });
    }
  })  
});

app.get('*', (_, res) => {
  res.send('<h1>ERROR 404</h1>');
})

app.listen(port, () => {
  console.log(`Listening at port: ${port}`);
})