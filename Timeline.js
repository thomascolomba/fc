//requires jquery 3.1.1

//data
//data["startDate"]
//data["endDate"]
//data["arrows"]//a timeline can have N arrows
//data["arrowsOrder"]//if not defined then lexicographical order based on arrows name will be used
////arrows are exclusive, they can not be nested
//data["arrows"]["name"]//each arrow has a name
//data["arrows"]["startDate"]//default value globalTimeline.startDate
//data["arrows"]["endDate"]//default value globalTimeline.endDate
//data["arrows"]["threads"]//an arrow can have N threads
//data["arrows"]["threadsOrder"]//if not defined the lexicographical order based on threads name will be used
//data["arrows"]["threads"]["name"]//each thread name is different in an arrow
//data["arrows"]["threads"]["startDate"]//default value arrow.startDate
//data["arrows"]["threads"]["endDate"]//default value arrow.endDate
//data["arrows"]["threads"]["ponctualEvents"]//event happening on a precise date (not period)
//data["arrows"]["threads"]["ponctualEvents"]["name"]//event name
//data["arrows"]["threads"]["ponctualEvents"]["date"]//event date
//data["arrows"]["threads"]["periodEvents"]//event happening on a period
//data["arrows"]["threads"]["periodEvents"]["name"]//period name
//data["arrows"]["threads"]["periodEvents"]["startDate"]//period start date
//data["arrows"]["threads"]["periodEvents"]["endDate"]//period end date
//todo add causality arrows, cross-thread/arrow
//todo add source field for some data
//data must be a valid JSON object


//genre arrow c est [Europe,USA] threads : [{France, Espagne, Italie},{Hispaniques, Europeens, Africains}]
var Timeline = function(sData, options){
	var data;
	
	
	var _validateData = function(){
		//throws Exception
//		console.log("---sData = ");
//		console.log(sData);
		data = $.parseJSON(sData); 
	};
	
	var _addThread = function(oJsonThread, jTagReceiving){
		//TODO
		var $divThread = $("<div>", {"class": "thread"});
		_addThreadName(oJsonThread, $divThread);
		jTagReceiving.append($divThread);
	}

	var _addThreadName = function(oJsonThread, jTagReceiving){
		var $spanThreadName = $("<span>", {"class": "threadName"});
		$spanThreadName.append(oJsonThread["name"]);
	}
	
//	var _addArrowStartDate = function(oJsonArrow, jTagReceiving){
//		var $div = $("<div>", {"class": "arrow-startDate"});
//		jTagReceiving.append($div);
//		var $spanInner = $("<span>", {"class": "inner-arrow-startDate"});
//		$div.append($spanInner);
//		$spanInner.append(""+oJsonArrow["startDate"]);
//	}
	
	var _addArrowStartEndDates = function(oJsonArrow, jTagReceiving){
		var $div = $("<div>", {"class": "arrow-startEndDates"});
		jTagReceiving.append($div);
		var $spanInnerStartDate = $("<span>", {"class": "inner-arrow-startDate"});
		$div.append($spanInnerStartDate);
		$spanInnerStartDate.append(""+oJsonArrow["startDate"]);
		var $spanInnerEndDate = $("<span>", {"class": "inner-arrow-endDate"});
		$div.append($spanInnerEndDate);
		$spanInnerEndDate.append(""+oJsonArrow["endDate"]);
	}
	
	var _addArrowEndDate = function(oJsonArrow, jTagReceiving){
		var $div = $("<div>", {"class": "arrow-endDate"});
		jTagReceiving.append($div);
		var $spanInner = $("<span>", {"class": "inner-arrow-endDate"});
		$div.append($spanInner);
		$spanInner.append(""+oJsonArrow["endDate"]);
	}
	
	var _computeArrowWidth = function(oJsonArrow){
		var nbDaysDiff = DateUtils.getNumberOfDaysBetweenTwoDates(oJsonArrow["startDate"], oJsonArrow["endDate"]);
		return nbDaysDiff * 100 / nbDays;
	}
	
	var _computeArrowLeft = function(oJsonArrow){
		var nbDaysDiff = DateUtils.getNumberOfDaysBetweenTwoDates(data["startDate"], oJsonArrow["startDate"]);
		return nbDaysDiff * 100 / nbDays;
	}
	
	var _addArrowContainer = function(jTagReceiving){
		var $div = $("<div>", {"class": "arrow-container"});
		jTagReceiving.append($div);
		return $div;
	}
	
	var _addArrowNameContainer = function(jTagReceiving){
		var $div = $("<div>", {"class": "arrow-name-container"});
		jTagReceiving.append($div);
		return $div;
	}

	var _addArrowBodyContainer = function(jTagReceiving){
		var $div = $("<div>", {"class": "arrow-body-container"});
		jTagReceiving.append($div);
		return $div;
	}
	
	var _addArrowName = function(oJsonArrow, jTagReceiving){
		var $div = $("<div>", {id: oJsonArrow["name"], "class": "arrow-name"});
		$div.append(oJsonArrow["name"]);
		jTagReceiving.append($div);
	}
	
	var _addArrow = function(oJsonArrow, jTagReceiving){
		var iArrowWidth = _computeArrowWidth(oJsonArrow);
		var iArrowLeft = _computeArrowLeft(oJsonArrow);
		var $div = $("<div>", {id: oJsonArrow["name"], "class": "arrow"});
		$div.css("width", iArrowWidth+"%");
		$div.css("left", iArrowLeft+"%");
		jTagReceiving.append($div);
		
		var $innerDiv = $("<div>", {"class": "inner-arrow"});
		$div.append($innerDiv);
		if(oJsonArrow["threads"]){
			for(var iThreadIdx = 0; iThreadIdx < oJsonArrow["threads"].length; iThreadIdx++){
				var oThread = oJsonArrow["threads"][iThreadIdx];
				_addThread(oThread, $innerDiv);
			}
		}
		_addArrowStartEndDates(oJsonArrow, $div);
	}
	
	var _addFriseStartDate = function(jTagReceiving){
		var $friseStartDateDiv = $("<span>", {"class": "friseStartDate"});
		$friseStartDateDiv.append(data["startDate"]);
		jTagReceiving.append($friseStartDateDiv);
	}
	
	var _addFriseEndDate = function(jTagReceiving){
		var $friseEndDateDiv = $("<span>", {"class": "friseEndDate"});
		$friseEndDateDiv.append(data["endDate"]);
		jTagReceiving.append($friseEndDateDiv);
	}
	
	var _addTimeAxis = function(jTagReceiving){
		var $timeAxisContainer = $("<div>", {"class": "timeAxisContainer"});
		jTagReceiving.append($timeAxisContainer);
		var $timeAxis = $("<div>", {"class": "timeAxis"});
		$timeAxisContainer.append($timeAxis);
		var $timeAxisHead = $("<span>", {"class": "timeAxisHead"});
		$timeAxisContainer.append($timeAxisHead);
	}
	
	_validateData();
	
	var nbDays = DateUtils.getNumberOfDaysBetweenTwoDates(data["startDate"], data["endDate"]); 
	
	
	return {
		
		display : function(sIdDiv){
			$("#"+sIdDiv).empty();
			$("#"+sIdDiv).append("<div class='friseContent'><div>");
			var jFriseContent = $("#"+sIdDiv+" > .friseContent");
			if(data["arrows"]){
				var jArrowContainer = _addArrowContainer(jFriseContent);
				var jArrowNameContainer = _addArrowNameContainer(jArrowContainer);
				for(var iArrowIdx = 0; iArrowIdx < data["arrows"].length; iArrowIdx++){
					var oArrow = data["arrows"][iArrowIdx];
					_addArrowName(oArrow, jArrowNameContainer);
				}
				var jArrowBodyContainer = _addArrowBodyContainer(jArrowContainer);
				for(var iArrowIdx = 0; iArrowIdx < data["arrows"].length; iArrowIdx++){
					var oArrow = data["arrows"][iArrowIdx];
					_addArrow(oArrow, jArrowBodyContainer);
				}
				_addTimeAxis(jArrowBodyContainer);
				_addFriseStartDate(jArrowBodyContainer);
				_addFriseEndDate(jArrowBodyContainer);
			}
			
		}
	};
}
