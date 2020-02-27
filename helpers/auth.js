module.exports = {
  ensureAuthenticated: function (req, res, next) {
    console.log('checking authentication status:', req.isAuthenticated());
    if (req.isAuthenticated()) {
      return next();
    } 
    req.flash('error_msg', 'Not Authorized');
    res.redirect('/users/login');
  }
}