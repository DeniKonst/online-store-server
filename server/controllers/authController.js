const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');
const User = require('../models/User');
const errorHandler = require('../utils/errorHandler');


module.exports.login = async (req, res) => {
    const candidate = await User.findOne({email: req.body.email});

    if (candidate) {
        const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)

        if (passwordResult) {
            // generate token
            const token = jwt.sign({
                email: candidate.email,
                userId: candidate._id
                // expiresIn: sek*min
            }, keys.JWT_KEY, {expiresIn: 60*60});

            res.status(200).json({
                token: `Bearer ${token}`,
                userId: candidate._id,
                login: candidate.login,
            });
        } else {
            // passwords did not match
            res.status(401).json({
                message: 'Wrong password. Try again.'
            })
        }
    } else {
        res.status(404).json({
            message: 'User with this email not found'
        });
    }
};

module.exports.register = async (req, res) => {
    const candidateByEmail = await User.findOne({email: req.body.email});

    const candidateByLogin = await User.findOne({login: req.body.login});

    if (candidateByEmail && candidateByLogin) {
        res.status(409).json({
            message: 'This email and login is already taken'
        })
    } else if (candidateByEmail) {
        res.status(409).json({
            message: 'This email is already taken'
        })
    } else if (candidateByLogin) {
        res.status(409).json({
            message: 'This login is already taken'
        })
    } else {
        const salt = bcrypt.genSaltSync(10);
        const password = req.body.password;
        const user = new User({
            email: req.body.email,
            login: req.body.login,
            password: bcrypt.hashSync(password, salt)
        });

        try {
            await user.save();
            res.status(201).json(user);
        } catch (e) {
            errorHandler(res, e);
        }
    }
};