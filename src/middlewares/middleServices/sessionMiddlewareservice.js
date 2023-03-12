import User from "../../models/User.js"
import Session from "../../models/session.js"

class sessionsMiddlewaresService {
    static sessionChecker = async (header) => {
        try {   
            const { session_id } = header;
            
            const findSession = await Session.findOne({
                where: { session_id },
                    include: {
                        model: User,
                        as: "user"
                    }
            });
            
            return findSession; 
        } catch {
            return null;
        };
        
    };

};

export default sessionsMiddlewaresService;


