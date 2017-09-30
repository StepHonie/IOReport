var express = require('express');
var db = require('../utils/db.js');
var moment = require('moment');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    db.selectAll('news', function (err, result) {//查询所有news表的数据
        res.render('newsList', {results:records.recordset, moment:moment});
    });
});
router.get('/delete/:id', function (req, res, next) {//删除一条id对应的news表的数据
    var id = req.params.id;
    db.del("where id = @id", {id:id}, "news", function(err, result){
        res.redirect('back');//返回前一个页面
    });
});
router.post('/update/:id', function (req, res, next) {//更新一条对应id的news表的数据
    var id = req.params.id;
    var content = req.body.content;
    db.update({content:content}, {id:id}, "news", function(err, result){
        res.redirect('back');
    });
});
