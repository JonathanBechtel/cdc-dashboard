// Set callbacks to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(neighborhoodChart);
google.charts.setOnLoadCallback(incomeChart);
google.charts.setOnLoadCallback(notAttendingChart);
google.charts.setOnLoadCallback(languageSpokenChart);
google.charts.setOnLoadCallback(englishProficiencyChart);

function neighborhoodChart() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=929929990');
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

		var neighborhoodChart = new google.visualization.ChartWrapper({
		  chartType: 'PieChart',
		  containerId: 'neighborhood_div',
		  dataTable: dataGroup,
		  options: {
			height: 340,
		  }
		});
		neighborhoodChart.draw();
	  });
}

function incomeChart() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=929929990');
		query.setQuery('SELECT AZ');
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

		var householdIncomeChart = new google.visualization.ChartWrapper({
		  chartType: 'PieChart',
		  containerId: 'income_div',
		  dataTable: dataGroup,
		  options: {
			height: 340,
		  }
		});
		householdIncomeChart.draw();
	  });
}

function notAttendingChart() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=929929990');
		query.setQuery('SELECT AY');
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

		var attendingChart = new google.visualization.ChartWrapper({
		  chartType: 'Bar',
		  containerId: 'not_attending_div',
		  dataTable: dataGroup,
		  options: {
			height: 340,
		  }
		});
		attendingChart.draw();
	  });
}

function languageSpokenChart() {
		var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=929929990');
		query.setQuery('SELECT AW');
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

		var languageChart = new google.visualization.ChartWrapper({
		  chartType: 'PieChart',
		  containerId: 'language_spoken_div',
		  dataTable: dataGroup,
		  options: {
			height: 340,
		  }
		});
		languageChart.draw();
	  });
}

function englishProficiencyChart() {
			var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=929929990');
		query.setQuery('SELECT AX');
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

		var proficiencyChart = new google.visualization.ChartWrapper({
		  chartType: 'Bar',
		  containerId: 'english_proficiency_div',
		  dataTable: dataGroup,
		  options: {
			height: 340,
		  }
		});
		proficiencyChart.draw();
	  });
}