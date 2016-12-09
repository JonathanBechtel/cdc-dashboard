/*
This script is used to generate the tables and graphs on the page pantry_demographics.html
*/

google.charts.setOnLoadCallback(drawDashboard);

function drawDashboard() {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
	query.setQuery('SELECT * WHERE K !="Never"')
	query.send(function(response) {
		//creates table with filter for table with customer info
		var data = response.getDataTable();
		
		var searchFilter = new google.visualization.ControlWrapper({
			controlType  : 'StringFilter',
			containerId  : 'user_search_filter_div',
			options      : {
				filterColumnIndex : 1,
				matchType         : 'any',
				ui                : {
					label         : 'Name'
				}
			}
		});
		
		var userTable = new google.visualization.ChartWrapper({
			chartType    : 'Table',
			containerId  : 'user_table_div',
			view         : {
				columns  : [1,29,30,31,2,3,4,5,27,28]
			}
		});	
		
		var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard_div'));
		dashboard.bind(searchFilter, userTable);
		dashboard.draw(data);
	});
		
		//Create pie chart for heading 'How Do They Get Here?'
		var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query2.setQuery('SELECT X WHERE K !="Never"');
		query2.send(function(response2) {
			var data2 = response2.getDataTable();
			var aggData = new google.visualization.data.group(
				data2,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Mode of Transport',
					type: 'number'
				}]
			);
			
			var transportChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'transport_chart_div',
				dataTable    :  aggData
			});
			transportChart.draw();
		});		
		
		//Create pie chart for heading 'Where do they live?'
		var query3 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query3.setQuery('SELECT G WHERE K !="Never"');
		query3.send(function(response3) {
			var data3 = response3.getDataTable();
			var aggData2 = new google.visualization.data.group(
				data3,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Neighborhood',
					type: 'number'
				}]
			);
			
			var neighborhoodChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'neighborhood_chart_div',
				dataTable    :  aggData2
			});
			neighborhoodChart.draw();
		});
		
		//Create pie chart for heading 'How Long Does It Take Them?'
		var query4 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query4.setQuery('SELECT W WHERE K !="Never"');
		query4.send(function(response4) {
			var data4 = response4.getDataTable();
			var aggData3 = new google.visualization.data.group(
				data4,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Length of Time',
					type: 'number'
				}]
			);
			
			var timeToTravelChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'length_of_time_chart_div',
				dataTable    :  aggData3
			});
			timeToTravelChart.draw();
		});		
		
		//Create pie chart for heading 'How Often Do They Come?'
		var query5 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query5.setQuery('SELECT J WHERE K !="Never"');
		query5.send(function(response5) {
			var data5 = response5.getDataTable();
			var aggData4 = new google.visualization.data.group(
				data5,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Frequency',
					type: 'number'
				}]
			);
			
			var frequencyChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'visit_frequency_chart_div',
				dataTable    :  aggData4
			});
			frequencyChart.draw();
		});	

		//Create pie chart for heading 'What's Their Gender?'
		var query6 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query6.setQuery('SELECT T WHERE K !="Never"');
		query6.send(function(response6) {
			var data6 = response6.getDataTable();
			var aggData5 = new google.visualization.data.group(
				data6,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Gender',
					type: 'number'
				}]
			);
			
			var genderChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'gender_chart_div',
				dataTable    :  aggData5
			});
			genderChart.draw();
		});		

		//Create pie chart for heading 'What's Their Age?'
		var query7 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query7.setQuery('SELECT U WHERE K !="Never"');
		query7.send(function(response7) {
			var data7 = response7.getDataTable();
			var aggData6 = new google.visualization.data.group(
				data7,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Age',
					type: 'number'
				}]
			);
			
			var ageChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'age_chart_div',
				dataTable    :  aggData6
			});
			ageChart.draw();
		});

		//Create bar chart for heading 'What's Their Ethnicity?'
		var query7 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query7.setQuery('SELECT Z WHERE K !="Never"');
		query7.send(function(response7) {
			var data7 = response7.getDataTable();
			var aggData6 = new google.visualization.data.group(
				data7,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Ethnicity',
					type: 'number'
				}]
			);
			
			var ethnicityChart = new google.visualization.ChartWrapper({
				chartType    :  'Bar',
				containerId  :  'ethnicity_div',
				dataTable    :  aggData6,
				options      : {
					height   : 400
				}
			});
			ethnicityChart.draw();
		});		
		
		//Create bar chart for heading 'What's Their Language?'
		var query7 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query7.setQuery('SELECT AG WHERE K !="Never"');
		query7.send(function(response7) {
			var data7 = response7.getDataTable();
			var aggData6 = new google.visualization.data.group(
				data7,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Language',
					type: 'number'
				}]
			);
			
			var languageChart = new google.visualization.ChartWrapper({
				chartType    :  'Bar',
				containerId  :  'language_div',
				dataTable    :  aggData6,
				options      : {
					height   :  400
				}
			});
			languageChart.draw();
		});			
		
		//Create bar chart for heading 'What's Their Income?'
		var query7 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query7.setQuery('SELECT AA WHERE K !="Never"');
		query7.send(function(response7) {
			var data7 = response7.getDataTable();
			var aggData6 = new google.visualization.data.group(
				data7,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Income',
					type: 'number'
				}]
			);
			
			var incomeChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'income_div',
				dataTable    :  aggData6,
				options      : {
					height   :  350
				}
			});
			incomeChart.draw();
		});			
		
		//Create bar chart for heading 'How Long Have They Been With Us?'
		var query7 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query7.setQuery('SELECT V WHERE K !="Never"');
		query7.send(function(response7) {
			var data7 = response7.getDataTable();
			var aggData6 = new google.visualization.data.group(
				data7,
				[0],
				[{
					column: 0,
					aggregation: google.visualization.data.count,
					label: 'Time with CDC',
					type: 'number'
				}]
			);
			
			var durationChart = new google.visualization.ChartWrapper({
				chartType    :  'PieChart',
				containerId  :  'length_div',
				dataTable    :  aggData6,
				options      : {
					height   :  350
				}
			});
			durationChart.draw();
		});
	
	//For making the volunteer table with the search filter
	var vQuery = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1905959038');
	vQuery.setQuery('SELECT * WHERE H CONTAINS "Food Pantry"');
	vQuery.send(function(vResponse) {
		var data = vResponse.getDataTable();
		
		var searchFilter = new google.visualization.ControlWrapper({
			controlType  : 'StringFilter',
			containerId  : 'volunteer_search_filter_div',
			options      : {
				filterColumnIndex : 1,
				matchType         : 'any',
				ui                : {
					label         : 'Name'
				}
			}
		});
		
		var userTable = new google.visualization.ChartWrapper({
			chartType    : 'Table',
			containerId  : 'volunteer_table_div',
			view         : {
				columns  : [1,2,3,4,5,17,18]
			},
			options      : {
				width    : 1000
			}
		});	
		
		var view = new google.visualization.DataView(data);
		view.setColumns([
		{
			calc: function(dt, r) {
				var cellValue = dt.getValue(r, 6);
				if ((cellValue.includes("Elmhurst")) || (cellValue.includes("Corona"))) {
					return "From Elmhurst/Corona"
				}
				else {
					return "Not from Elmhurst/Corona"
				}
			},
				type: 'string',
				label: 'Neighborhood'
		}
		]);
		var aggData7 = new google.visualization.data.group(
			view,
			[0],
			[{
				column: 0,
				aggregation: google.visualization.data.count,
				label: view.getColumnLabel(0),
				type: 'number'
			}]
		);
			
		var volunteerPieChart = new google.visualization.ChartWrapper({
			chartType    :  'PieChart',
			containerId  :  'volunteer_location_div',
			dataTable    :  aggData7,
			options      : {
				height   :  350
			}
		});
		volunteerPieChart.draw();
		
		var view2 = new google.visualization.DataView(data);
		view2.setColumns([
		{
			calc: function(dt, r) {
				var cellValue = dt.getValue(r, 8);
				if ((cellValue.includes("None"))) {
					return "Have Not Used CDC"
				}
				else {
					return "Have Used CDC"
				}
			},
				type: 'string',
				label: 'Use of CDC'
		}
		]);
		var aggData8 = new google.visualization.data.group(
			view2,
			[0],
			[{
				column: 0,
				aggregation: google.visualization.data.count,
				label: view.getColumnLabel(0),
				type: 'number'
			}]
		);
			
		var volunteerPieChart2 = new google.visualization.ChartWrapper({
			chartType    :  'PieChart',
			containerId  :  'volunteer_cdc_div',
			dataTable    :  aggData8,
			options      : {
				height   :  350
			}
		});
		volunteerPieChart2.draw();		
		
		var dashboard = new google.visualization.Dashboard(document.getElementById('dashboard2_div'));
		dashboard.bind(searchFilter, userTable);
		dashboard.draw(data);		
	});
}