const {Router} = require('express')
const router = Router()
const Data = require('../models/Data')

router.post('/add', async (req,res) => {
    try {
        const {name, surname, teudatZeut, dateOfBirth, phone, email, nameOfCompany, partnership, userId} = req.body

        const data = await new Data({
            name,
            owner: userId,
            surname,
            teudatZeut,
            dateOfBirth,
            phone,
            email,
            nameOfCompany,
            partnership,
        })

        await data.save()

        res.json(data)

    } catch (error){
        console.log(error)
    }
})

module.exports = router
