import {Router} from "express";
import {ArticleController} from "../controller/ArticleController";
import {CategoryController} from "../controller/CategoryController";

const routes = Router();

routes.post('/write_article', ArticleController.addArticle);
routes.get('/articles', ArticleController.findAllArticle);
routes.get('/article/:id', ArticleController.findOneArticle);
routes.get('/category', CategoryController.findAllCategory);

export default routes;