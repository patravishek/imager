import express, {Application, Request, Response, NextFunction} from "express";
import * as imageController from './controllers/imageController';

const app: Application = express();

app.get('/getImage', imageController.getImage);

app.get('/postImage', imageController.postImage);


app.listen(5000, () => console.log('Server Running'));