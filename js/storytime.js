//create callback to initialize google charts
google.charts.setOnLoadCallback(initialize);

	//Pulls in spreadsheet, creates a call back to send query into drawDashboard
	function initialize() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809');
		query.send(drawDashboard);
	}
	
	// Callback that creates and populates a data table,
    // instantiates a dashboard, filter controls a table chart,
    // passes in the data and draws it.
	function drawDashboard(response) {
		
		//create datatable from query that's sent into it
		var data  = response.getDataTable();
		
		var dashboard = new google.visualization.Dashboard(
			document.getElementById('dashboard_div'));
		
		var storytimeDateFilter1 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'date_filter_div1',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var familiesHelpedChart = new google.visualization.ChartWrapper({
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div1',
			'view'            :  {
				'columns'     :  [0, 1]
			},
			
			'options'         :  {
				'height'      :  450
			}
		});
		
		var storytimeDateFilter2 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'date_filter_div2',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var childrenHelpedChart = new google.visualization.ChartWrapper({
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div2',
			'view'            :  {
				'columns'     :  [0, 2, 3]
			},
			'options'         :  {
				'height'      :  450
			}
		});
		
		var storytimeDateFilter3 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'date_filter_div3',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var booksDonatedChart = new google.visualization.ChartWrapper({
			'chartType'       :  'AreaChart',
			'containerId'     :  'chart_div3',
			'view'            :  {
				'columns'     : [0, 5]
			},
			
			'options'         : {
				'height'      : 400,
				'vAxis'       : {
					'format'  : 'short'
				}
			}
		});
		
		dashboard.bind(storytimeDateFilter1, familiesHelpedChart);
		dashboard.bind(storytimeDateFilter2, childrenHelpedChart);
		dashboard.bind(storytimeDateFilter3, booksDonatedChart);
		dashboard.draw(data);
	}