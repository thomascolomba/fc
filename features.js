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
//Two arrows fonctionnalites (13 possibilities)
// A : period1.start
// B : period1.end
// C : period2.start
// D : period2.end
// here is the list
// 1)	 C < D < A < B
// 2)	 C < D = A < B
// 3)	 C < A < D < B
// 4)	 C < A < B = D
// 5)	 C < A < B < D
// 6)	 C = A < D < B
// 7)	 C = A < B = D
// 8)	 C = A < B < D
// 9)	 A < C < D < B
// 10)	 A < C < B = D
// 11)	 A < C < B < D
// 12)	 A < B = C < D
// 13)	 A < B < C < D
///////////////////////////////////////////////////////

var fonctionnaliteTwoArrowsCase1 = {
	"id":"twoArrowsCase1",
	"description":"Bottom arrow before top arrow",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"03/01/2015",
				"endDate":"04/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase2 = {
	"id":"twoArrowsCase2",
	"description":"Bottom arrow contiguously before top arrow",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"02/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase3 = {
	"id":"twoArrowsCase3",
	"description":"Bottom arrow before top arrow with common period",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"02/01/2015",
				"endDate":"04/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase4 = {
	"id":"twoArrowsCase4",
	"description":"Bottom arrow starting earlier than top one but ending simultaneously",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"02/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase5 = {
	"id":"twoArrowsCase5",
	"description":"Top arrow nested in bottom arrow",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"02/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"04/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase6 = {
	"id":"twoArrowsCase6",
	"description":"Both arrows starting simultaneously but top one ending later",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase7 = {
	"id":"twoArrowsCase7",
	"description":"Both arrows equal",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase8 = {
	"id":"twoArrowsCase8",
	"description":"Both arrows starting simultaneously but bottom one finishing later",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"01/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase9 = {
	"id":"twoArrowsCase9",
	"description":"Bottom arrow nested in top one",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"04/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"02/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase10 = {
	"id":"twoArrowsCase10",
	"description":"Top arrow starting earlier than bottom one but both ending simultaneously",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"02/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase11 = {
	"id":"twoArrowsCase11",
	"description":"Top arrow before bottom arrow with common period",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"02/01/2015",
				"endDate":"04/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase12 = {
	"id":"twoArrowsCase12",
	"description":"Top arrow contiguously before bottom one",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"02/01/2015",
				"endDate":"03/01/2015",
				"threads":[]
			}
		]
	}
};

var fonctionnaliteTwoArrowsCase13 = {
	"id":"twoArrowsCase13",
	"description":"Top arrow before bottom one",
	"data":{
		"startDate":"01/01/2015",
		"endDate":"04/01/2015",
		"arrows":[
			{
				"name":"myArrow1",
				"startDate":"01/01/2015",
				"endDate":"02/01/2015",
				"threads":[]
			},{
				"name":"myArrow2",
				"startDate":"03/01/2015",
				"endDate":"04/01/2015",
				"threads":[]
			}
		]
	}
};

///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
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
	listeFonctionnalite[fonctionnaliteTwoArrowsCase1['id']] = fonctionnaliteTwoArrowsCase1;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase2['id']] = fonctionnaliteTwoArrowsCase2;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase3['id']] = fonctionnaliteTwoArrowsCase3;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase4['id']] = fonctionnaliteTwoArrowsCase4;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase5['id']] = fonctionnaliteTwoArrowsCase5;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase6['id']] = fonctionnaliteTwoArrowsCase6;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase7['id']] = fonctionnaliteTwoArrowsCase7;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase8['id']] = fonctionnaliteTwoArrowsCase8;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase9['id']] = fonctionnaliteTwoArrowsCase9;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase10['id']] = fonctionnaliteTwoArrowsCase10;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase11['id']] = fonctionnaliteTwoArrowsCase11;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase12['id']] = fonctionnaliteTwoArrowsCase12;
	listeFonctionnalite[fonctionnaliteTwoArrowsCase13['id']] = fonctionnaliteTwoArrowsCase13;
//	listeFonctionnalite[fonctionnaliteTwoArrowsBothFromStartDateToEndDate['id']] = fonctionnaliteTwoArrowsBothFromStartDateToEndDate;
//	listeFonctionnalite[fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDate['id']] = fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDate;
//	listeFonctionnalite[fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDateToEndDateMinusOneMonth['id']] = fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDateToEndDateMinusOneMonth;
//	listeFonctionnalite[fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDateMinusOneMonth['id']] = fonctionnaliteTwoArrowsFromStartDateToEndDateAndFromStartDatePlusOneMonthToEndDateMinusOneMonth;
	
};

remplirFonctionnalite();