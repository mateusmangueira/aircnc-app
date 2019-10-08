const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    //Colocar aqui atributos de acordo com a sua aplicacao
   thumbnail: String,
   company: String,
   pricePerDay: Number,
   techs: [String],
   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   }
},{
    toJSON: {
        virtuals:true,
    }
});
//Muda para o ip local para mostrar imagens no APP
SpotSchema.virtual('thumbnail_url').get(function() {
    return `http://192.168.0.102:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);