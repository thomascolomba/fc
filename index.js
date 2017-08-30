var afficherFrise = function(){
	var sDataContent = $("#data").val(); 
	var tl = new Timeline(sDataContent);
	tl.display("dessinFrise");
};