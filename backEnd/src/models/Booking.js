const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    //Colocar aqui atributos de acordo com a sua aplicacao
   date: String,
   approved: Boolean,

   user: {
       type: mongoose.Schema.Types.ObjectId,
       ref: 'User'
   },
   spot: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Spot'
}
});

module.exports = mongoose.model('Booking', BookingSchema);