const { response } = require("express");

const createUser = (req, res = response) => {

    const { name, email, password } = req.body;

    res.json({
        ok: true,
        msg: 'crear',
        user: { name, email, password },
    });

}

const loginUser = (req, res = response) => {

    const { name, email, password } = req.body;

    res.json({
        ok: true,
        msg: 'login',
        user: { name, email, password },
    });

}

const renewToken = (req, res = response) => {
    res.json({
        ok: true,
        msg: 'renew token',
    });
}

module.exports = {
    createUser,
    loginUser,
    renewToken,
}