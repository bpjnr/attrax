(function($) { 
    "use strict";

    $(document).ready(function() {
    	if ($("#dashboard-line-chart-1").length) {
			var lineData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [
				{
					label: "Visitors Graph",
					borderColor: "#fde831",
					pointRadius: 4,
					borderWidth: 3,
					pointBorderColor: "#ffec45",
					pointBorderWidth: 1,
					backgroundColor: "#fdeb5199",
					pointBackgroundColor: "#fff",
					data: [4, 6, 9, 14, 14, 16, 19, 23, 22, 25, 34, 38]
				}]
			};

			var dashboardLineChart1 = new Chart($("#dashboard-line-chart-1"), {
				type: 'line',
				data: lineData,
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							ticks: {
								fontSize: '0',
								fontColor: 'transparent'
							},
							gridLines: {
								color: 'transparent',
								zeroLineColor: 'transparent'
							}
						}],
						yAxes: [{
							gridLines: {
								color: 'transparent',
								zeroLineColor: 'transparent'
							},
							ticks: {
								fontSize: '0',
								fontColor: 'transparent'
							}
						}]
					}
				}
			})
		}

		if ($("#dashboard-bar-chart-1").length) {
			var data = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Oct", "Nov", "Dec"],
				datasets: [{
					label: "Visitors Graph",
					borderWidth: 0,
					backgroundColor: "#33468e",
					data: [3, 24, 17, 17, 31, 21, 44, 2, 25, 21, 27, 6, 21, 27, 6]
				}]
			};
			var dashboardBarChart1 = new Chart($("#dashboard-bar-chart-1"), {
				type: 'bar',
				data: data,
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							barThickness: 4,
							ticks: {
								fontSize: '0',
								fontColor: 'transparent'
							},
							gridLines: {
								color: 'transparent',
								zeroLineColor: 'transparent'
							}
						}],
						yAxes: [{
							gridLines: {
								color: 'transparent',
								zeroLineColor: 'transparent'
							},
							ticks: {
								fontSize: '0',
								fontColor: 'transparent'
							}
						}]
					}
				}
			});
		}

		if ($("#dashboard-bar-chart-2").length) {
			var data = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Oct", "Nov", "Dec"],
				datasets: [{
					label: "Visitors Graph",
					borderWidth: 0,
					backgroundColor: "#33468e",
					data: [3, 24, 17, 17, 31, 21, 44, 2, 25, 21, 27, 6, 21, 27, 6]
				}]
			};
			var dashboardBarChart2 = new Chart($("#dashboard-bar-chart-2"), {
				type: 'bar',
				data: data,
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							barThickness: 4,
							ticks: {
								fontSize: '0',
								fontColor: 'transparent'
							},
							gridLines: {
								color: 'transparent',
								zeroLineColor: 'transparent'
							}
						}],
						yAxes: [{
							gridLines: {
								color: 'transparent',
								zeroLineColor: 'transparent'
							},
							ticks: {
								fontSize: '0',
								fontColor: 'transparent'
							}
						}]
					}
				}
			});
		}

		var dashboardLineChart2
		if ($("#dashboard-line-chart-2").length) {
			$(window).resize(function() {
				initDashboardLineChart2()
			})

			initDashboardLineChart2()
		}

		function initDashboardLineChart2() {
			if (dashboardLineChart2) {
				dashboardLineChart2.destroy()
			}

			if ($(window).outerWidth() >= 1200) {
				$('#dashboard-line-chart-2').attr('height', 145)
			}

			if ($(window).outerWidth() >= 992 && $(window).outerWidth() < 1200) {
				$('#dashboard-line-chart-2').attr('height', 212)
			}

			if ($(window).outerWidth() >= 768 && $(window).outerWidth() < 992) {
				$('#dashboard-line-chart-2').attr('height', 228)
			}

			if ($(window).outerWidth() < 768) {
				$('#dashboard-line-chart-2').attr('height', 180)
			}

			var lineData = {
				labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
				datasets: [
				{
					label: "Visitors Graph",
					borderColor: "#2b52ab",
					pointRadius: 4,
					borderWidth: 2,
					pointBorderColor: "#2b52ab",
					pointBorderWidth: 1,
					backgroundColor: "transparent",
					pointBackgroundColor: "#fff",
					data: [3, 24, 17, 17, 31, 21, 44, 2, 25, 21, 27, 6]
				},
				{
					label: "Visitors Graph",
					borderColor: "#cccccc",
					pointRadius: 0,
					borderWidth: 2,
					borderDash: [8, 4],
					backgroundColor: "transparent",
					data: [1, 22, 10, 27, 11, 40, 24, 18, 15, 32, 18, 5]
				}]
			};

			dashboardLineChart2 = new Chart($("#dashboard-line-chart-2"), {
				type: 'line',
				data: lineData,
				options: {
					legend: {
						display: false
					},
					scales: {
						xAxes: [{
							gridLines: {
								drawBorder: false,
								lineWidth: 0.2,
								borderDash: [8, 4],
								color: '#9c9c9c',
								zeroLineColor: 'transparent'
							},
							ticks: {
								fontSize: '11',
								fontColor: '#9c9c9c'
							}
						}],
						yAxes: [{
							gridLines: {
								drawBorder: false,
								lineWidth: 0.2,
								borderDash: [8, 4],
								color: '#9c9c9c',
								zeroLineColor: 'transparent'
							},
							ticks: {
								fontSize: '11',
								fontColor: '#9c9c9c'
							}
						}]
					}
				}
			})
		}

		if ($("#dashboard-donut-chart").length) {
			var data = {
				labels: ["Yellow", "Dark", "Yellow", "Dark"],
				datasets: [{
					data: [145, 120, 220, 167],
					backgroundColor: ["#3ddcde", "#46c497", "#da3341", "#1d89cf"],
					hoverBackgroundColor: ["#3ddcde", "#46c497", "#da3341", "#1d89cf"],
					borderWidth: 7,
					borderColor: "#fafbfd"
				}]
			}

			new Chart($("#dashboard-donut-chart"), {
				type: 'doughnut',
				data: data,
				options: {
					legend: {
						display: false
					},
					animation: {
						animateScale: true
					},
					cutoutPercentage: 90
				}
			})
		}
	})
})(jQuery);