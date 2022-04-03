import {ArticleList} from "../entity/ArticleList";
import {getConnection} from "typeorm";

export class ArticleController{
    static addArticle = async(req, res) => {
        const {title, text, category} = req.body;

        const article = new ArticleList();
        article.title = title;
        article.text = text;
        article.category = category;

        const result = await getConnection().getRepository(ArticleList).save(article);

        res.send(result)
    }

    static findAllArticle = async (req, res) => {
        const articles = await getConnection().getRepository(ArticleList).find();
        res.send(articles)
    }

    static findOneArticle = async (req, res) => {
        const {id} = req.params;

        const article = await getConnection().getRepository(ArticleList).findOne({where: {id: id}});
        res.send(article);
    }
}