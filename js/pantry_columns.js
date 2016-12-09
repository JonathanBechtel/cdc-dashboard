/*This file creates the javascript to create the tables with the summed values
to the right of the charts w/ filters at the top of the page on pantry.html*/

//initialize the callback to send the initial query to populate the tables
google.charts.setOnLoadCallback(drawTables);

function drawTables() {
		
		//totalsServedTable's are next to 'How Many People Are We Serving?' chart
		var totalServedTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div1',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(C) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(C) "This Month"'
		});
		totalServedTable1.draw();
		
		var totalServedTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div2',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(C) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 61 LABEL SUM(C) "Last Month"'
		});
		totalServedTable2.draw();
		
		var totalServedTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div3',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(C) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(C) "Year to Date"'
		});
		totalServedTable3.draw();
		
		var totalServedTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div4',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(C) LABEL SUM(C) "All Time"'
		});
		totalServedTable4.draw();		
		
		//FoodBags tables are right next to the 'How Are We Helping Them?' chart
		var foodBagsTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div5',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(B) "This Month"'
		});
		foodBagsTable1.draw();
		
		var foodBagsTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div6',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(B) "Last Month"'
		});
		foodBagsTable2.draw();
		
		var foodBagsTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div7',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(B) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(B) "Year to Date"'
		});
		foodBagsTable3.draw();
		
		var foodBagsTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div8',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(B) LABEL SUM(B) "All Time"'
		});
		foodBagsTable4.draw();
		
		//MoneyTables are located next to the 'How Many Resources Are We Collecting?' chart
		var moneyTable1 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div9',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(D) WHERE DATEDIFF(now(), toDate(A)) < 31 LABEL SUM(D) "This Month"'
		});
		moneyTable1.draw();
		
		var moneyTable2 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div10',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(D) WHERE DATEDIFF(now(), toDate(A)) > 30 AND DATEDIFF(now(), toDate(A)) < 60 LABEL SUM(D) "Last Month"'
		});
		moneyTable2.draw();
		
		var moneyTable3 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div11',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(D) WHERE DATEDIFF(now(), toDate(A)) < 366 LABEL SUM(D) "Year to Date"'
		});
		moneyTable3.draw();
		
		var moneyTable4 = new google.visualization.ChartWrapper({
			'chartType'    :   'Table',
			'containerId'  :   'col_chart_div12',
			'dataSourceUrl':   'https://docs.google.com/spreadsheets/d/1lmmpJs2Bz3EfQWExB4KXq_uJWoLlq1PMCahy6w4ipcE/gviz/tq?gid=206031508',
			'query'        :   'SELECT SUM(D) LABEL SUM(D) "All Time" FORMAT SUM(D) "$##"'
		});
		moneyTable4.draw();
}


