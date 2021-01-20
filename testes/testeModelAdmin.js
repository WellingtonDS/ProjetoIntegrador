const {Admin, sequelize} = require('../models');

Admin.findAll({include: "usuario"}).then(resultado => {
  console.log(resultado)
  sequelize.close()
})