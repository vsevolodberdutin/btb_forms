const {Router} = require('express')
const router = Router()
const BankAccounts = require('../models/BankAccounts')

router.post('/add', async (req,res) => {
    try {
        const {procent, accounts, userId} = req.body

        const bankAccounts = await new BankAccounts({
            owner: userId,
            procent,
            accounts,
        })
        await bankAccounts.save()

        res.json(bankAccounts)

    } catch (error){
        console.log(error)
    }
})

router.get('/', async (req,res) => {
    try {
        const {userId} = req.query

        const bankAccounts = await BankAccounts.find({owner:userId})

        res.json(bankAccounts)

    } catch (error){
        console.log(error)
    }
})

module.exports = router