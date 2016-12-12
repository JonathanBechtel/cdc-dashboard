/*
This script is made to populate the tables at the bottom of the page on mentoring.html.  The tables that measure
unique and total attendance along with demographic information for guests and volunteers is what's created on 
this page.
*/

google.charts.setOnLoadCallback(drawAttendanceTable);

//Function for Total Attendance Table
function drawAttendanceTable() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=41319289');
  query.setQuery('select A, B WHERE C = "Mentoring" AND D = "Guest"');
  query.send(function (response) {
   
   var data = response.getDataTable();
   var view = new google.visualization.DataView(data);
   view.setColumns([0,
		{
			calc: function(dt, r) {
				var today       = new Date().getTime();
				var days        = 86400000; //# of milliseconds in a day
				var oneMonthAgo = today - (30*days);
				var cellValue   = dt.getValue(r, 0).getTime();
				if ((cellValue <= today) && (cellValue >= oneMonthAgo)) {
					return 1
				}
				return 0;
			},
			type : 'number',
			label: 'This Month'
		},
		{
			calc: function(dt, r) {
				var today        = new Date().getTime();
				var days         = 86400000; //# of milliseconds in a day
				var oneMonthAgo  = today - (30*days);
				var twoMonthsAgo = oneMonthAgo - (60*days);
				var cellValue    = dt.getValue(r, 0).getTime();
				if ((cellValue < oneMonthAgo) && (cellValue >= twoMonthsAgo)) {
					return 1;
				}
				return 0;
			},
			type:  'number',
			label: 'Last Month'
		},
		{
			calc: function(dt, r) {
				var thisYear = new Date().getYear();
				var cellYear = dt.getValue(r, 0).getYear();
				if (cellYear === thisYear) {
					return 1;
				}
				return 0;
			},
			type:  'number',
			label: 'Year to Date'
		},
		{
			calc: function() {
				return 1;
			},
			type:  'number',
			label: 'All Time'
		}
   ]);
   
   var aggData = new google.visualization.data.group(
		view,
		[{
			column: 0,
			label: 'Time Frame',
			modifier: function() {
				return 'Attendance';
			},
			type: 'string'
		}],
		[{
			column: 1,
			label: view.getColumnLabel(1),
			aggregation: google.visualization.data.sum,
			type: 'number'
		},
		{
			column: 2,
			label: view.getColumnLabel(2),
			aggregation: google.visualization.data.sum,
			type: 'number'
		},
		{
			column: 3,
			label: view.getColumnLabel(3),
			aggregation: google.visualization.data.sum,
			type: 'number'
		},
		{
			column: 4,
			label: view.getColumnLabel(4),
			aggregation: google.visualization.data.sum,
			type: 'number'
		}]
   );
   
   var tableDiv = document.getElementById("table_div1");
   var chart = new google.visualization.Table(tableDiv);
   chart.draw(aggData);
  });
}
//End Function for total attendance tableDiv

//Call back to initiate table
google.charts.setOnLoadCallback(drawUniqueAttendanceTable);

//function to create table for unique attendance
function drawUniqueAttendanceTable() {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=41319289');
	query.setQuery('select A, B WHERE C = "Mentoring" AND D = "Guest"');
	query.send(function(response) {
		var data = response.getDataTable();
		var view = new google.visualization.DataView(data);
		view.setColumns([
		{
			calc: function(dt, r) {
				var today       = new Date().getTime();
				var days        = 86400000; //# of milliseconds in a day
				var oneMonthAgo = today - (30*days);
				var cellValue   = dt.getValue(r, 0).getTime();
				var name        = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				if ((cellValue <= today) && (cellValue >= oneMonthAgo)) {
					return name.toLowerCase();
				}
				return null;
			},
			type : 'string',
			label: 'This Month'
		},
		{
			calc: function(dt, r) {
				var today        = new Date().getTime();
				var days         = 86400000; //# of milliseconds in a day
				var oneMonthAgo  = today - (30*days);
				var twoMonthsAgo = oneMonthAgo - (60*days);
				var cellValue    = dt.getValue(r, 0).getTime();
				var name         = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				if ((cellValue < oneMonthAgo) && (cellValue >= twoMonthsAgo)) {
					return name.toLowerCase();
				}
				return null;
			},
			type:  'string',
			label: 'Last Month'
		},
		{
			calc: function(dt, r) {
				var thisYear = new Date().getYear();
				var cellYear = dt.getValue(r, 0).getYear();
				var name     = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				if (cellYear === thisYear) {
					return name.toLowerCase();
				}
				return null;
			},
			type:  'string',
			label: 'This Year'
		},
		{
			calc: function(dt, r) {
				var name = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				return name.toLowerCase();
			},
			type:  'string',
			label: 'All Time'
		}
	]);
	
	//Create arrays from distinct values from each column in view
	col1 = view.getDistinctValues(0);
	col2 = view.getDistinctValues(1);
	col3 = view.getDistinctValues(2);
	col4 = view.getDistinctValues(3);
	
	//Remove null values from array of attendees
	var removeNullValue = function (value) {
		return value != null;
	}
	
	//remove the null values in each array, so each one contains true # of attendees
	col1 = col1.filter(removeNullValue);
	col2 = col2.filter(removeNullValue);
	col3 = col3.filter(removeNullValue);
	col4 = col4.filter(removeNullValue);
	
	//Build the Datatable that'll be passed into chart.draw()
	var finalData = new google.visualization.DataTable();
	finalData.addColumn('string', 'Time Frame');
	finalData.addColumn('number', 'This Month');
	finalData.addColumn('number', 'Last Month');
	finalData.addColumn('number', 'Year to Date');
	finalData.addColumn('number', 'All Time');
	finalData.addRow(['Attendance', col1.length, col2.length, col3.length, col4.length]);
	
	
		
	var tableDiv = document.getElementById("table_div2");
	var chart = new google.visualization.Table(tableDiv);
	chart.draw(finalData);
	});
}

//Call back to initiate table
google.charts.setOnLoadCallback(uniqueDemographicsTable);

//Function that creates the table under the heading "Unique Attendance from Corona/Elmhurst"
function uniqueDemographicsTable() {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=41319289');
	query.setQuery('select A, B WHERE C = "Mentoring" AND D = "Guest"');
	query.send(function(response) {
		var data = response.getDataTable();
		var view = new google.visualization.DataView(data);
		view.setColumns([0,
			{
				calc: function(dt, r) {
					var name = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
					return name.toLowerCase();
				},
				type: 'string',
				label: 'guests'
			}
		]);

		var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1852373469');
		query2.setQuery('SELECT B, AD, AE, AF WHERE G = "Corona" OR G = "Elmhurst"');
		query2.send(function(response2) {
			var data2 = response2.getDataTable();
			
			//**Begin extra Data Munging to get columns B, AD, AE, AF into 1 column **
			
			//Create views to be used to create separate DataViews
			var view2 = new google.visualization.DataView(data2);
			var view3 = new google.visualization.DataView(data2);
			var view4 = new google.visualization.DataView(data2);
			var view5 = new google.visualization.DataView(data2);
			
			//Turn into separate columns
			view2.setColumns([0]);
			view3.setColumns([1]);
			view4.setColumns([2]);
			view5.setColumns([3]);

			//Begin joining different views
			var join1 = new google.visualization.data.join(
				view2, view3,
				'full',
				[[0,0]],
				[],
				[]
			);
			
			var join2 = new google.visualization.data.join(
				join1, view4,
				'full',
				[[0,0]],
				[],
				[]
			);		

			var join3 = new google.visualization.data.join(
				join2, view5,
				'full',
				[[0,0]],
				[],
				[]
			);
			
			//Create new view from joined views, so it can be modified again
			var joinedView = new google.visualization.DataView(join3);
			
			//Remove all special characters and convert to lowercase letters.
			joinedView.setColumns([
				{
					calc: function(dt, r) {
						var cellValue = dt.getValue(r, 0);
						if (cellValue !== null) {
							var name = cellValue.replace(/[^a-zA-Z]+/ig, '');
							return name.toLowerCase();
						}
					},
					type:  'string',
					label: 'guests'
				}
			]);
			
			//Filter out null values, setRows to non-null values
			var filter = joinedView.getFilteredRows([{column: 0, minValue: ""}]);
			joinedView.setRows(filter);
			
			//** End of Data Munging to merge all Name columns into one **
			
			//Join final DataView with attendees from Food Pantry
			var joinedData = new google.visualization.data.join(
			view, joinedView,
			'inner',
			[[1,0]],
			[0],
			[]
			);

			//Create separate columns for attendees during different time spans (last month, this month, etc);
			var masterView = new google.visualization.DataView(joinedData);
			masterView.setColumns([
				{
				calc: function(dt, r) {
					var today       = new Date().getTime();
					var days        = 86400000; //# of milliseconds in a day
					var oneMonthAgo = today - (30*days);
					var cellValue   = dt.getValue(r, 1).getTime();
					if ((cellValue <= today) && (cellValue >= oneMonthAgo)) {
						return dt.getValue(r, 0);
					}
					return null;
				},
				type : 'string',
				label: 'This Month'
				},
				{
				calc: function(dt, r) {
					var today        = new Date().getTime();
					var days         = 86400000; //# of milliseconds in a day
					var oneMonthAgo  = today - (30*days);
					var twoMonthsAgo = oneMonthAgo - (60*days);
					var cellValue    = dt.getValue(r, 1).getTime();
					if ((cellValue < oneMonthAgo) && (cellValue >= twoMonthsAgo)) {
						return dt.getValue(r, 0);
					}
					return null;
				},
				type:  'string',
				label: 'Last Month'
				},
				{
				calc: function(dt, r) {
					var thisYear = new Date().getYear();
					var cellYear = dt.getValue(r, 1).getYear();
					if (cellYear === thisYear) {
						return dt.getValue(r, 0);
					}
					return null;
				},
				type:  'string',
				label: 'This Year'
				},
				{
				calc: function(dt, r) {
					return dt.getValue(r, 0);
				},
				type:  'string',
				label: 'All Time'
				}
			]);
			
			//Get array of unique attendees for each time span
			col1 = masterView.getDistinctValues(0);
			col2 = masterView.getDistinctValues(1);
			col3 = masterView.getDistinctValues(2);
			col4 = masterView.getDistinctValues(3);
			
			//Remove null values from array of attendees
			var removeNullValue = function (value) {
				return value != null;
			}
	
			//Remove the null values in each array, so each one contains true # of attendees
			col1 = col1.filter(removeNullValue);
			col2 = col2.filter(removeNullValue);
			col3 = col3.filter(removeNullValue);
			col4 = col4.filter(removeNullValue);
			
			//Build DataTable to pass into chart.draw()
			var finalData = new google.visualization.DataTable();
			finalData.addColumn('string', 'Time Frame');
			finalData.addColumn('number', 'This Month');
			finalData.addColumn('number', 'Last Month');
			finalData.addColumn('number', 'Year to Date');
			finalData.addColumn('number', 'All Time');
			finalData.addRow(['Attendance', col1.length, col2.length, col3.length, col4.length]);
			
			var tableDiv = document.getElementById("table_div3");
		    var chart = new google.visualization.Table(tableDiv);
		    chart.draw(finalData);
		});
	});
}

//Initiate callback for table that'll contain info for total volunteer attendance
google.charts.setOnLoadCallback(drawVolunteerTable);

//Function that builds table under the heading "Total Volunteer Attendance" on storytime.html
function drawVolunteerTable() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=41319289');
  query.setQuery('select A, B WHERE C="Mentoring" AND D="Volunteer"');
  query.send(function (response) {
   
   var data = response.getDataTable();
   var view = new google.visualization.DataView(data);
   view.setColumns([0,
		{
			calc: function(dt, r) {
				var today       = new Date().getTime();
				var days        = 86400000; //# of milliseconds in a day
				var oneMonthAgo = today - (30*days);
				var cellValue   = dt.getValue(r, 0).getTime();
				if ((cellValue <= today) && (cellValue >= oneMonthAgo)) {
					return 1;
				}
				return 0;
			},
			type : 'number',
			label: 'This Month'
		},
		{
			calc: function(dt, r) {
				var today        = new Date().getTime();
				var days         = 86400000; //# of milliseconds in a day
				var oneMonthAgo  = today - (30*days);
				var twoMonthsAgo = oneMonthAgo - (60*days);
				var cellValue    = dt.getValue(r, 0).getTime();
				if ((cellValue < oneMonthAgo) && (cellValue >= twoMonthsAgo)) {
					return 1;
				}
				return 0;
			},
			type:  'number',
			label: 'Last Month'
		},
		{
			calc: function(dt, r) {
				var thisYear = new Date().getYear();
				var cellYear = dt.getValue(r, 0).getYear();
				if (cellYear === thisYear) {
					return 1;
				}
				return 0;
			},
			type:  'number',
			label: 'Year to Date'
		},
		{
			calc: function(dt, r) {
				return 1;
			},
			type:  'number',
			label: 'All Time'
		}
	]);
	
	var aggData = new google.visualization.data.group(
		view,
		[{
			column: 0,
			label: 'Time Frame',
			modifier: function() {
				return 'Attendance';
			},
			type: 'string'
		}],
		[{
			column: 1,
			label: view.getColumnLabel(1),
			aggregation: google.visualization.data.sum,
			type: 'number'
		},
		{
			column: 2,
			label: view.getColumnLabel(2),
			aggregation: google.visualization.data.sum,
			type: 'number'
		},
		{
			column: 3,
			label: view.getColumnLabel(3),
			aggregation: google.visualization.data.sum,
			type: 'number'
		},
		{
			column: 4,
			label: view.getColumnLabel(4),
			aggregation: google.visualization.data.sum,
			type: 'number'
		}]
   );
   
   var tableDiv = document.getElementById("table_div4");
   var chart = new google.visualization.Table(tableDiv);
   chart.draw(aggData);
  });
}

//Initiate callback for table that'll contain info for unique volunteer attendance
google.charts.setOnLoadCallback(drawUniqueVolunteerTable);

//Function that builds table under the heading "Unique Volunteer Attendance" on storytime.html
function drawUniqueVolunteerTable () {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=41319289');
	query.setQuery('select A, B WHERE C = "Mentoring" AND D = "Volunteer"');
	query.send(function(response) {
		var data = response.getDataTable();
		var view = new google.visualization.DataView(data);
		view.setColumns([
		{
			calc: function(dt, r) {
				var today       = new Date().getTime();
				var days        = 86400000; //# of milliseconds in a day
				var oneMonthAgo = today - (30*days);
				var cellValue   = dt.getValue(r, 0).getTime();
				var name        = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				if ((cellValue <= today) && (cellValue >= oneMonthAgo)) {
					return name.toLowerCase();
				}
				return null;
			},
			type : 'string',
			label: 'This Month'
		},
		{
			calc: function(dt, r) {
				var today        = new Date().getTime();
				var days         = 86400000; //# of milliseconds in a day
				var oneMonthAgo  = today - (30*days);
				var twoMonthsAgo = oneMonthAgo - (60*days);
				var cellValue    = dt.getValue(r, 0).getTime();
				var name         = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				if ((cellValue < oneMonthAgo) && (cellValue >= twoMonthsAgo)) {
					return name.toLowerCase();
				}
				return null;
			},
			type:  'string',
			label: 'Last Month'
		},
		{
			calc: function(dt, r) {
				var thisYear = new Date().getYear();
				var cellYear = dt.getValue(r, 0).getYear();
				var name     = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				if (cellYear === thisYear) {
					return name.toLowerCase();
				}
				return null;
			},
			type:  'string',
			label: 'This Year'
		},
		{
			calc: function(dt, r) {
				var name = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
				return name.toLowerCase();
			},
			type:  'string',
			label: 'All Time'
		}
	]);
	
	//Create arrays from distinct values from each column in view
	col1 = view.getDistinctValues(0);
	col2 = view.getDistinctValues(1);
	col3 = view.getDistinctValues(2);
	col4 = view.getDistinctValues(3);
	
	//Remove null values from array of attendees
	var removeNullValue = function (value) {
		return value != null;
	}
	
	//remove the null values in each array, so each one contains true # of attendees
	col1 = col1.filter(removeNullValue);
	col2 = col2.filter(removeNullValue);
	col3 = col3.filter(removeNullValue);
	col4 = col4.filter(removeNullValue);
	
	//Build the Datatable that'll be passed into chart.draw()
	var finalData = new google.visualization.DataTable();
	finalData.addColumn('string', 'Time Frame');
	finalData.addColumn('number', 'This Month');
	finalData.addColumn('number', 'Last Month');
	finalData.addColumn('number', 'Year to Date');
	finalData.addColumn('number', 'All Time');
	finalData.addRow(['Attendance', col1.length, col2.length, col3.length, col4.length]);
	
	var tableDiv = document.getElementById("table_div5");
	var chart = new google.visualization.Table(tableDiv);
	chart.draw(finalData);
	});
}

//Call back to initiate table
google.charts.setOnLoadCallback(uniqueVolunteerDemographicsTable);

//Function that creates the table under the heading "Unique Attendance from Corona/Elmhurst"
function uniqueVolunteerDemographicsTable() {
	var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=41319289');
	query.setQuery('select A, B WHERE C = "Mentoring" AND D = "Volunteer"');
	query.send(function(response) {
		var data = response.getDataTable();
		var view = new google.visualization.DataView(data);
		view.setColumns([0,
			{
				calc: function(dt, r) {
					var name = dt.getValue(r, 1).replace(/[^a-zA-Z]+/ig, '');
					return name.toLowerCase();
				},
				type:  'string',
				label: 'guests'
			}
		]);
		
		var query2 = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1905959038');
		query2.setQuery('SELECT B WHERE G = "Corona" OR G = "Elmhurst"');
		query2.send(function(response2) {
			var data2 = response2.getDataTable();
			var view2 = new google.visualization.DataView(data2);
			view2.setColumns([
				{
					calc: function(dt, r){
						var name = dt.getValue(r, 0).replace(/[^a-zA-Z]+/ig, '');
						return name.toLowerCase();
					},
					type: 'string',
					label: 'guests'
				}
			]);
			
			var joinedData = new google.visualization.data.join(
				view, view2,
				'inner',
				[[1,0]],
				[0],
				[]
			);
			
			var view3 = new google.visualization.DataView(joinedData);
			view3.setColumns([
				{
				calc: function(dt, r) {
					var today       = new Date().getTime();
					var days        = 86400000; //# of milliseconds in a day
					var oneMonthAgo = today - (30*days);
					var cellValue   = dt.getValue(r, 1).getTime();
					if ((cellValue <= today) && (cellValue >= oneMonthAgo)) {
						return dt.getValue(r, 0);
					}
					return null;
				},
				type : 'string',
				label: 'This Month'
				},
				{
				calc: function(dt, r) {
					var today        = new Date().getTime();
					var days         = 86400000; //# of milliseconds in a day
					var oneMonthAgo  = today - (30*days);
					var twoMonthsAgo = oneMonthAgo - (60*days);
					var cellValue    = dt.getValue(r, 1).getTime();
					if ((cellValue < oneMonthAgo) && (cellValue >= twoMonthsAgo)) {
						return dt.getValue(r, 0);
					}
					return null;
				},
				type:  'string',
				label: 'Last Month'
				},
				{
				calc: function(dt, r) {
					var thisYear = new Date().getYear();
					var cellYear = dt.getValue(r, 1).getYear();
					if (cellYear === thisYear) {
						return dt.getValue(r, 0);
					}
					return null;
				},
				type:  'string',
				label: 'This Year'
				},
				{
				calc: function(dt, r) {
					return dt.getValue(r, 0);
				},
				type:  'string',
				label: 'All Time'
				}
			]);
			
			col1 = view3.getDistinctValues(0);
			col2 = view3.getDistinctValues(1);
			col3 = view3.getDistinctValues(2);
			col4 = view3.getDistinctValues(3);

			//Remove null values from array of attendees
			var removeNullValue = function (value) {
				return value != null;
			}
	
			//Remove the null values in each array, so each one contains true # of attendees
			col1 = col1.filter(removeNullValue);
			col2 = col2.filter(removeNullValue);
			col3 = col3.filter(removeNullValue);
			col4 = col4.filter(removeNullValue);
			
			//Build DataTable to pass into chart.draw()
			var finalData = new google.visualization.DataTable();
			finalData.addColumn('string', 'Time Frame');
			finalData.addColumn('number', 'This Month');
			finalData.addColumn('number', 'Last Month');
			finalData.addColumn('number', 'Year to Date');
			finalData.addColumn('number', 'All Time');
			finalData.addRow(['Attendance', col1.length, col2.length, col3.length, col4.length]);
			
			var tableDiv = document.getElementById("table_div6");
		    var chart = new google.visualization.Table(tableDiv);
		    chart.draw(finalData);
		});
	});
}