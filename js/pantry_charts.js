/*
Script on this page is used to populate the charts at the top of pantry.html that use the date filters
*/

//create callback to initialize google charts
google.charts.setOnLoadCallback(drawDashboard);

//loads and draws first 3 charts w/ filters
function drawDashboard() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508');
		query.setQuery('SELECT A, B, C, D, E, F, G, H*I LABEL H*I "Volunteer Hours"')
		query.send(function(response) {
		
		//create datatable from query that's sent into it
		var data  = response.getDataTable();
		
		var dashboard = new google.visualization.Dashboard(
			document.getElementById('dashboard_div'));
		
		var pantryDateFilter1 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'filter_div1',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var totalsServedChart = new google.visualization.ChartWrapper({
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div1',
			'view'            :  {
				'columns'     :  [0, 2]
			},
			
			'options'         :  {
				'height'      :  450
			}
		});
		
		var pantryDateFilter2 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'filter_div2',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var totalsHelpedChart = new google.visualization.ChartWrapper({
			'chartType'       :  'AreaChart',
			'containerId'     :  'chart_div2',
			'view'            :  {
				'columns'     :  [0, 1, 7]
			},
			'options'         :  {
				'height'      :  450,
				'vAxis'       : {
					'format'  : 'short'
				}
			}
		});
		
		var pantryDateFilter3 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'filter_div3',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var totalsCollectedChart = new google.visualization.ChartWrapper({
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div3',
			'view'            :  {
				'columns'     : [0, 3, 4, 5]
			},
			
			'options'         : {
				'height'      : 400,
				'vAxis'       : {
					'format'  : 'short'
				}
			}
		});		
		
		dashboard.bind(pantryDateFilter1, totalsServedChart);
		dashboard.bind(pantryDateFilter2, totalsHelpedChart);
		dashboard.bind(pantryDateFilter3, totalsCollectedChart);
		dashboard.draw(data);
	});
}

//Callback for last filtered chart
google.charts.setOnLoadCallback(drawLastChart);

function drawLastChart() {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508');
	query.setQuery('SELECT MONTH(A), COUNT(B) Group By MONTH(A)');
	query.send(function(response){
		var data = response.getDataTable();
		
		var pantryDateFilter4 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'filter_div4',
			'options'    :  {
				'filterColumnIndex' : 1
			}
		});
		
		var totalsCollectedChart = new google.visualization.ChartWrapper({
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div4',
			//dataTable         :  data,
			'options'         : {
				'height'      : 400,
				'vAxis'       : {
					'format'  : 'short'
				}
			}
		});
		//totalsCollectedChart.draw();
		
		/*var totalsChart = new google.visualization.BarChart(document.getElementById('chart_div4'));
		totalsChart.draw(data);*/
		
		var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div2'));
		dashboard.bind(pantryDateFilter4, totalsCollectedChart);
		dashboard.draw(data);
	});
}