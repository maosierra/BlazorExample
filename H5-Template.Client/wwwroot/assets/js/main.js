(function () {
	'use strict';
	var isTouchDevice = navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|Windows Phone)/);

	function preloader() {
		$('.overlay').toggleClass('show');
		$('.overlay').delay(1000).fadeOut(200);
	}

	if (!sessionStorage.getItem('notShowLoader')) {
		sessionStorage.setItem('notShowLoader', true);
		preloader();
	}

	function menu() {
		var menu = $('.main-menu');

		menu.on('click', '.item-link', function (e) {
			var $this = $(this),
				li = $this.parent();
			if (li.hasClass('has-sub')) {
				e.preventDefault();

				if (li.hasClass('active')) {
					li.removeClass('active');
				} else {
					li.addClass('active');
				}
			}
		});
	}

	$(document).ready(function () {
		if (isTouchDevice) {
			$('body').addClass('touch-device');
		}

		$('.navbar-button').on('click', function (e) {
			e.stopPropagation();
			$('.addition-navbar').removeClass('open');
			$(this).closest('.site-container').toggleClass('open-sidebar');
		});

		$('.site-sidebar').on('click', function (e) {
			e.stopPropagation();
			$('.addition-navbar').removeClass('open');
		});
		$('.addition-navbar').on('click', function (e) {
			e.stopPropagation();
			$('.site-container').removeClass('open-sidebar');
		});
		$('html').on('click', function (e) {
			$('.site-container').removeClass('open-sidebar');
			$('.addition-navbar').removeClass('open');
		});

		menu();

		$('[data-toggle="tooltip"]').tooltip();

		//Addition navbar
		var addNavClasses;

		if (document.getElementById('addition-navbar')) {
			addNavClasses = document.getElementById('addition-navbar').classList;
		}

		document.getElementById('open-navbar').addEventListener('click', function () {
			addNavClasses.toggle('open');
		});


		//Charts
		var radarChart = $('#radarChart');
		var barChart = $('#barChart');
		var lineChart = $('#lineChart');
		var doughnutChart = $('#doughnutChart');
		var pieChart = $('#pieChart');
		var polarAreaChart = $('#polarAreaChart');

		var pieChart1 = $('#pieChart1');
		var pieChart2 = $('#pieChart2');

		if (radarChart.length) {
			radarChart = new Chart(radarChart, {
				type: 'radar',
				data: {
					labels: [
						'Designing',
						'Coding',
						'Support',
						'Marketing',
						'Sales',
						'Customization',
						'Updating'
					],
					datasets: [{
							data: [65, 59, 90, 81, 56, 55, 40],
							label: 'Plugins',
							borderWidth: 1,
							pointRadius: 1,
							backgroundColor: 'rgba(93,173,224,0.2)',
							borderColor: '#5dade0',
							pointBackgroundColor: '#5dade0',
							pointBorderColor: '#0e7cc5',
							pointHoverBackgroundColor: '#fff',
							pointHoverBorderColor: '#000'
						},
						{
							data: [28, 48, 40, 19, 96, 27, 100],
							label: 'Widgets',
							borderWidth: 1,
							pointRadius: 1,
							backgroundColor: 'rgba(255,140,0,0.2)',
							borderColor: '#ff8c00',
							pointBackgroundColor: '#ff8c00',
							pointBorderColor: '#FF630B',
							pointHoverBackgroundColor: '#fff',
							pointHoverBorderColor: '#000'
						}
					]
				}
			});
		}

		if (barChart.length) {
			barChart = new Chart(barChart, {
				type: 'bar',
				options: {
					responsive: true,
					maintainAspectRatio: false,
				},
				data: {
					labels: [
						'2011',
						'2012',
						'2013',
						'2014',
						'2015',
						'2016',
						'2017'
					],
					datasets: [{
							data: [650, 590, 800, 810, 560, 550, 400],
							label: 'New Visitor',
							backgroundColor: 'rgba(93,173,224,0.8)',
							borderColor: '#5dade0'
						},
						{
							data: [280, 480, 400, 190, 860, 270, 900],
							label: 'Returning Visitor',
							backgroundColor: 'rgba(17,171,30,0.8)',
							borderColor: '#11ab1e',
						}
					]
				}
			});
		}

		if (lineChart.length) {
			lineChart = new Chart(lineChart, {
				type: 'line',
				data: {
					labels: [
						'Jan',
						'Feb',
						'Mar',
						'Apr',
						'May',
						'June',
						'July'
					],
					datasets: [{
							data: [650, 590, 800, 810, 560, 550, 400],
							label: 'Referral',
							backgroundColor: 'rgba(93,173,224,0.2)',
							borderColor: '#5dade0'
						},
						{
							data: [45, 98, 148, 45, 154, 54, 250],
							label: 'Direct',
							backgroundColor: 'rgba(224,94,94,0.2)',
							borderColor: '#e05e5e'
						},
						{
							data: [18, 48, 77, 9, 100, 27, 40],
							label: 'Other',
							backgroundColor: 'rgba(241,201,8,0.2)',
							borderColor: '#f1c908'
						}
					]
				}
			});
		}

		if (doughnutChart.length) {
			doughnutChart = new Chart(doughnutChart, {
				type: 'doughnut',
				options: {
					responsive: true,
					maintainAspectRatio: false,
				},
				data: {
					labels: [
						'Angular',
						'React',
						'Vue.js'
					],
					datasets: [{
						data: [250, 159, 89],
						backgroundColor: ['#de3641', '#61dafb', '#42b884']
					}]
				}
			});
		}

		if (pieChart.length) {
			pieChart = new Chart(pieChart, {
				type: 'pie',
				aspectRatio: 1,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false
					}
				},
				data: {
					labels: [
						'Desktops',
						'Mobile devices',
						'Tablets'
					],
					datasets: [{
						data: [566, 112, 60],
						backgroundColor: ['#1e9dc5', '#61dafb', '#9db6ce']
					}]
				}
			});
		}
		if (pieChart1.length) {
			pieChart1 = new Chart(pieChart1, {
				type: 'doughnut',
				aspectRatio: 1,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false
					}
				},
				data: {
					labels: [
						'Desktops',
						'Mobile devices',
						'Tablets'
					],
					datasets: [{
						data: [350, 112, 180],
						backgroundColor: ['#f47142', '#7c7370', '#9db6ce']
					}]
				}
			});
		}
		if (pieChart2.length) {
			pieChart2 = new Chart(pieChart2, {
				type: 'polarArea',
				aspectRatio: 1,
				options: {
					responsive: true,
					maintainAspectRatio: false,
					legend: {
						display: false
					},
					scale: {
						display: false
					}
				},
				data: {
					labels: [
						'Desktops',
						'Mobile devices',
						'Tablets'
					],
					datasets: [{
						data: [290, 320, 360],
						backgroundColor: ['#1e9dc5', '#332a2a', '#ad1111']
					}]
				}
			});
		}

		if (polarAreaChart.length) {
			polarAreaChart = new Chart(polarAreaChart, {
				type: 'polarArea',
				data: {
					labels: [
						'Chrome',
						'Mozilla',
						'Safari'
					],
					datasets: [{
						data: [566, 355, 417],
						backgroundColor: ['#4a8af4', '#d45724', '#05bae8']
					}]
				}
			});
		}
	});



	$(window).on('load', function () {
		$.ready.then(function () {
			$('body').addClass('loaded');
		});
	});

	//Window Resize
	(function () {
		var delay = (function () {
			var timer = 0;
			return function (callback, ms) {
				clearTimeout(timer);
				timer = setTimeout(callback, ms);
			};
		})();

		//Functions
		function resizeFunctions() {

		}

		if (isTouchDevice) {
			$(window).bind('orientationchange', function () {
				delay(function () {
					resizeFunctions();
				}, 50);
			});
		} else {
			$(window).on('resize', function () {
				delay(function () {
					resizeFunctions();
				}, 50);
			});
		}
	}());
})();