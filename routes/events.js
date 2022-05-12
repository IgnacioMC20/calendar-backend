/**
 * '/api/events'
 */

const { Router } = require("express");
const { getEvents, createEvents, updateEvent, deleteEvent } = require("../controller/eventos");
const { validarJWT } = require("../middlewares/validar-jwt");
const router = Router();

// ? todas las rutas por debajo de esta ruta van a pasar por la validacion del jsonwebtoken
router.use(validarJWT);

// ? Obtener eventos
router.get('/', getEvents);

// ? Crear un nuevo evento
router.post('/', createEvents);

// ? Crear un nuevo evento
router.put('/:id', updateEvent);

// ? Eliminar un nuevo evento
router.delete('/:id', deleteEvent);

module.exports =  router;