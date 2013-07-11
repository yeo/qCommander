
/*
 * GET home page.
 */

exports.index = function(req, res){
	res.render('index', { title: 'qCommander', root_url: app.get('root_url')});
};