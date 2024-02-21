var prompt = {
	type: 'html-button-response',
	stimulus:
		'<p style="text-align:center; font-size:24px"> There are some sentences below.</p>' +
		'<p style="text-align:center; font-size:24px"> Indicate how often each of the statements below is descriptive of you.</p>' +
		'<p style="text-align:center; font-size:24px"> There are no right or wrong answers. </p>',
		choices: ['Continue']
};

var scale = [
	"I never feel this way",
	"I rarely feel this way",
	"I sometimes feel this way",
	"I often feel this way"
];

var questions = [
	{prompt:
	'<p style="text-align:center; font-size:24px">I am unhappy doing so many things alone.</p>',
	name: 'ULS1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have nobody to talk to.</p>',
	name: 'ULS2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I cannot tolerate being so alone.</p>',
	name: 'ULS3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I lack companionship. </p>',
	name: 'ULS4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I feel as if nobody really understands me.</p>',
	name: 'ULS5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I find myself waiting for people to call or write.</p>',
	name: 'ULS6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">There is no one I can turn to.</p>',
	name: 'ULS7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am no longer close to anyone.</p>',
	name: 'ULS8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My interests and ideas are not shared by those around me.</p>',
	name: 'ULS9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I feel left out.</p>',
	name: 'ULS10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I feel completely alone.</p>',
	name: 'ULS11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am unable to reach out and communicate with those around me.</p>',
	name: 'ULS12',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My social relationships are superficial.</p>',
	name: 'ULS13',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I feel starved for company.</p>',
	name: 'ULS14',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">No one really knows me well.</p>',
	name: 'ULS15',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I feel isolated from others.</p>',
	name: 'ULS16',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am unhappy being so withdrawn.</p>',
	name: 'ULS17',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">It is difficult for me to make friends.</p>',
	name: 'ULS18',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I feel shut out and excluded by others.</p>',
	name: 'ULS19',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">People are around me but not with me.</p>',
	name: 'ULS20',
	labels: scale}
	];

questions.forEach(function(question) {
    question.required = true;
});

var ULS = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var ULS_block = {
	timeline: [prompt, ULS],
	randomize_order: false
};
