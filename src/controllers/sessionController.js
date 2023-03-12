import sessionSevices from "../services/sessionService.js";

class sessionController {
    static verifyCredentialsAndStoreCookie = async (req, res) => {
        await sessionSevices.loginSession(req.body).then(response => {
            res.status(200).json({ session: response });
        });
    };
};

export default sessionController;