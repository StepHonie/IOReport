let post={};
let sql = require('../plugs/sql');
let fs=require("fs");
let sqlstatement=JSON.parse(fs.readFileSync("./controllers/sqlstatements.json"));

post.handler = function(req, res, next)
{
	let json = req.body;
		if(json.sqlType =='sp')
		{
			sql.exec(json.sqlName,json.params,function(err,result)
			{
				if(err!=null)
				{
					res.send(err);
				}else{
					res.send(result.recordset);
				}
			});
		}else{
			let sqlstr = sqlstatement[json.sqlName].sql;
			sql.queryWithParams(sqlstr,json.params,function(err,result)
			{
				if(err!=null)
				{
					res.send(err);
				}else{
					res.send(result.recordset);
				}
			});
		};
}

post.addAreaStation = function(req,res,next)
{
	let sqlstr = sqlstatement[req.body.sqlName].sql;
	sql.queryWithParams(sqlstr,req.body.params,function(err,result)
	{
		if(err!=null){
			res.send(err);
		}else{
			res.send(result);
		}
	});
}

module.exports = post;
