function buscar(busqueda){
    return new Promise(function(res, rej){
        $.getJSON("/js/json/55092.json", function(datos){
            $.each(datos, function(key, val){
                if(val.palabra == busqueda)
                    res(key);                
            });

            res(false);
        });
    });
}