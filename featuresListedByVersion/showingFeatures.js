
var afficherListeFonctionnalites = function(){
	var balisteListe = $("<ol>");
	for(var bFonctionnalite in listeFonctionnalite){
		var baliseFonctionnalite = $("<li>");
		baliseFonctionnalite.text(bFonctionnalite.description);
		balisteListe.append(baliseFonctiuonnalite);
	}
	$("#zoneListeFonctionnalites").append(balisteListe);
};