    import userService from "../services/userService.js";

export default class userAndSessionController {
    static createUser = (req, res) => {
        userService.createUserService(req.body).then((response) => {
            res.send({message: "User sucessfully created."});
        }).catch((err) => {
            res.json({message: `Fail to create user: ${err}`});
        });
    };

    static viewAllUsers = (req, res) => {
        userService.viewAllUsersService().then((users) => {
            return res.status(200).json(users);
        });
    };

    static viewOneUser = (req, res) => {
        userService.viewOneUserService(req.params.id).then((user) => {
            return res.status(200).json(user);
        });
    };

    static deleteOneUser = (req, res) => {
        userService.deleteOneUserService(req.params.id).then((user)=> {
            console.log(user);
            if(!user){
                return res.status(400).json({message: "Error deleting user"});
            };
            return res.status(200).json({message: "Successfully deleted user"});
        });
    };

    static updateOneUser = (req, res) => {
        userService.updateOneUserService(req.params.id).then((user) => {
            console.log(user);

            if(!user){
                return res.status(400).json({message: "Error editing user"});
            };
            return res.status(200).json({message: "User seccessfully edited"})
        });
    }



};

