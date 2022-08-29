require('dotenv').config();
const authService = require('./auth.service');
const bcrypt = require('bcryptjs');

const logincontroller = async (req, res) => {
    const {email, password} = req.body;

    const user = await authService.loginService(email);

    if(!user){
        return res.status(400).send({message: 'Usuário não encontrado.'});
    }

    const ispasswordvalid = await bcrypt.compare(password, user.password);

    if(!ispasswordvalid){
        return res.status(400).send({message: 'Senha inválida!'});
    }

    const token = authService.generateToken(user.id);

    res.send({token});
};

module.exports = {logincontroller};