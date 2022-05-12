

const getEvents = (req, res) => {

    return res.json({
        ok: true,
        msg: 'getEvents'
    });
}

const createEvents = (req, res) => {

    return res.json({
        ok: true,
        msg: 'createEvents'
    });
}

const updateEvent = (req, res) => {

    const { id } = req.params;

    return res.json({
        ok: true,
        id,
        msg: 'updateEvent'
    });
}

const deleteEvent = (req, res) => {

    const { id } = req.params;

    return res.json({
        ok: true,
        id,
        msg: 'deleteEvent'
    });
}

module.exports = {
    getEvents,
    createEvents,
    updateEvent,
    deleteEvent
}