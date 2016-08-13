exports.index = function(req, res) {
  res.render('index', { title: 'Hunter Quant' });
};

exports.partials = function(req, res) {
    console.log(req.params.name);
    res.render('partials/' + req.params.name);
};
