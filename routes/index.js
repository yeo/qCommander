
/*
 * GET home page.
 */

exports.index = function(req, res){
  root_url = '127.0.0.1:3000'		
  res.render('index', { title: 'qCommander', root_url: root_url });
};