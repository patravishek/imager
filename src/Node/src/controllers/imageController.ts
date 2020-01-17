import express, {Application, Request, Response, NextFunction} from "express";

export let getImage = (req: Request, res: Response) => {
    res.send("Here is the image");
}

const add = (a: number, b: number): number => a+b;

export let postImage = (req: Request, res: Response) => {
    res.send("This will accept the image");
}