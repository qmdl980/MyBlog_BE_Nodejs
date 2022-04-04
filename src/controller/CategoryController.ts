import {Category} from "../entity/Category"
import {getConnection} from "typeorm";

export class CategoryController {

    static findAllCategory = async (req,res) => {
        const categories = await getConnection().getRepository(Category).find();
        res.send(categories)
    }

}
