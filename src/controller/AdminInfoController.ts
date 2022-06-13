import {AdminInfo} from "../entity/AdminInfo"
import {getConnection} from "typeorm";

export class AdminInfoController {

    static findAllInfo = async (req,res) => {
        const adminInfos = await getConnection().getRepository(AdminInfo).find();
        res.send(adminInfos)
    }

}