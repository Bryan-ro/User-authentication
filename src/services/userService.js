import User from "../models/User.js";
import { encryptPassword } from "../security/encrypt.js"

class userAndSessionService {
    static createUserService = async (body) => {
        try {
            const { name, userName, password } = body;

            const hash = await encryptPassword(password).then(hash => {
                return hash;
            });
            User.create({
                name,
                userName,
                password: hash,
                admin: false
            })
        } catch (err) {
            return err
        };
    };

    static viewAllUsersService = async () => {
        try {
            const users = await User.findAll();

            return users
        } catch(err) {
            return err
        }
    };



    static viewOneUserService = async (_id) => {
        try {
            const { id } = _id

            const users = await User.findOne({
                where: id
            });

            return users
        }catch(err) {
            return err
        }
    }


    static deleteOneUserService = async (id) => {
        const user = await User.destroy({where: { id }});

        return user;        
    }


    static updateOneUserService = async (id) => {
        const user = await User.update(req.body, {where: { id }})
        
        return user;
    }

};


export default userAndSessionService;