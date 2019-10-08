
//index(lista as sessoes da aplicacao), show(listar uma unica sessao), store(criar uma sessao), update(modificar uma sessao), destroy(remover uma sessao).
const User = require('../models/User');

module.exports = {
    async store(req, res) {
       const {email} = req.body;
       //await aguarda um tempo para executar
       let user = await User.findOne({email})    
        if(!user) {
            user = await User.create({email});
        }
        return res.json(user);
    }
}; 