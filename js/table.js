      google.charts.setOnLoadCallback(initialize);
	  
	  //Pulls in spreadsheet, creates a call back to send query into drawDashboard
	  function initialize() {
		  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=942634171');
		  query.send(drawDashboard)
	  }

      // Callback that creates and populates a data table,
      // instantiates a dashboard, filter controls a table chart,
      // passes in the data and draws it.
      function drawDashboard(response) {

        // Create our data table.
		var data = response.getDataTable();
		
        // Create a dashboard.
        var dashboard  = new google.visualization.Dashboard(
            document.getElementById('dashboard_div'));

        // Create a range slider, passing some options
        var neighborhoodFilter = new google.visualization.ControlWrapper({
          'controlType': 'CategoryFilter',
          'containerId': 'filter_div',
          'options': {
            'filterColumnIndex': 2
          }
        });
		
		var peopleFilter = new google.visualization.ControlWrapper({
			'controlType': 'StringFilter',
			'containerId': 'search_div',
			'options': {
				'filterColumnIndex': 1
			}
		});
		
		var attendanceFilter = new google.visualization.ControlWrapper({
			'controlType': 'CategoryFilter',
			'containerId': 'attendance_div',
			'options'    : {
				'filterColumnIndex': 3
			}
		});
		
		var transportFilter = new google.visualization.ControlWrapper({
			'controlType': 'CategoryFilter',
			'containerId': 'transport_div',
			'options'    : {
				'filterColumnIndex': 4
			}
		});
		

        // Create a Table chart, passing some options
        var tableChart = new google.visualization.ChartWrapper({
          'chartType'     : 'Table',
          'containerId'   : 'chart_div',
		  'view'          : {
			  'columns'   :[1,2,3,4,5,6]
		  },
          'options'       : {
              'width'     : 1150,
              'height'    : 300
          }
        });

        // Establish dependencies, declaring that above filters drive table chart,
        // so that the pie chart will only display entries that are let through
        // given the chosen slider range.
        dashboard.bind([peopleFilter, neighborhoodFilter, attendanceFilter, transportFilter], [tableChart]);

        // Draw the dashboard.
        dashboard.draw(data);	
      }