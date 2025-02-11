var prompt = {
	type: 'html-button-response',
	stimulus:
		'<p style="text-align:center; font-size:24px"> There are some sentences below.</p>' +
		'<p style="text-align:center; font-size:24px"> Indicate how often each of the statements below is descriptive of you.</p>' +
		'<p style="text-align:center; font-size:24px"> There are no right or wrong answers. </p>',
		choices: ['Continue']
};

var scale = [
	"Never/ Almost Never",
	"Rarely",
	"Occasionally",
	"Often",
	"Always/ Almost Always"
];

var questions = [
	{prompt:'<p style="text-align:center; font-size:24px">I am pleased to help my friends/colleagues in their activities.</p>',
	name: 'PS1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I share things that I have with my friends.</p>',
	name: 'PS2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I try to help others.</p>',
	name: 'PS3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am available for volunteer activities to help those who are in need. </p>',
	name: 'PS4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am emphatic with those who are in need.</p>',
	name: 'PS5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I help immediately those who are in need.</p>',
	name: 'PS6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I do what I can to help others avoid getting in trouble.</p>',
	name: 'PS7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I intensely feel what others feel.</p>',
	name: 'PS8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am willing to make my knowledge and abilities avaliable to others.</p>',
	name: 'PS9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I try to console those who are sad.</p>',
	name: 'PS10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I easily lend money or other things.</p>',
	name: 'PS11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I easily put myself in the shoes of those who are in discomfort.</p>',
	name: 'PS12',
	labels: scale},

    {prompt:'<p style="text-align:center; font-size:24px">I try to be close and take care of those who are in need.</p>',
    name: 'PS13',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I easily share with friends any good opportunity that comes to me.</p>',
    name: 'PS14',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I spend time with those friends who feel lonely.</p>',
    name: 'PS15',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I immediately sense my friends discomfort even when its not directly communicated to me. </p>',
    name: 'PS16',
    labels: scale},

	];

questions.forEach(function(question) {
    question.required = true;
});

var PS = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var MSPSS_block = {
	timeline: [prompt, PS],
	randomize_order: false
};
