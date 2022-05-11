// ? auth: '/api/auth'

const { Router } = require("express");
const { check } = require("express-validator");
const { createUser, loginUser, renewToken } = require("../controller/auth");
const { validarCampos } = require("../middlewares/validar-campos");

const router = Router();

router.post('/new', [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    validarCampos,
], createUser);

router.post('/', [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is not valid").isEmail(),
    check("password", "Password must be at least 6 characters").isLength({ min: 6 }),
    validarCampos,
], loginUser);

router.get('/renew', renewToken);

module.exports = router;