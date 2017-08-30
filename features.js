var listeFonctionnalite;

//pour chaque fonctionnalite
//	id
//	description
//	data
var fonctionnaliteFriseVide = {
	"id":"friseVide",
	"description":"Afficher une frise vide",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : []
	}
};



var remplirFonctionnalite = function(){
	listeFonctionnalite[fonctionnaliteFriseVide['id']] = fonctionnaliteFriseVide;
	
}
