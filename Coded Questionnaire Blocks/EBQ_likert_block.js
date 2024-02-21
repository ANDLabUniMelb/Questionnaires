var prompt = {
	type: 'html-button-response',
	stimulus: '<p style="text-align:center; font-size:24px">This questionnaire asks about your beliefs about emotions <b>in general</b>. </p>'+
	'<p style="text-align:center; font-size:24px">Some questions ask about negative emotions (e.g., sadness, fear, and anger). </p>'+
	'<p style="text-align:center; font-size:24px">Other questions ask about positive emotions (e.g., happiness, joy, and amusement). </p>'+
	'<p style="text-align:center; font-size:24px">For each statement, please rate how much you agree or disagree that the statement is true <b>in general</b>. </p>'+
	'<p style="text-align:center; font-size:24px">Circle one answer for each statement.</p>',
	choices: ['Continue']
};

var scale = [
	"Strongly disagree",
	"Disagree",
	"Slightly disagree",
	"Neutral",
	"Slightly agree",
	"Agree",
	"Strongly agree"
];

var questions = [
	{prompt: '<p style="text-align:center; font-size:24px">Once people are experiencing negative emotions, there is nothing they can do about modifying them.</p>',
	name: 'EBQ1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">People cannot control their positive emotions.</p>',
	name: 'EBQ2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">There is very little use for negative emotions.</p>',
	name: 'EBQ3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Positive emotions are very unhelpful to people.</p>',
	name: 'EBQ4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">It does not matter how hard people try, they cannot change their negative emotions.</p>',
	name: 'EBQ5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">People cannot learn techniques to effectively control their positive emotions.</p>',
	name: 'EBQ6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">People do not need their negative emotions.</p>',
	name: 'EBQ7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">There is very little use for positive emotions.</p>',
	name: 'EBQ8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">People cannot control their negative emotions.</p>',
	name: 'EBQ9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">It does not matter how hard people try, they cannot change their positive emotions.</p>',
	name: 'EBQ10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Negative emotions are harmful.</p>',
	name: 'EBQ11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">People do not need their positive emotions.</p>',
	name: 'EBQ12',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">People cannot learn techniques to effectively control their negative emotions.</p>',
	name: 'EBQ13',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Once people are experiencing positive emotions, there is nothing they can do about modifying them.</p>',
	name: 'EBQ14',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">The presence of negative emotions is a bad thing for people.</p>',
	name: 'EBQ15',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Positive emotions are harmful.</p>',
	name: 'EBQ16',
	labels: scale}

];

questions.forEach(function(question) {
    question.required = true;
});

var EBQ = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var EBQ_block = {
	timeline: [prompt, EBQ],
	randomize_order: false
};
