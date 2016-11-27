//create callback to initialize google charts
google.charts.setOnLoadCallback(initialize);

//Pulls in spreadsheet, creates a call back to send query into drawDashboard
function initialize () {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=929929990');
	query.send(drawDashboard)
}

// Callback that creates and populates a data table,
// instantiates a dashboard, filter controls a table chart,
// passes in the data and draws it.
function drawDashboard (response) {
	
	//create a datatable from query that's passed into the function
	var data = response.getDataTable();
	
	//initialize dashboard instance
	var dashboard = new google.visualization.Dashboard(
			document.getElementById('dashboard_div'));	
	
	//Create category and search filter for table
	var studentFilter = new google.visualization.ControlWrapper({
			'controlType': 'StringFilter',
			'containerId': 'student_search_filter',
			'options': {
				'filterColumnIndex': 18
			}
		});
		
	var cohortFilter = new google.visualization.ControlWrapper({
			'controlType': 'CategoryFilter',
			'containerId': 'cohort_filter',
			'options'    : {
				'filterColumnIndex': 16
			}
		});
	
			
	// Create a Table chart for contact info lookup, passing some options
    var tableChart = new google.visualization.ChartWrapper({
        'chartType'     : 'Table',
        'containerId'   : 'student_contact_table',
		'view'          : {
			'columns'   :[18,23,42,1,2,52,8,12,53,28,30,29,31,33,32,34,36,35,37,39,38,40]
		},
        'options'       : {
            'height'    : 300
        }
    });
	
	//bind the filters to the table
	dashboard.bind([studentFilter, cohortFilter], [tableChart]);
	dashboard.draw(data);
}