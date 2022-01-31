const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    procent: {type: String, required: true},
    account: {type: Object},
})

module.exports = model('BankAccount', schema)