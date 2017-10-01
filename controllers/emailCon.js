let email = {};
let sql = require('../plugs/sql');
let fs = require('fs');
let sqlstatement = JSON.parse(fs.readFileSync('./controllers/sqlstatements.json'));

email.index = function(req,res,next)
{
  res.render('email',{title:"Hello Stephanie"});
}

module.exports = email;
