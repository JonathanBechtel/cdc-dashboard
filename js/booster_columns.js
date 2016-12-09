/*This file creates the javascript to create the tables with the summed values
to the right of the charts w/ filters at the top of the page on booster.html*/

//initialize the callback to send the initial query to populate the tables
google.charts.setOnLoadCallback(drawTables);

function drawTables() {
		
		//these columns/tables appear are next to 'How Many People Are We Serving?' chart
		var colTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div1',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(B) "This Month"'
		});
		colTable1.draw();
		
		var colTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div2',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 61 LABEL SUM(B) "Last Month"'
		});
		colTable2.draw();
		
		var colTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div3',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(B) "Year to Date"'
		});
		colTable3.draw();
		
		var colTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div4',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(B) LABEL SUM(B) "All Time"'
		});
		colTable4.draw();		
		
		//these columns/tables are right next to the 'How Are We Helping Them?' chart
		var colTable5 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div5',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(C) + SUM(D) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(C) + SUM(D) "This Month"'
		});
		colTable5.draw();
		
		var colTable6 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div6',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(C) + SUM(D) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(C) + SUM(D) "Last Month"'
		});
		colTable6.draw();
		
		var colTable7 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div7',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(C) + SUM(D) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(C) + SUM(D) "Year to Date"'
		});
		colTable7.draw();
		
		var colTable8 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div8',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(C) + SUM(D) LABEL SUM(C) + SUM(D) "All Time"'
		});
		colTable8.draw();
		
		//colTable 9-12 are located next to the 'How Much Time Are We Spending With Them?' chart
		var colTable9 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div9',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(F) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(F) "This Month"'
		});
		colTable9.draw();
		
		var colTable10 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div10',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(F) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(F) "Last Month"'
		});
		colTable10.draw();
		
		var colTable11 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div11',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(F) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(F) "Year to Date"'
		});
		colTable11.draw();
		
		var colTable12 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div12',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=2137020956',
			'query'        :   'SELECT SUM(F) LABEL SUM(F) "All Time"'
		});
		colTable12.draw();
}


