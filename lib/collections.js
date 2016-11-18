import {Mongo} from "meteor/mongo";
PUBLICACION = new Mongo.Collection("publicacion");

var Schemas={}
	Schemas.Publicacion = new SimpleSchema ({
		imagen:{
			type: [String],
			label: "Images"
		},
		comentario:{
			type:String,
			label: "Retoques"
		},
		cliente:{
			type: String,
			label: "Cliente"
		},
		current_date: {
			type : Date,
			label : "Fecha de Pedido",
			autoValue : function ()
			{
				return new Date;
			}
		}
	});
PUBLICACION.attachSchema(Schemas.Publicacion);