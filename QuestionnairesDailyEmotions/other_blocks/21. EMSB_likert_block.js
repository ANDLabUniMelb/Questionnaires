var prompt = {
	type: 'html-button-response',
	stimulus: '<p style="text-align:center; font-size:24px">Here are some questions to understand why you eat what you eat. </p>'+
	'<p style="text-align:center; font-size:24px">Using the raing scale provided below, please indicate how often the reasons apply to you <b> in general </b>. </p>',
	choices: ['Continue']
};

var scale = [
	"Never",
	" ",
	" ",
	" ",
	" ",
	" ",
	"Always"
];

var questions1 = [
	{prompt: '<p style="text-align:center; font-size:24px"><b>I eat what I eat...</b>'+
		'<p style="text-align:center; font-size:24px">because I have an appetite for it.</p>',
	name: 'EMSB1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it tastes good.</p>',
	name: 'EMSB2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I like it.</p>',
	name: 'EMSB3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I am accustomed to eating it.</p>',
	name: 'EMSB4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I usually eat it.</p>',
	name: 'EMSB5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I am familiar with it.</p>',
	name: 'EMSB6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I need energy.</p>',
	name: 'EMSB7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is filling.</p>',
	name: 'EMSB8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I am hungry.</p>',
	name: 'EMSB9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px"><b>I eat what I eat...</b>'+
		'<p style="text-align:center; font-size:24px">To maintain a balanced diet.</p>',
	name: 'EMSB10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is healthy.</p>',
	name: 'EMSB11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it keeps me in shape.</p>',
	name: 'EMSB12',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I enjoy it.</p>',
	name: 'EMSB13',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">in order to indulge myself.</p>',
	name: 'EMSB14',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">in order to reward myself</p>',
	name: 'EMSB15',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is natural.</p>',
	name: 'EMSB16',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it contains no harmful substances.</p>',
	name: 'EMSB17',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is organic.</p>',
	name: 'EMSB18',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is low in calories.</p>',
	name: 'EMSB19',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I watch my weight.</p>',
	name: 'EMSB20',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is low in fat.</p>',
	name: 'EMSB21',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I am sad.</p>',
	name: 'EMSB22',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I am frustrated.</p>',
	name: 'EMSB23',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I feel lonely.</p>',
	name: 'EMSB24',
	labels: scale},

];

questions1.forEach(function(question) {
    question.required = true;
});

var EMSB = {
	type: 'survey-likert',
	questions: questions1,
	randomize_question_order: false
};

var EMSB_block = {
	timeline: [prompt, EMSB],
	randomize_order: false
};
