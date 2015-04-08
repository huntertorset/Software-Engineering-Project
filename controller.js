/**
 * controller.js
 *
 * Defines the angular controller which defines button behavior on the
 * librarians data visualization.
 *
 *
 */
var librs = angular.module('librs',[]);

librs.controller('ButtonController', ['$scope', function($scope) {

	    // Create the chart that will be used to animate year-by-year information.
	    $scope.chart = new google.visualization.ColumnChart(document.getElementById('visualization_div'));	    

	    // State the options here, since they are a bit cumbersome
	    // to have inline in the JavaScript function.  This
	    // variable shouldn't be exposed to other controllers, so
	    // I'm not adding it to the scope.
	    var options = { "titleTextStyle": { color: "black",
						fontName: "Open Sans",
						fontSize: 16,
						bold: false,
						italic: false },
			    "title":"Flight Cost from Portland",
			    "titleFontSize": 12,
			    "animation": {
				startup: true,
				duration: 850,
				easing: 'in'
			    },
			    "bar": {"groupWidth": "95%"},
			    "vAxis": {"title": "Cost ($)",
				      "viewWindow" : {max : 550,
									  min : 100}, 
				      "textStyle" : { color: "black",
						      fontName: "Open Sans",
						      fontSize: 12,
						      bold: false,
						      italic: false },
				      "titleTextStyle" : { color: "black",
							   fontName: "Open Sans",
							   fontSize: 16,
							   bold: false,
							   italic: false }},    
			    "hAxis": {"title": "Quarter",
				      "textStyle" : { color: "black",
						      fontName: "Open Sans",
						      fontSize: 12,
						      bold: false,
						      italic: false },
				      "titleTextStyle" : { color: "black",
							   fontName: "Open Sans",
							   fontSize: 16,
							   bold: false,
							   italic: false }},
			    "legend": { "position": "none" }
	    };


	    // Make the initial query to get the whole Fusion table.
	    var query = "SELECT Year, Quarter, Destination, 'Average Price' FROM 1e2TwF1HSNgXBYaBYW57tLhE0Zw3xMtoeh_2oKv6K";

	    var opts = {sendMethod: 'auto'};

        var queryObj = new google.visualization.Query('https://www.google.com/fusiontables/gvizdata?tq=', opts);
	       
	    
	    // Define the variables to hold the entire fusion table,
	    // and a collection of views, one for each year.
	    var data;
	    var views = {};
        views[2009] = {};
		views[2010] = {};
		views[2011] = {};
		views[2012] = {};
		views[2013] = {};
		
	    
	    // Send the query and handle the response by creating and
	    // drawing the data for Boston in 2013.
	    queryObj.setQuery(query);
	    queryObj.send(function(e) { 

                      
		    data = e.getDataTable();
		    
                      
		    // Create a view for 2013 that is the first two columns of 
		    // the data, just the rows that have 2013 for the value.
			var thisCity = $scope.city;
		    var thisYear = $scope.year;
                      
            views[thisYear][thisCity] = new google.visualization.DataView(data);
            views[thisYear][thisCity].setRows(views[thisYear][thisCity].getFilteredRows([{column: 0, value: thisYear}, {column: 2, value: thisCity}]));
                      
		    views[thisYear][thisCity].setColumns([1, 3]);

		    // Draw the chart for 2014.
		    $scope.chart.draw(views[thisYear][thisCity].toDataTable(), options);
                      
		});	


	    // At the start of execution, the year is 2013, and city to Boston.
	    $scope.year = 2013;
		$scope.city = 'Boston';
		


	    // ************************************************************************
	    // Controller functions
	    // ************************************************************************


	    // get()
	    //    Get a new chart.
	    $scope.get = function() {
		
		var thisYear = $scope.year;
		var thisCity = $scope.city;

		// If the view of data for the selected year hasn't been created
		// yet, create it.
		if (views[thisYear][thisCity] === undefined) {

			
            views[thisYear][thisCity] = new google.visualization.DataView(data);
            views[thisYear][thisCity].setRows(views[thisYear][thisCity].getFilteredRows([{column: 0, value: thisYear}, {column: 2, value: thisCity}]));
                      
		    views[thisYear][thisCity].setColumns([1, 3]);
 
		}
		// Draw the chart for selected year and city.
		$scope.chart.draw(views[thisYear][thisCity].toDataTable(), options);

	    };

	    // minus():
	    //   Subtract one from the year and get a new chart.
	    $scope.minus = function() {
	  
		$scope.year = $scope.year - 1;
		$scope.get();
	    };

	    // plus():
	    //   Add one to the year and get a new chart.
	    $scope.plus = function() {

		$scope.year = $scope.year + 1;
		$scope.get();
	    };
		
		$scope.setCityBoston = function() {

		$scope.city = 'Boston';
		$scope.get();
	    };
		
		$scope.setCityChicago = function() {

		$scope.city = 'Chicago';
		$scope.get();
	    };
		
		$scope.setCityDallas = function() {

		$scope.city = 'Dallas';
		$scope.get();
	    };
		
		$scope.setCityDenver = function() {

		$scope.city = 'Denver';
		$scope.get();
	    };
		
		$scope.setCityDetroit = function() {

		$scope.city = 'Detroit';
		$scope.get();
	    };
		
		$scope.setCityLosAngeles = function() {

		$scope.city = 'Los Angeles';
		$scope.get();
	    };
		
		$scope.setCityLasVegas = function() {

		$scope.city = 'Las Vegas';
		$scope.get();
	    };
		
		$scope.setCityNewYork = function() {

		$scope.city = 'New York';
		$scope.get();
	    };
	   
	   	$scope.setCityOrlando = function() {

		$scope.city = 'Orlando';
		$scope.get();
	    }
		
		$scope.setCityPhoenix = function() {

		$scope.city = 'Phoenix';
		$scope.get();
	    };
		
		$scope.setCitySaltLakeCity = function() {

		$scope.city = 'Salt Lake City';
		$scope.get();
	    };
		
		$scope.setCitySanFrancisco = function() {

		$scope.city = 'San Francisco';
		$scope.get();
	    };
		
		$scope.setCitySeattle = function() {

		$scope.city = 'Seattle';
		$scope.get();
	    };
		
		$scope.setCityStLouis = function() {

		$scope.city = 'St. Louis';
		$scope.get();
	    };
		
		$scope.setCityWashington = function() {

		$scope.city = 'Washington DC';
		$scope.get();
	    };
		
	}]);