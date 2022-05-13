const Event = require("../models/Event");

const getEvents = async(req, res) => {

    const events = await Event.find({ user: req.uid }).populate('user', 'name');
    res.json({
        ok: true,
        events
    })

}

const createEvents = async(req, res) => {

    const event = new Event(req.body)
    
    try {
        event.user = req.uid;

        const eventSaved = await event.save();

        res.json({
            ok: true,
            event: eventSaved
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Speak to the admin',
            error
        });
    }
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