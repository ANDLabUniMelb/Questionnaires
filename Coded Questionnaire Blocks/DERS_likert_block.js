var prompt = {
	type: 'html-button-response',
	stimulus:
		'<p style="text-align:center; font-size:24px"> There are some sentences below.</p>' +
		'<p style="text-align:center; font-size:24px"> Indicate how often each of the statements below is descriptive of you.</p>' +
		'<p style="text-align:center; font-size:24px"> There are no right or wrong answers. </p>',
		choices: ['Continue']
};

var scale = [
	"Almost Never",
	"Sometimes",
	"About half the time",
	"Most of the time",
	"Almost Always"
];

var questions = [
	{prompt:'<p style="text-align:center; font-size:24px">I am clear about my feeling.</p>',
	name: 'DERS1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I pay attention to how I feel.</p>',
	name: 'DERS2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I experience my emotions as overwhelming and out of control.</p>',
	name: 'DERS3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have no idea how I am feeling. </p>',
	name: 'DERS4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have difficulty making sense of my feelings.</p>',
	name: 'DERS5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am attentive to my feelings.</p>',
	name: 'DERS6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I know exactly how I am feeling.</p>',
	name: 'DERS7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I care about what I am feeling.</p>',
	name: 'DERS8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am confused about how I feel.</p>',
	name: 'DERS9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I aknowledge my emotions.</p>',
	name: 'DERS10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I become angry with myself for feeling that way.</p>',
	name: 'DERS11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I become embarrased for feeling that way.</p>',
	name: 'DERS12',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I have difficulty getting work done.</p>',
	name: 'DERS13',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I become out of control.</p>',
	name: 'DERS14',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I believe I will feel that way for a long time.</p>',
	name: 'DERS15',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I believe that I will end up feeling very depressed</p>',
	name: 'DERS16',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I believe that my feelings are valid and important</p>',
	name: 'DERS17',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I have difficulty focusing on other things.</p>',
	name: 'DERS18',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I feel out of control.</p>',
	name: 'DERS19',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I can still get things done.</p>',
	name: 'DERS20',
	labels: scale}

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I feel ashamed of myself for feeling that way.</p>',
	name: 'DERS21',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When I am upset, I know I can find a way to eventually feel better.</p>',
	name: 'DERS22',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I feel like I am weak.</p>',
	name: 'DERS23',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I feel like I can remain in control of my behaviours.</p>',
	name: 'DERS24',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I feel guilty for feeling that way.</p>',
	name: 'DERS25',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I have difficulty concentrating.</p>',
	name: 'DERS26',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I have difficulty controlling my behaviours.</p>',
	name: 'DERS27',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I believe there is nothing I can do to make myself feel better.</p>',
	name: 'DERS28',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I become irritated with myself for feeling that way.</p>',
	name: 'DERS29',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I start to feel very bad about myself.</p>',
	name: 'DERS30',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I believe that walloiwing in it is all I can do.</p>',
	name: 'DERS31',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I lose control of my behaviours.</p>',
	name: 'DERS32',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I have difficulty thinking about anything else.</p>',
	name: 'DERS33',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, I take time to figure out what I am really thinking.</p>',
	name: 'DERS34',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, it takes me a long time to feel better.</p>',
	name: 'DERS35',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">When I am upset, my emotions feel overwhelming.</p>',
	name: 'DERS36',
	labels: scale},
	];

questions.forEach(function(question) {
    question.required = true;
});

var DERS = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var DERS_block = {
	timeline: [prompt, DERS],
	randomize_order: false
};
