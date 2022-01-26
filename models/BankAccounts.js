const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},

    procents: {type: String, required: true},
    info: {type: String},
})

module.exports = model('BankAccounts', schema)