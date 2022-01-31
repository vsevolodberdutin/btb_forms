const {Router} = require('express')
const router = Router()
const BankAccount = require('../models/BankAccount')

router.post('/add', async (req,res) => {
    try {
        const {procent, account, userId} = req.body

        const bankAccount = await new BankAccount({
            owner: userId,
            procent,
            account,
        })
        await bankAccount.save()

        res.json(bankAccount)

    } catch (error){
        console.log(error)
    }
})

router.get('/', async (req,res) => {
    try {
        const {userId} = req.query

        const bankAccount = await BankAccount.find({owner:userId})

        res.json(bankAccount)

    } catch (error){
        console.log(error)
    }
})

module.exports = router