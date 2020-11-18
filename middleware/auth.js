module.exports = async (req, res, next) => {
    if(req.session.usuario){
        next();
    }else{
        res.redirect('/login')
    }
 
}