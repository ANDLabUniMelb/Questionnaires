var prompt = {
	type: 'html-button-response',
	stimulus: '<p style="text-align:center; font-size:24px">A number of statements which people have used to describe themselves are given below.</p>' +
	'<p style="text-align:center; font-size:24px">Read each statement and choose an answer to indicate how you <b> generally </b> feel.</p>' +
	'<p style="text-align:center; font-size:24px">There are no right or wrong answers.</p>' + 
	'<p style="text-align:center; font-size:24px">Do not spend too much time on any one statement, but give the answer which seems to describe how you generally feel.</p>',
	choices: ['Continue'] 
};

var scale = [
	"Almost never",
	"Sometimes",
	"Often",
	"Almost always"
];

var questions = [
		{prompt: '<p style="text-align:center; font-size:24px"><b>Generally...</b>'+
		'<p style="text-align:center; font-size:24px"><br>I feel pleasant.',
		name: 'STAIY2-1', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I feel nervous and restless.',
		name: 'STAIY2-2', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I feel satisfied with myself.',
		name: 'STAIY2-3', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I wish I could be as happy as others seem to be.',
		name: 'STAIY2-4', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I feel like a failure.',
		name: 'STAIY2-5', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I feel rested.',
		name: 'STAIY2-6', 
		labels: scale},

		{prompt: '<p style="text-align:center; font-size:24px">I am "calm, cool, and collected".',
		name: 'STAIY2-7', 
		labels: scale},

		{prompt: '<p style="text-align:center; font-size:24px">I feel that difficulties are piling up so that I cannot overcome them.',
		name: 'STAIY2-8', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I worry too much over something that really doesn\'t matter.',
		name: 'STAIY2-9', 
		labels: scale},

		{prompt: '<p style="text-align:center; font-size:24px">I am happy.',
		name: 'STAIY2-10', 
		labels: scale},

		{prompt: '<p style="text-align:center; font-size:24px">I have disturbing thoughts.',
		name: 'STAIY2-11', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I lack self-confidence.',
		name: 'STAIY2-12', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I feel secure.',
		name: 'STAIY2-13', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I make decisions easily.',
		name: 'STAIY2-14', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I feel inadequate.',
		name: 'STAIY2-15', 
		labels: scale},

		{prompt: '<p style="text-align:center; font-size:24px">I am content.',
		name: 'STAIY2-16', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">Some unimportant thought runs through my mind and bothers me.',
		name: 'STAIY2-17', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I take disappointments so keenly that I can\'t put them out of my mind.',
		name: 'STAIY2-18', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I am a steady person.',
		name: 'STAIY2-19', 
		labels: scale},
	
		{prompt: '<p style="text-align:center; font-size:24px">I get in a state of tension or turmoil as I think over my recent concerns and interests.',
		name: 'STAIY2-20', 
		labels: scale}
		
];

questions.forEach(function(question) {
    question.required = true;
});

var STAIY2 = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order:false
};

var STAIY2_block = {
	timeline: [prompt, STAIY2],
	randomize_order: false,
};

