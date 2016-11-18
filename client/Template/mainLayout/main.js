//variable reactiva para las imagenes upload
URL_IMG = new ReactiveVar("");
//array, para almacenar todos los datos de la imagen
LISTA = [];
//posicion para mostrar las imagenes
pos = new ReactiveVar(0);
Uploader.finished = function(index, fileInfo, templateContext) {
	LISTA.push(fileInfo);
	URL_IMG.set(LISTA);
	//console.log(URL_IMG.get());
}

Template.imagen.helpers({
	URL_IMG(){
		return URL_IMG.get();
	}
});

//elimina la imagen deseada
Template.imagen.events({
    'click .remove':function (event){
        event.preventDefault();
        var url_image = this.url;
        var end=URL_IMG.get().length-1;
        var pos = 0;
        var remove=true;
        while(remove)
        {
			if(URL_IMG.get()[pos].url == url_image)
	        {        
	        	var posRemove=pos;
	        		
	        	remove=false;
	        }
	        else
	        {
	        	pos++;
	        }	
        }
        //console.log(posRemove);
		if(end == posRemove)
		{
			LISTA.pop();
		} else
		{
			LISTA.splice(posRemove,1);
		}       
        //console.log(LISTA);
        URL_IMG.set(LISTA)
        Router.go('/select1');
        toastr.success("", 'Deleted Image', {timeOut: 2000});
       // toastr.success("Select a new Image");
     //   location.reload();        
    }
});