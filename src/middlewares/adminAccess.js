module.exports = (req, res, next) => {
    if (req.query.username) {

        const admins = ['Ada', 'Greta', 'Vim', 'Tim'];
        const username = req.query.username;

        if (admins.find(admin => admin === username)) {
            res.send(`¡Hola admin: ${username}!`)
        } else {
            res.send('No tienes los privilegios para ingresar')
        }

    } else {
        next()
    }
}