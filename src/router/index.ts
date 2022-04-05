import {Router} from "express";
import {ArticleController} from "../controller/ArticleController";
import {CategoryController} from "../controller/CategoryController";

const routes = Router();

routes.post('/write_article', ArticleController.addArticle);
routes.put('/write_article', ArticleController.editArticle);
routes.delete('/article',ArticleController.deleteArticle);
routes.get('/articles', ArticleController.findAllArticle);
routes.get('/article/:id', ArticleController.findOneArticle);
routes.get('/category', CategoryController.findAllCategory);

export default routes;