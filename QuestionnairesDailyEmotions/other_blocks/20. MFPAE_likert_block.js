var prompt = {
	type: 'html-button-response',
	stimulus: '<p style="text-align:center; font-size:24px">People are active regularly for a variety of reasons. </p>'+
	'<p style="text-align:center; font-size:24px">Using the raing scale provided below, please indicate how true each of the following reasons is for why you are, or would like to be, active regularly. </p>',
	choices: ['Continue']
};

var scale = [
	"Not at all true",
	" ",
	" ",
	"Somewhat true",
	" ",
	" ",
	"Very true"
];

//motivation for phsyical activity
var questions1 = [
	{prompt: '<p style="text-align:center; font-size:24px"><b>I try, or would like to try, to be physically active regularly...</b>'+
		'<p style="text-align:center; font-size:24px">because I would feel bad about myself if I did not.</p>',
	name: 'MFPA1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because others would be angry with me if I did not.</p>',
	name: 'MFPA2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I enjoy physical activities.</p>',
	name: 'MFPA3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I would feel like a failure if I did not.</p>',
	name: 'MFPA4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I feel as if it is the best way to help myself.</p>',
	name: 'MFPA5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because people would think I am a weak person if I did not.</p>',
	name: 'MFPA6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I feel as if I have no choice about being active; others make me do it.</p>',
	name: 'MFPA7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is a challenge to accomplish my goal.</p>',
	name: 'MFPA8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I believe physical activity helps me feel better.</p>',
	name: 'MFPA9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is fun.</p>',
	name: 'MFPA10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I worry that I would get into trouble with others if I did not.</p>',
	name: 'MFPA11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it feels important to me personally to accomplish this goal.</p>',
	name: 'MFPA12',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I feel guilty if I am not regularly active.</p>',
	name: 'MFPA13',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I want others to acknowledge that I am doing what I have been told I should do.</p>',
	name: 'MFPA14',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is interesting to see my own improvement.</p>',
	name: 'MFPA15',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because feeling healthier is an important value for me.</p>',
	name: 'MFPA16',
	labels: scale}

];

questions1.forEach(function(question) {
    question.required = true;
});

var MFPA = {
	type: 'survey-likert',
	questions: questions1,
	randomize_question_order: false
};

//motivation for exercise / working out
var questions2 = [
	{prompt: '<p style="text-align:center; font-size:24px"><b>I exercise/work out (or would like to work out)...</b>'+
		'<p style="text-align:center; font-size:24px">because I simply enjoy working out.</p>',
	name: 'MFE1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because working out is important and beneficial for my health and lifestyle.</p>',
	name: 'MFE2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I would feel bad about myself if I did not do it.</p>',
	name: 'MFE3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is fun and interesting.</p>',
	name: 'MFE4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because others like me better when I am in shape.</p>',
	name: 'MFE5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I would be afraid of falling too far out of shape if I did not.</p>',
	name: 'MFE6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it helps my image.</p>',
	name: 'MFE7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because it is personally important to work out.</p>',
	name: 'MFE8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I feel pressured to work out.</p>',
	name: 'MFE9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I have a strong value for being active and healthy.</p>',
	name: 'MFE10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I find pleasure in discovering and mastering new training techniques.</p>',
	name: 'MFE11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">because I want others to see me as physically fit.</p>',
	name: 'MFE12',
	labels: scale}

];

questions2.forEach(function(question) {
    question.required = true;
});

var MFE = {
	type: 'survey-likert',
	questions: questions2,
	randomize_question_order: false
};

var MFPAE_block = {
	timeline: [prompt, MFPA, MFE],
	randomize_order: false
};
