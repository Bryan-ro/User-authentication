import bcrypt from "bcrypt";
import { v4 as uuidv4 } from "uuid";

async function encryptPassword(pass) {
    const hash = await bcrypt.hash(pass, 15);
    return hash
};

async function decryptPassword(pass, hash) {
    const compare = await bcrypt.compare(pass, hash)
        return compare;

};


async function sessionId() {
    return uuidv4()
}


export { encryptPassword, decryptPassword, sessionId };