FlowRouter.route("/", {
	name:"mainchat",
	action(){
		BlazeLayout.render("mainLayout",{main:"main"});
	}
});
FlowRouter.route("/comentario", {
	//nombre del archivo
	name:"main",
	action(){
		//nombre			navbar     nombre del template
		BlazeLayout.render("main",{main:"main"});
	}
});