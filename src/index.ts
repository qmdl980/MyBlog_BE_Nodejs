import express from 'express';
import {createConnection} from "typeorm";
import router from './router/index'
import cors from "cors";
 
const app = express();

app.use(express.json());
app.use('/api', router);

createConnection().then(connection => {
  app.listen(8080, () => {
    console.log('server is listening 8080');
  });
});