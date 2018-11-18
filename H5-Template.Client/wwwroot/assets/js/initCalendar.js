$(document).ready(function () {
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth() + 1;
	
	$('#calendar').fullCalendar({
		header: {
			left: 'prev,next',
			center: 'title',
			right: 'month,agendaWeek,agendaDay'
		},
		dropable: true,
		events: [
			{
				title: 'Some Event',
				start: `${year}-${month}-03`
			},
			{
				title: 'Dinner',
				start: `${year}-${month}-04`
			},
			{
				title: 'Conference',
				start: `${year}-${month}-05`
			},
			{
				title: 'Some Long Event',
				start: `${year}-${month}-15`,
				end: `${year}-${month}-19`
			},
			{
				title: 'Visit Meeting',
				start: `${year}-${month}-15`
			},
			{
				title: 'Report Project',
				start: `${year}-${month}-15`
			},
			{
				title: 'Event with Time',
				start: `${year}-${month}-09T12:30:00`,
				allDay: false // will make the time show
			}
		]
	});

});