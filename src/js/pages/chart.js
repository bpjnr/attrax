(function($) { 
    "use strict";

    $(document).ready(function() {
    	if ($("#line-chart").length) {
			var data = {
				labels: ["02.00", "02.30", "03.00", "03.30", "04.00", "04.30", "02.00", "02.30", "03.00", "02.00", "02.30"],
				datasets: [{
					label: "Visitors Graph",
					borderColor: "#fbd5007a",
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: "transparent",
					pointBackgroundColor: "#fbd500",
					data: [1, 5, 10, 4, 20, 5, 10, 2, 12, 5, 1]
				},
				{
					label: "Visitors Graph",
					borderColor: "#48527270",
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: "transparent",
					pointBackgroundColor: "#5b6b98",
					data: [5, 32, 5, 42, 50, 59, 5, 32, 5, 40, 5]
				}]
			};

			var lineChart = $("#line-chart")
			var myLineChart = new Chart(lineChart, {
				type: 'line',
				data: data,
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								fontSize: '11',
								fontColor: '#969da5'
							},
							gridLines: {
								color: '#f6f8fd',
								zeroLineColor: '#f6f8fd'
							}
						}],
						yAxes: [{
							gridLines: {
								color: '#f6f8fd',
								zeroLineColor: '#f6f8fd'
							},
							ticks: {
								fontSize: '11',
								fontColor: '#969da5'
							}
						}]
					}
				}
			})
		}

		if ($("#radar-chart").length) {
			var radarChart = $("#radar-chart")
			var myRadarChart = new Chart(radarChart, {
				type: 'radar',
				data: data,
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								fontSize: '11',
								fontColor: '#969da5'
							},
							gridLines: {
								color: '#f6f8fd',
								zeroLineColor: '#f6f8fd'
							}
						}],
						yAxes: [{
							gridLines: {
								color: '#f6f8fd',
								zeroLineColor: '#f6f8fd'
							},
							ticks: {
								fontSize: '11',
								fontColor: '#969da5'
							}
						}]
					}
				}
			});
		}

		if ($("#bar-chart").length) {
			var barChart = $("#bar-chart")
			var data = {
				labels: ["02.00", "02.30", "03.00", "03.30", "04.00", "04.30", "02.00", "02.30", "03.00", "02.00", "02.30"],
				datasets: [{
					label: "Visitors Graph",
					borderColor: "#fbd5007a",
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: "#fbd5007a",
					pointBackgroundColor: "#fbd500",
					data: [1, 5, 10, 4, 20, 5, 10, 2, 12, 5, 1]
				},
				{
					label: "Visitors Graph",
					borderColor: "#48527270",
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: "#48527270",
					pointBackgroundColor: "#5b6b98",
					data: [5, 32, 5, 42, 50, 59, 5, 32, 5, 40, 5]
				}]
			};
			var myBarChart = new Chart(barChart, {
				type: 'bar',
				data: data,
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								fontSize: '11',
								fontColor: '#969da5'
							},
							gridLines: {
								color: '#f6f8fd',
								zeroLineColor: '#f6f8fd'
							}
						}],
						yAxes: [{
							gridLines: {
								color: '#f6f8fd',
								zeroLineColor: '#f6f8fd'
							},
							ticks: {
								fontSize: '11',
								fontColor: '#969da5'
							}
						}]
					}
				}
			});
		}

		if ($("#doughnut-chart").length) {
			var doughnutChart = $("#doughnut-chart")
			var doughnutChartData = {
				labels: ["Yellow", "Dark"],
				datasets: [{
					data: [145, 120],
					backgroundColor: ["#fbd500", "#5b6b98"],
					hoverBackgroundColor: ["#fbd500", "#5b6b98"],
					borderWidth: 8,
					borderColor: "#fff"
				}]
			};
			var myDoughnutChart = new Chart(doughnutChart, {
				type: 'doughnut',
				data: doughnutChartData,
				options: {
					animation: {
						animateScale: true
					},
					cutoutPercentage: 85
				}
			});
		}

		if ($("#bubble-chart").length) {
			var bubbleChart = $("#bubble-chart")
			var bubbleChartData = {
				datasets: [{
					label: "Yellow",
					borderColor: "#fbd5007a",
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: "#fbd5007a",
					data: [{
						x: 21269017,
						y: 5.245,
						r: 15
					}]
				},
				{
					label: "Dark",
					borderColor: "#5b6b98",
					pointRadius: 2,
					borderWidth: 2,
					backgroundColor: "#5b6b98",
					data: [{
						x: 258702,
						y: 7.526,
						r: 10
					}]
				}]
			};
			var myBubbleChart = new Chart(bubbleChart, {
				type: 'bubble',
				data: bubbleChartData
			});
		}
	})
})(jQuery);