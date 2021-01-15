const session = require('express-session');

const AdminController = {
  index: (req, res) => {
    console.log(req.session.usuario.nome)
    res.render('./admin/index', {admin: req.session.usuario})
  }
}

module.exports = AdminController;