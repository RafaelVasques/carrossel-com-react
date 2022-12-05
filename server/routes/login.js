const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');

dotenv.config();

module.exports = {
    postLogin: async (req, resp)=>{
        const { email, password } = req.body;

        if (email === process.env.ROOT){
            if (password === process.env.ROOT_PASS){

                const userData = {
                    user: email
                };

                const token = jwt.sign(userData,
                    process.env.JWT_SECRET,
                    {expiresIn: '1h'});

                resp.cookie('Authorization', token, { httpOnly: true});
                resp.send(userData);
                return;
            }
        }

        resp.status(403).send();
    },

    deleteLogin: async (req, resp)=>{
        resp.clearCookie('Authorization');
        resp.send();
    },

    getUser: (req, resp)=>{
        const token = req.cookies['Authorization'];

        if (token){
            const userData = jwt.verify(token, process.env.JWT_SECRET);

            if (userData){
                resp.send(userData);
                return;
            }
        }

        resp.status(403).send();
    },
    
    auth: (req, resp, next)=> {
        const token = req.cookies['Authorization'];

        if (token){
            const userData = jwt.verify(token, process.env.JWT_SECRET);

            if (userData){
                req.user = userData;
                next();
                return;
            }
        }

        resp.status(403).send();
    }
};
