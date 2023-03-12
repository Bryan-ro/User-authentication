import sessionsMiddlewaresService from "../middleServices/sessionMiddlewareservice.js";
import dotenv from "dotenv";
dotenv.config();

class sessionsMiddlewaresController {
    static checkIfUserIsAdministrator = (req, res, next) => {
        try {
            sessionsMiddlewaresService.sessionChecker(req.headers).then((session) => {
                if(session ===  null) {
                    return res.redirect(process.env.LOGIN_SCREEN);
                }else if(!session.user.admin) {
                    return res.json({ message: "You are not allowed to access this route, please contact support if you think this is a mistake." });   
                } else if (session.user.admin) {
                    return next();
                };
            });
        } catch (err) {
            return err; 
        };    
    };

    static checkIfUserIsEmployed = (req, res, next) => {
        sessionsMiddlewaresService.sessionChecker(req.headers).then((session) => {
            if(session === null) {
                return res.redirect(process.env.LOGIN_SCREEN);
            };
            return next();
        });
    };
};

export default sessionsMiddlewaresController;