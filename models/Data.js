const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    name: {type: String, required: true},
    surname: {type: String, required: true},
    teudatZeut: {type: Number, required: true},
    dateOfBirth: {type: String, required: true},
    phone: {type: Number},
    email: {type: String, required: true},
    nameOfCompany: {type: String, required: true},
    partnership: {type: String, required: true},
    // procents: {type: String, required: true},
    // info: [{}],
})

module.exports = model('Data', schema)