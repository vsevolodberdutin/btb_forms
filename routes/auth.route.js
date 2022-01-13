const {Router} = require('express')
const router = Router()
const User = require('../models/User')
const {check, validationResult} = require('express-validator')
const bcrypter = require('bcryptjs')
const jwt = require('jsonwebtoken')

router.post('/registration',
[
    check('email', 'email is not correct').isEmail(),
    check('password', 'password is too short').isLength({min:6})
],
async (req,res) => {
    try {

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:'registration data is not correct'
            })
        }

        const {email, password} = req.body

        const isUsed = await User.findOne({email})

        if (isUsed){
            return res.status(300).json({massage:'This Email is exist, try another'})
        }

        const hashedPassword = await bcrypter.hash(password, 12)

        const user = new User({
            email,
            password: hashedPassword,
        })

        await user.save()

        res.status(201).json({massage:'New user created'})

    } catch (err){
        console.log(err)
    }
})

router.post('/login',
[
    check('email', 'email is not correct').isEmail(),
    check('password', 'password is too short').exists(),
],
async (req,res) => {
    try {

        const errors = validationResult(req)
        if(!errors.isEmpty()){
            return res.status(400).json({
                errors: errors.array(),
                message:'login data is not correct'
            })
        }

        const {email, password} = req.body

        const user = await User.findOne({email})

        if(!user){
            return res.status(400).json({message:'this email is not exist in the data base'})
        }

        const isMatch = bcrypter.compare(password, user.password)
        
        if(!isMatch){
            return res.status(400).json({message:'password is not correct'})
        }

        const jwtSecret = 'dkfj363g6k63j56j536hjhkhvxfd63500vnmsklwpmmc3225jdfn84nncch83g'

        const token = jwt.sign(
            {userId: user.id},
            jwtSecret,
            {expiresIn: '1h'}
        )

        res.json({token, userId: user.id})

     } catch (err){
        console.log(err)
    }
})

module.exports = router