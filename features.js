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


///////////////////////////////////////////////////////
//	One arrow fonctionnalites
///////////////////////////////////////////////////////

var fonctionnaliteOneArrowFromStartDateToEndDate = {
	"id":"oneArrowFromStartDateToEndDate",
	"description":"Afficher une frise avec une ligne de la date de debut a la date de fin",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow",
				"startDate" : "01/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			}
		]
	}
};


var fonctionnaliteOneArrowFromStartDatePlusOneMonthToEndDate = {
	"id":"oneArrowFromStartDatePlusOneMonthToEndDate",
	"description":"Afficher une frise avec une ligne de la date de debut plus un mois a la date de fin",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow",
				"startDate" : "02/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			}
		]
	}
};


var fonctionnaliteOneArrowFromStartDateToEndDateMinusOneMonth = {
	"id":"oneArrowFromStartDateToEndDateMinusOneMonth",
	"description":"Afficher une frise avec une ligne de la date de debut a la date de fin moins un mois",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow",
				"startDate" : "01/01/2015",
				"endDate" : "11/31/2015",
				"threads" : []
			}
		]
	}
};


var fonctionnaliteOneArrowFromStartDatePlusOneMonthToEndDateMinusOneMonth = {
	"id":"oneArrowFromStartDatePlusOneMonthToEndDateMinusOneMonth",
	"description":"Afficher une frise avec une ligne de la date de debut plus un mois a la date de fin moins un mois",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow",
				"startDate" : "02/01/2015",
				"endDate" : "11/31/2015",
				"threads" : []
			}
		]
	}
};


///////////////////////////////////////////////////////
//Two arrows fonctionnalites
///////////////////////////////////////////////////////

var fonctionnaliteTwoArrowsBothFromStartDateToEndDate = {
	"id":"twoArrowsFromStartDateToEndDate",
	"description":"Afficher une frise avec deux lignes de la date de debut a la date de fin",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow1",
				"startDate" : "01/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			},{
				"name" : "myArrow2",
				"startDate" : "01/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			}
		]
	}
};


var fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDate = {
	"id":"twoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDate",
	"description":"Afficher une frise avec deux lignes de la date de debut a la date de fin et de la date de debut plus un mois a la date de fin",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow1",
				"startDate" : "01/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			},{
				"name" : "myArrow2",
				"startDate" : "02/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			}
		]
	}
};


var fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDateToEndDateMinusOneMonth = {
	"id":"twoArrowsFromStartDateToEndDateAndFromStartDateToEndDateMinusOneMonth",
	"description":"Afficher une frise avec deux lignes de la date de debut a la date de fin et de la date de debut a la date de fin moins un mois",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow1",
				"startDate" : "01/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			},{
				"name" : "myArrow2",
				"startDate" : "01/01/2015",
				"endDate" : "11/31/2015",
				"threads" : []
			}
		]
	}
};


var fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDateMinusOneMonth = {
	"id":"twoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDateMinusOneMonth",
	"description":"Afficher une frise avec deux lignes de la date de debut a la date de fin et de la date de debut plus un mois a la date de fin moins un mois",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "myArrow1",
				"startDate" : "01/01/2015",
				"endDate" : "12/31/2015",
				"threads" : []
			},{
				"name" : "myArrow2",
				"startDate" : "02/01/2015",
				"endDate" : "11/31/2015",
				"threads" : []
			}
		]
	}
};


///////////////////////////////////////////////////////
//Autres fonctionnalites
///////////////////////////////////////////////////////



var fonctionnaliteFriseAvecUneFlecheUnFilDeuxEvenements = {
	"id":"friseAvecUneFlecheUnFilDeuxEvenements",
	"description":"Afficher une frise avec une fleche et un fil avec deux evenements",
	"data":{
		"startDate" : "01/01/2015",
		"endDate" : "12/31/2015",
		"arrows" : [
			{
				"name" : "Melenchon",
				"startDate" : "01/01/2015",
				"endDate" : "12/31/2015",
				"threads" : [
					{
						"name" : "meeting",
						"startDate" : "01/01/2015",
						"endDate" : "12/31/2015",
						"ponctualEvents" : [
							{
								"name" : "passe dans le JDD",
								"date" : "02/01/2015"
							},
							{
								"name" : "annonce de la candidature aux presidentielles",
								"date" : "07/05/2015"
							}
						]
					}
				]
			}
		]
	}
};






var remplirFonctionnalite = function(){
	listeFonctionnalite = {};
	listeFonctionnalite[fonctionnaliteFriseVide['id']] = fonctionnaliteFriseVide;
	
	//one arrow
	listeFonctionnalite[fonctionnaliteOneArrowFromStartDateToEndDate['id']] = fonctionnaliteOneArrowFromStartDateToEndDate;
	listeFonctionnalite[fonctionnaliteOneArrowFromStartDatePlusOneMonthToEndDate['id']] = fonctionnaliteOneArrowFromStartDatePlusOneMonthToEndDate;
	listeFonctionnalite[fonctionnaliteOneArrowFromStartDateToEndDateMinusOneMonth['id']] = fonctionnaliteOneArrowFromStartDateToEndDateMinusOneMonth;
	listeFonctionnalite[fonctionnaliteOneArrowFromStartDatePlusOneMonthToEndDateMinusOneMonth['id']] = fonctionnaliteOneArrowFromStartDatePlusOneMonthToEndDateMinusOneMonth;
	
	//two arrows
	listeFonctionnalite[fonctionnaliteTwoArrowsBothFromStartDateToEndDate['id']] = fonctionnaliteTwoArrowsBothFromStartDateToEndDate;
	listeFonctionnalite[fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDate['id']] = fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDate;
	listeFonctionnalite[fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDateToEndDateMinusOneMonth['id']] = fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDateToEndDateMinusOneMonth;
	listeFonctionnalite[fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDateMinusOneMonth['id']] = fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDateMinusOneMonth;
	
};

remplirFonctionnalite();