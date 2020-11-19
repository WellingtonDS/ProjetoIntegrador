const ProfessorController = {   
    index: (req, res) => {
        // let professor = req.session.usuario
        res.render('./professor/index', {usuario: req.session.usuario});
    },
    perfil:(req, res) => {
        // let professor = req.session.usuario
        res.render('./professor/perfil', {usuario: req.session.usuario});
    }
}

module.exports = ProfessorController;