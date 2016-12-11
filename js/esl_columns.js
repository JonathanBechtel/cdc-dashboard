/*This file creates the javascript to create the tables with the summed values
to the right of the charts w/ filters at the top of the page on esl.html*/

//initialize the callback to send the initial query to populate the tables
google.charts.setOnLoadCallback(drawTables);

function drawTables() {
		
		//next 4 columns appear next to the 1st chart at top of page
		var colTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div1',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(B) "This Month"'
		});
		colTable1.draw();
		
		var colTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div2',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 61 LABEL SUM(B) "Last Month"'
		});
		colTable2.draw();
		
		var colTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div3',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT SUM(B)WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(B) "Year to Date"'
		});
		colTable3.draw();
		
		var colTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div4',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT SUM(B) LABEL SUM(B) "All Time"'
		});
		colTable4.draw();		
		
		//colTable 9-12 are located next to the 3rd chart at top of page
		var colTable5 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div5',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT COUNT(C) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL COUNT(C) "This Month"'
		});
		colTable5.draw();
		
		var colTable6 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div6',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT COUNT(C) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL COUNT(C) "Last Month"'
		});
		colTable6.draw();
		
		var colTable7 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div7',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT COUNT(C) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL COUNT(C) "Year to Date"'
		});
		colTable7.draw();
		
		var colTable8 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div8',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=951822742',
			'query'        :   'SELECT COUNT(C) LABEL COUNT(C) "All Time"'
		});
		colTable8.draw();
}


