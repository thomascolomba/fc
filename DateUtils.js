var DateUtils = {
	//sDate1 must precede sDate2
	//both date1 and date2 must have no ms, s, m, h, only d, m, y
	getNumberOfDaysBetweenTwoDates : function(sDate1, sDate2){
		var date1 = new Date(sDate1);
		var date2 = new Date(sDate2);
		var nbMilliseconds = date2 - date1;
		return nbMilliseconds / 1000 / 60 / 60 / 24;
	}
};