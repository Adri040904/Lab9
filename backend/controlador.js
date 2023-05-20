var Area = require("./modelos/area");

//Obtiene todas las áreas
exports.getArea = function(req, res){
    Area.find({}, function(err,areas) {
        if (err)
            res.send(err);
        res.json(areas);
    });
}

//Adiciona un nuevo objetivo Area en la base de datos
exports.getArea = function(req, res){
    Area.create(  {Nombre      : req.body.Nombre,
                   Abreviatura : req.body.Abreviatura,
                   Estado      : req.body.Estado} , function(err, area){
    if (err)
        res.send(err);

    Area.find({}, function(err, areas){
        if(err)
             res.send(err);
        res.json(areas);
    });
  });  
}

//Mdifica un objeto area de la base de datos
exports.updateArea = function(req, res){
    Area.update({_id: req.params.area_id},  
        {$set: {Nombre     : req.body.Nombre,
        Abreviatura : req.body.Abreviatura,
        Estado      : req.body.Estado}} , function(err, area){
    if (err)
        res.send(err);

    Area.find({}, function(err, areas){
        if(err)
             res.send(err);
        res.json(areas);
    });
  });  
};

//Elimina un objeto Area de la base de datos
exports.removeArea = function(req, res ){
    Area.remove( {_id: req.params.area_id}, function(err, area){
        if(err)
           res.send(err);

        Area.find({}, function(err, areas){
            if(err)
                res.send(err);
            res.json(areas);   
    });
});
}
