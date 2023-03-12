import User from "../models/User.js";
import Session from "../models/session.js";
import { decryptPassword, sessionId } from "../security/encrypt.js";

class sessionService {
    static loginSession = async (body) => {
        const { userName, password, user_ip } = body;

        const user = await User.findOne({ where: { userName } });
        if (!user) return { message: "invalid credentials" };

        const verify = await decryptPassword(password, user.password);
        if (!verify) return { message: "invalid credentials" };

        const id = await sessionId();

        await Session.create({
            session_id: id,
            user_ip,
            users: user.id
        });

        return id;
    };
};

export default sessionService;