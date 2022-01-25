const {Schema, model, Types} = require('mongoose')

const schema = new Schema({
    owner: {type: Types.ObjectId, ref: 'User'},

    procents: {type: String, required: true},
    // info: [{}],
})

module.exports = model('BankAccounts', schema)