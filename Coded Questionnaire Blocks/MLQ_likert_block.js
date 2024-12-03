var prompt = {
	type: 'html-button-response',
	stimulus:
		'<p style="text-align:center; font-size:24px"> There are some sentences below.</p>' +
		'<p style="text-align:center; font-size:24px"> Indicate how often each of the statements below is descriptive of you.</p>' +
		'<p style="text-align:center; font-size:24px"> There are no right or wrong answers. </p>',
		choices: ['Continue']
};

var scale = [
	"Absolutely Untrue",
	"Mostly Untrue",
	"Somewhat Untrue",
	"Can't Say True or False",
	"Somewhat True",
    "Mostly True",
    "Absolutely True"
];

var questions = [
	{prompt:'<p style="text-align:center; font-size:24px">I understand my lifes meaining.</p>',
	name: 'MLQ1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am looking for something that makes my life feel meaningful.</p>',
	name: 'MLQ2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am always looking to find my lifes purpose.</p>',
	name: 'MLQ3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My life has a clear sense of purpose. </p>',
	name: 'MLQ4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have a good sense of what makes my life meaningful.</p>',
	name: 'MLQ5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have discovered a satisfying life purpose.</p>',
	name: 'MLQ6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am always searching for something that makes my life feel significant.</p>',
	name: 'MLQ7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am seeking a purpose or mission for my life.</p>',
	name: 'MLQ8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My life has no clear purpose.</p>',
	name: 'MLQ9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am searching for meaning in my life.</p>',
	name: 'MLQ10',
	labels: scale},

	];

questions.forEach(function(question) {
    question.required = true;
});

var MLQ = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var MLQ_block = {
	timeline: [prompt, MLQ],
	randomize_order: false
};
