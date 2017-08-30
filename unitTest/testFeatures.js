
QUnit.test( "testFriseVide", function( assert ) {
	var sFriseVide = '{"startDate" : "01/01/2015","endDate" : "12/31/2015"}';
	var friseVide = new Timeline(sFriseVide);
	friseVide.display('divTestFriseVide');
	
	var oFriseStartDate = $('#divTestFriseVide .friseStartDate');
	var oFriseEndDate = $('#divTestFriseVide .friseEndDate');
	assert.equal(1, oFriseStartDate.length, "found unique start date");
	assert.equal("01/01/2015", oFriseStartDate[0].innerHTML, "start date correct");
	assert.equal(1, oFriseEndDate.length, "found unique end date");
	assert.equal("12/31/2015", oFriseEndDate[0].innerHTML, "end date correct");
});





QUnit.test( "testFriseWithOneArrow", function( assert ) {
	var sFriseWithOneArrow = '{"startDate":"01/01/2015","endDate":"12/31/2015","arrows":[{"name":"Melenchon","startDate":"01/01/2015","endDate":"12/31/2015"}]}';
	var friseWithOneArrow = new Timeline(sFriseWithOneArrow);
	friseWithOneArrow.display('divTestFriseVide');
});


