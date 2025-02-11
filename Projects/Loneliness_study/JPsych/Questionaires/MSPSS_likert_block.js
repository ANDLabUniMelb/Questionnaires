var prompt = {
	type: 'html-button-response',
	stimulus:
		'<p style="text-align:center; font-size:24px"> There are some sentences below.</p>' +
		'<p style="text-align:center; font-size:24px"> Indicate how often each of the statements below is descriptive of you.</p>' +
		'<p style="text-align:center; font-size:24px"> There are no right or wrong answers. </p>',
		choices: ['Continue']
};

var scale = [
	"Very strongly disagree",
	"Strongly disagree",
	"Mildly disagree",
	"Neutral",
	"Mildly agree",
    "Strongly agree",
    "Very strongly agree"
];

var questions = [
	{prompt:'<p style="text-align:center; font-size:24px">There is a special person around me when I am in need.</p>',
	name: 'MSPSS1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">There is a speical person with whom I can share joys and sorrows.</p>',
	name: 'MSPSS2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My family really tries to help me.</p>',
	name: 'MSPSS3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I get the emotional support I need from my family. </p>',
	name: 'MSPSS4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have a special person who is a real source of comfort to me.</p>',
	name: 'MSPSS5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My friends really try to help me.</p>',
	name: 'MSPSS6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I can count on my friends when things go wrong.</p>',
	name: 'MSPSS7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I can talk about my problems with family.</p>',
	name: 'MSPSS8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have friends whom I can share my joys and sorrows.</p>',
	name: 'MSPSS9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">There is a special person in my life who cares about my feelings.</p>',
	name: 'MSPSS10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My family is willing to help me make decisions.</p>',
	name: 'MSPSS11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I can talk about my problems with friends.</p>',
	name: 'MSPSS12',
	labels: scale},

	];

questions.forEach(function(question) {
    question.required = true;
});

var MSPSS = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var MSPSS_block = {
	timeline: [prompt, MSPSS],
	randomize_order: false
};
