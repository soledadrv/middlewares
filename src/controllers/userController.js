const controller = {
    login: (req, res, next) => {
        res.render('login')
    },
    register: (req, res, next) => {
        res.render('register')
    },
};

module.exports = controller;