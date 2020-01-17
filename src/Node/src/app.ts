import express, {Application, Request, Response, NextFunction} from "express";

const app: Application = express();

const add = (a: number, b: number): number => a+b;

app.get('/', (req: Request, res: Response) => {
    console.log(5+5);
    res.send("Hello");
});

app.get('/second', (req: Request, res: Response) => {
    res.send("I am from the second API");
});


app.listen(5000, () => console.log('Server Running'));