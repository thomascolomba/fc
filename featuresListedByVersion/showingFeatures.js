
var afficherListeFonctionnalites = function(){
	var balisteListe = $("<ol>");
	for(var bKeyFonctionnalite in listeFonctionnalite){
		var bFonctionnalite = listeFonctionnalite[bKeyFonctionnalite];
		var baliseFonctionnalite = $("<li>");
		baliseFonctionnalite.text(bFonctionnalite.description);
		baliseFonctionnalite.append($("<div>", {id:bFonctionnalite.id}));
		balisteListe.append(baliseFonctionnalite);
	}
	$("#zoneListeFonctionnalites").append(balisteListe);
	for(var bKeyFonctionnalite in listeFonctionnalite){
		var bFonctionnalite = listeFonctionnalite[bKeyFonctionnalite];
		var tl = new Timeline(JSON.stringify(bFonctionnalite.data));
		tl.display(bFonctionnalite.id);
	}
	
};



var afficherFonctionnalites = function(){
	var balisteListe = $("<ol>");
	for(var bKeyFonctionnalite in listeFonctionnalite){
		var bFonctionnalite = listeFonctionnalite[bKeyFonctionnalite];
		var baliseFonctionnalite = $("<li>");
		baliseFonctionnalite.text(bFonctionnalite.description);
		baliseFonctionnalite.append($("<div>", {id:bFonctionnalite.id}));
//		balisteListe.append(baliseFonctionnalite);
		var tl = new Timeline(JSON.stringify(bFonctionnalite.data));
		tl.display(bFonctionnalite.id);
//		$("#zoneDemonstrationFonctionnalites").append(balisteListe); 
	}
	
};