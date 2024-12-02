var prompt = {
    type: 'html-button-response',
    stimulus: '<p style="font-size:24px">Please indicate the extent to which you agree or disagree with the following statements</b>.</p>' +
        '<p style="font-size:24px"> There are no right or wrong answers.</p>'+
        '<p style="font-size:24px"> Do not spend too much time on any statement.</p>',
        choices: ['Continue']
};

var scale = [
    "Strongly disagree",
    "Disagree",
    "Neither agree nor disagree",
    "Agree",
    "Strongly agree"
];

var questions = [
    {prompt: '<p style="text-align:center; font-size:24px">I struggle with the feeling that I am separate from other people.</p>',
        name: 'BSEL1',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I feel like I am ultimately alone in my life.</p>',
        name: 'BSEL2',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I feel an upsetting distance between myself and other people.</p>',
        name: 'BSEL3',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I struggle with the feeling that I cannot connect fully with others.</p>',
        name: 'BSEL4',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I have an upsetting feeling that I am disconnectedd from everyone else.</p>',
        name: 'BSEL5',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I feel utterly alone in the world.</p>',
        name: 'BSEL6',
        labels: scale},
]

questions.forEach(function(question) {
    question.required = true;
});

var BSEL = {
    type: 'survey-likert',
  	questions: questions,
    randomize_question_order: false
};
  
  var BSEL_block = {
    timeline: [prompt, BSEL],
    randomize_order: false,
  };
  