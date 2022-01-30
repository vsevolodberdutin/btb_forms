const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},
    procent: {type: String, required: true},
    accounts: {type: Array},
})

module.exports = model('BankAccounts', schema)