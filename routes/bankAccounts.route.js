const {Router} = require('express')
const router = Router()
const BankAccounts = require('../models/BankAccounts')

router.post('/add', async (req,res) => {
    try {
        const {procents, userId} = req.body

        const bankAccounts = await new BankAccounts({
            owner: userId,
            procents,
      
        })

        await bankAccounts.save()

        res.json(bankAccounts)

    } catch (error){
        console.log(error)
    }
})

module.exports = router