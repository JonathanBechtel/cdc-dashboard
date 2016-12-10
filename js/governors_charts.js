/*
Script on this page is used to populate the charts at the top of governors.html that use the date filters
*/

//create callback to initialize google charts
google.charts.setOnLoadCallback(drawDashboard);

//loads and draws first 3 charts w/ filters
function drawDashboard() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=40446973');
		query.setQuery('SELECT A, B, C, D, E, F, G, H, I, J')
		query.send(function(response) {
		
		//create datatable from query that's sent into it
		var data  = response.getDataTable();
		
		var dashboard = new google.visualization.Dashboard(
			document.getElementById('dashboard_div'));
		
		var dateFilter1 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'filter_div1',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var dashChart1 = new google.visualization.ChartWrapper({
			'chartType'       :  'AreaChart',
			'containerId'     :  'chart_div1',
			'view'            :  {
				'columns'     :  [0, 1, 2]
			},
			
			'options'         :  {
				'height'      :  450,
				'vAxis'       : {
					'format'  : 'short'
				}
			}
		});
		
		var dateFilter2 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'filter_div2',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var dashChart2 = new google.visualization.ChartWrapper({
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div2',
			'view'            :  {
				'columns'     :  [0, 4, 5, 6]
			},
			'options'         :  {
				'height'      :  450,
				'vAxis'       : {
					'format'  : 'short'
				}
			}
		});
		
		var dateFilter3 = new google.visualization.ControlWrapper({
			'controlType':  'DateRangeFilter',
			'containerId':  'filter_div3',
			'options'    :  {
				'filterColumnIndex' : 0
			}
		});  
		
		var dashChart3 = new google.visualization.ChartWrapper({
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div3',
			'view'            :  {
				'columns'     : [0, 7, 8, 9]
			},
			
			'options'         : {
				'height'      : 400,
				'vAxis'       : {
					'format'  : 'short'
				}
			}
		});		
		
		dashboard.bind(dateFilter1, dashChart1);
		dashboard.bind(dateFilter2, dashChart2);
		dashboard.bind(dateFilter3, dashChart3);
		dashboard.draw(data);
	});
}