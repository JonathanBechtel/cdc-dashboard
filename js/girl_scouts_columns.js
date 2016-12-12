/*This file creates the javascript to create the tables with the summed values
to the right of the charts w/ filters at the top of the page on girl_scouts.html*/

//initialize the callback to send the initial query to populate the tables
google.charts.setOnLoadCallback(drawTables);

function drawTables() {
		
		//next 4 columns appear next to the 1st chart at top of page
		var colTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div1',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(B) "This Month"'
		});
		colTable1.draw();
		
		var colTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div2',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 61 LABEL SUM(B) "Last Month"'
		});
		colTable2.draw();
		
		var colTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div3',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(B) "Year to Date"'
		});
		colTable3.draw();
		
		var colTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div4',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(B) LABEL SUM(B) "All Time"'
		});
		colTable4.draw();		
		
		//tables 5-8 are next to 2nd chart at top of page
		var colTable5 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div5',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(E) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(E) "This Month"'
		});
		colTable5.draw();
		
		var colTable6 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div6',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(E) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(E) "Last Month"'
		});
		colTable6.draw();
		
		var colTable7 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div7',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(E) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(E) "Year to Date"'
		});
		colTable7.draw();
		
		var colTable8 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div8',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(E) LABEL SUM(E) "All Time"'
		});
		colTable8.draw();
		
		//colTable 9-12 are located next to the 3rd chart at top of page
		var colTable9 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div9',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(D) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(D) "This Month"'
		});
		colTable9.draw();
		
		var colTable10 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div10',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(D) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(D) "Last Month"'
		});
		colTable10.draw();
		
		var colTable11 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div11',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(D) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(D) "Year to Date"'
		});
		colTable11.draw();
		
		var colTable12 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div12',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=870739820',
			'query'        :   'SELECT SUM(D) LABEL SUM(D) "All Time"'
		});
		colTable12.draw();
}


