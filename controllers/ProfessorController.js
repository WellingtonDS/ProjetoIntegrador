const ProfessorController = {
    
    index: (req, res) => {
        let email = req.session.usuario.email;
        res.render('./professor/index', {email}) 
    }
}

module.exports = ProfessorController;