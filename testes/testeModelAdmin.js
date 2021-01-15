const {Admin, sequelize} = require('../models');

Admin.findAll({include: "usuario"}).then(resultado => {
  console.log(resultado[0].usuario.dataValues)
  sequelize.close()
})