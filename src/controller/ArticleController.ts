import {Article} from "../entity/Article";
import {getConnection} from "typeorm";

export class ArticleController{
    static addArticle = async(req, res) => {
        const {title, text, category} = req.body;

        const article = new Article();
        article.title = title;
        article.text = text;
        article.category = category;

        const result = await getConnection().getRepository(Article).save(article);

        res.send(result)
    }

    static findAllArticle = async (req, res) => {
        const articles = await getConnection().getRepository(Article).find();
        res.send(articles)
    }

    static findOneArticle = async (req, res) => {
        const {id} = req.params;
        const article = await getConnection().getRepository(Article).findOne({where: {id: id}});
        res.send(article);
    }

    static editArticle = async (req, res) => {
        const {id, title, text, category} = req.body

        const updateOption = {}
        if(title){
            updateOption['title'] = title
        }
        if(text){
            updateOption['text'] = text
        }
        if(category){
            updateOption['category'] = category
        }
        const result = await getConnection().createQueryBuilder().update(Article)
            .set(updateOption)
            .where("id= :id", {id})
            .execute()

        res.send(result)
    }

    static deleteArticle = async (req, res) => {
        const {id} = req.query

        const result = await getConnection().createQueryBuilder().delete().from(Article).where("id= :id", {id}).execute()
        res.send(result)
    }
}