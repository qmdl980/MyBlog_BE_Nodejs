import {ArticleCategory} from "../entity/ArticleCategory"
import {getConnection} from "typeorm";

export class ArticleCategoryController {

    static findAllCategory = async (req,res) => {
        const categories = await getConnection().getRepository(ArticleCategory).find();
        res.send(categories)
    }

}
