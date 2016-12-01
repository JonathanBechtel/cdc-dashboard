/*
This script is made to populate the tables at the bottom of the page on storytime html.  The tables that measure
unique and total attendance along with demographic information for guests and volunteers is what's created on 
this page.
*/

google.charts.setOnLoadCallback(drawAttendanceTable);

//Function for Total Attendance Table
function drawAttendanceTable() {
  var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=41319289');
  query.setQuery('select A, B WHERE C = "Storytime" AND D = "Guest"');
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
   
   var tableDiv = document.getElementById("attendance_table_div");
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
	query.setQuery('select A, B WHERE C = "Storytime" AND D = "Guest"');
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
				if ((cellValue <= today) && (cellValue >= oneMonthAgo)) {
					return dt.getValue(r, 1);
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
				if ((cellValue < oneMonthAgo) && (cellValue >= twoMonthsAgo)) {
					return dt.getValue(r, 1);
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
				if (cellYear === thisYear) {
					return dt.getValue(r, 1);
				}
				return null;
			},
			type:  'string',
			label: 'This Year'
		},
		{
			calc: function(dt, r) {
				return dt.getValue(r, 1);
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
	
	var removeNullValue = function (value) {
		return value != null;
	}
	
	//remove the null values in each array, so each one contains true # of attendees
	col1 = col1.filter(removeNullValue);
	col2 = col2.filter(removeNullValue);
	col3 = col3.filter(removeNullValue);
	col4 = col4.filter(removeNullValue);
	
	var finalData = new google.visualization.DataTable();
	finalData.addColumn('number', 'This Month');
	finalData.addColumn('number', 'Last Month');
	finalData.addColumn('number', 'Year to Date');
	finalData.addColumn('number', 'All Time');
	finalData.addRow([col1.length, col2.length, col3.length, col4.length]);
	
	
		
		var tableDiv = document.getElementById("unique_attendance_table_div");
		var chart = new google.visualization.Table(tableDiv);
		chart.draw(finalData);
	})
}