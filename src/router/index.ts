import {Router} from "express";
import {ArticleController} from "../controller/ArticleController";

const routes = Router();

routes.post('/article', ArticleController.addArticle);
routes.get('/articles', ArticleController.findAllArticle);
routes.get('/article/:id', ArticleController.findOneArticle);

export default routes;