import {Router} from "express";
import {ArticleController} from "../controller/ArticleController";
import {ArticleCategoryController} from "../controller/ArticleCategoryController";
import {AdminInfoController} from "../controller/AdminInfoController";

const routes = Router();

routes.post('/write_article', ArticleController.addArticle);
routes.put('/write_article', ArticleController.editArticle);
routes.delete('/article',ArticleController.deleteArticle);
routes.get('/articles', ArticleController.findAllArticle);
routes.get('/article/:id', ArticleController.findOneArticle);
routes.get('/category', ArticleCategoryController.findAllCategory);
routes.get('/admin', AdminInfoController.findAllInfo);

export default routes;