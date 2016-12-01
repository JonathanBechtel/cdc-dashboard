/*This file creates the javascript to create the tables with the summed values
underneath each of the charts in storytime.html*/

//initialize the callback to send the initial query to populate the tables
google.charts.setOnLoadCallback(drawTables);

function drawTables() {
		
		//familiesTable's are next to 'families helped' chart
		var familiesTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div4',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(B) LABEL SUM(B) "All Time"'
		});
		familiesTable1.draw();
		
		var familiesTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div5',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(B) "This Month"'
		});
		familiesTable2.draw();
		
		var familiesTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div6',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 61 LABEL SUM(B) "Last Month"'
		});
		familiesTable3.draw();
		
		var familiesTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div7',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(B) "Year to Date"'
		});
		familiesTable4.draw();
		
		//Childrens tables are right next to the 'Children Helped' chart
		var childrenTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div8',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(C) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(C) "This Month"'
		});
		childrenTable1.draw();
		
		var childrenTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div9',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(C) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(C) "Last Month"'
		});
		childrenTable2.draw();
		
		var childrenTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div10',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(C) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(C) "Year to Date"'
		});
		childrenTable3.draw();
		
		var childrenTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div11',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(C) LABEL SUM(C) "All Time"'
		});
		childrenTable4.draw();
		
		//BooksTable's are located next to the books donated chart
		var bookTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div12',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(F) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(F) "This Month"'
		});
		bookTable1.draw();
		
		var bookTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div13',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(F) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(F) "Last Month"'
		});
		bookTable2.draw();
		
		var bookTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div14',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(F) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(F) "Year to Date"'
		});
		bookTable3.draw();
		
		var bookTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'chart_div15',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=1104676809',
			'query'        :   'SELECT SUM(F) LABEL SUM(F) "All Time"'
		});
		bookTable4.draw();
}


