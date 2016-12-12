/*
Script on this page is used to populate the charts at the top of girl_scouts.html that use the date filters
*/

//create callback to initialize google charts
google.charts.setOnLoadCallback(drawDashboard);

//loads and draws first 3 charts w/ filters
function drawDashboard() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820');
		query.setQuery('SELECT A, B, C, D, E, F, G, H, G*H LABEL G*H "Volunteer Hours"');
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
			'chartType'       :  'Bar',
			'containerId'     :  'chart_div1',
			'view'            :  {
				'columns'     :  [0, 1, 2]
			},
			
			'options'         :  {
				'height'      :  450
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
				'columns'     :  [0, 4, 5]
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
			'chartType'       :  'ComboChart',
			'containerId'     :  'chart_div3',
			'view'            :  {
				'columns'     : [0, 3, 6, 8]
			},
			
			'options'         : {
				'height'      : 400,
				'vAxis'       : {
					'format'  : 'short'
				},
				'series'      : {
					1         : {
						'type': 'bars'
					},
					0         : {
						'type': 'bars'
					}
				}
			}
		});		
		
		dashboard.bind(dateFilter1, dashChart1);
		dashboard.bind(dateFilter2, dashChart2);
		dashboard.bind(dateFilter3, dashChart3);
		dashboard.draw(data);
		
		//Begin extra data munging to create total meetings chart
		var view = new google.visualization.DataView(data);
		view.setColumns([
			{
				calc: function(dt, r) {
					var value = dt.getValue(r, 0);
					var month = value.getMonth()+1;
					var year  = value.getFullYear();
					return month + "-" + year;
				},
				type: 'string',
			},
			{
				calc: function(dt, r) {
					value = dt.getValue(r, 6);
					if (value !== "yes") {
						return 1;
					}
					else {
						return 0;
					}
				},
				type: 'number'
			}
		]);
		
		var aggData = new google.visualization.data.group(
			view, 
			[0],
			[{
				column: 0, 
				label: 'Number of Meetings', 
				aggregation: google.visualization.data.count, 
				type: 'number'
			},
			{
				column: 1,
				label: 'Small Group Meetings',
				aggregation: google.visualization.data.sum,
				type: 'number'
			}]
			);
			
		//**End extra data munging to aggregate data for total meetings chart
		
		var totalMeetingsChart = new google.visualization.ChartWrapper({
			chartType     :'Bar',
			containerId   :'chart_div4',
			dataTable     :aggData
		});
		totalMeetingsChart.draw();
	});
}