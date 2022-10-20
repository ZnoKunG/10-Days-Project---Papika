import { Request, Response } from 'express';
import axios, { AxiosResponse } from 'axios';

const Gets = (req: Request, res: Response) => {
    res.send("Hi!");
}

const Get = (req: Request, res: Response) => {

}

const Post = (req: Request, res: Response) => {

}

const Patch = (req: Request, res: Response) => {

}

const Delete = (req: Request, res: Response) => {

}

const postController = {
    Gets,
    Get,
    Post,
    Patch,
    Delete,
}

export default postController;