var salesDetails = $('.sales__details');
var sales = $('.sales');

var buttonClickHandler = function () {
	var isActive = salesDetails.attr('data-state');

	if (isActive == 'active') {
		salesDetails.attr('data-state','inactive');
	} else {
		salesDetails.attr('data-state'.'active');
	}

};

var buttonClickHandler = function () {
	var isActive = salesDetails2.attr('data-state');
	
	if (isActive == 'active') {
		salesDetails2.attr('data-state','inactive');
	} else {
		salesDetails2.attr('data-state'.'active');
	}
}

sales.on('click', buttonClickHandler);

