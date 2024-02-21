var prompt = {
	type: 'html-button-response',
	stimulus: '<p style="text-align:center; font-size:24px">Rate each item on a 5-point Likert-scale ranging from "Strongly disagree" to "Strongly agree".</p>',
	choices: ['Continue']
};

var scale = [
	"Strongly disagree",
	"Disagree",
	"Neutral",
	"Agree",
	"Strongly agree"
];

var questions = [
	{prompt: '<p style="text-align:center; font-size:24px">I often find myself at "loose ends", not knowing what to do.',
	name: 'BPSSF1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I find it hard to entertain myself.',
	name: 'BPSSF2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Many things I have to do are repetitive and monotonous.',
	name: 'BPSSF3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">It takes more stimulation to get me going than most people.',
	name: 'BPSSF4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I do not feel motivated by most things that I do.',
	name: 'BPSSF5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">When listening to music I feel a range of emotions.',
	name: 'BPSSF6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">In most situations, it is hard for me to find something to do or see to keep me interested.',
	name: 'BPSSF7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Much of the time, I just sit around doing nothing.',
	name: 'BPSSF8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Unless I am doing something exciting, even dangerous, I feel half-dead and dull.',
	name: 'BPSSF9',
	labels: scale}
];

questions.forEach(function(question) {
    question.required = true;
});

var BPSSF = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var BPSSF_block = {
	timeline: [prompt, BPSSF],
	randomize_order: false
};
