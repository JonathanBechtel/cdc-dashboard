// Set a callback to run when the Google Visualization API is loaded.
	google.charts.setOnLoadCallback(neighborhoodChart);
	google.charts.setOnLoadCallback(attendanceChart);
	google.charts.setOnLoadCallback(transitChart);
	google.charts.setOnLoadCallback(timeChart);
	  
	// Function to initiate neighborhood chart
	function neighborhoodChart() {
		
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=942634171');
		query.setQuery('SELECT C');
		query.send(function (response) {
			
		if (response.isError()) {
		  alert('Error: ' + response.getMessage() + ' - ' + response.getDetailedMessage());
		  return;
		}

		var dataGroup = google.visualization.data.group(
		  response.getDataTable(),
		  [0],
		  [{
			aggregation: google.visualization.data.count,
			column: 0,
			label: response.getDataTable().getColumnLabel(0),
			type: 'number'
		  }]
		);

		var neighborhoodChart = new google.visualization.ChartWrapper({
		  chartType: 'PieChart',
		  containerId: 'chart_div2',
		  dataTable: dataGroup,
		  options: {
			height: 240,
		  }
		});
		
		var neighborhoodFilter = new google.visualization.ControlWrapper({
			'controlType'  :  'CategoryFilter',
			'containerId'  :  'filter_div2',
			'dataSourceUrl':  'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=942634171',
			'options'      : {
				'filterColumnIndex' : 2
			}
		})
			
		neighborhoodChart.draw();
	  });
}

	function attendanceChart() {
		
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=942634171');
		query.setQuery('SELECT D');
		query.send(function (response) {
			
		if (response.isError()) {
		  alert('Error: ' + response.getMessage() + ' - ' + response.getDetailedMessage());
		  return;
		}

		var dataGroup = google.visualization.data.group(
		  response.getDataTable(),
		  [0],
		  [{
			aggregation: google.visualization.data.count,
			column: 0,
			label: response.getDataTable().getColumnLabel(0),
			type: 'number'
		  }]
		);

		var attendanceChart = new google.visualization.ChartWrapper({
		  chartType: 'PieChart',
		  containerId: 'chart_div3',
		  dataTable: dataGroup,
		  options: {
			height: 240,
		  }
		});
		attendanceChart.draw();
	  });
}

	function transitChart() {
		
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=942634171');
		query.setQuery('SELECT E');
		query.send(function (response) {
			
		if (response.isError()) {
		  alert('Error: ' + response.getMessage() + ' - ' + response.getDetailedMessage());
		  return;
		}

		var dataGroup = google.visualization.data.group(
		  response.getDataTable(),
		  [0],
		  [{
			aggregation: google.visualization.data.count,
			column: 0,
			label: response.getDataTable().getColumnLabel(0),
			type: 'number'
		  }]
		);

		var transitChart = new google.visualization.ChartWrapper({
		  chartType: 'PieChart',
		  containerId: 'chart_div4',
		  dataTable: dataGroup,
		  options: {
			height: 240,
		  }
		});
		transitChart.draw();
	  });
}

	function timeChart() {
		
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=942634171');
		query.setQuery('SELECT F');
		query.send(function (response) {
			
		if (response.isError()) {
		  alert('Error: ' + response.getMessage() + ' - ' + response.getDetailedMessage());
		  return;
		}

		var dataGroup = google.visualization.data.group(
		  response.getDataTable(),
		  [0],
		  [{
			aggregation: google.visualization.data.count,
			column: 0,
			label: response.getDataTable().getColumnLabel(0),
			type: 'number'
		  }]
		);

		var timeChart = new google.visualization.ChartWrapper({
		  chartType: 'PieChart',
		  containerId: 'chart_div5',
		  dataTable: dataGroup,
		  options: {
			height: 240,
		  }
		});
		timeChart.draw();
	  });
}