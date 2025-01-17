var prompt = {
    type: 'html-button-response',
    stimulus: '<p style="font-size:24px">Please answer the following as to how each statement best fits you. Please be as honest as possible.</p>' +
        '<p style="font-size:24px">Please be as honest as possible.</p>'+
        '<p style="font-size:24px">Do not overthink it, there are no right or wrong answers.</p>',
        choices: ['Continue']
};

var scale = [
    "Strongly disagree",
    "Disagree",
    "Somewhat disagree",
    "Neither agree nor disagree",
    "Somewhat agree",
    "Agree",
    "Strongly agree"
];

var questions = [
    {prompt: '<p style="text-align:center; font-size:24px">I feel alone when I am with my family.</p>',
        name: 'SELSAS1',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I feel part of a group of friends.</p>',
        name: 'SELSAS2*',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I have a romantic partner with whom I share my most intimate thoughts and feelings.</p>',
        name: 'SELSAS3*',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">There is no one in my family I can depend on for support and encouragement. I wish there were.</p>',
        name: 'SELSAS4',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">My friends understand my motives and reasoning.</p>',
        name: 'SELSAS5*',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I have a romantic or marital partner who gives me the support and encouragement I need.</p>',
        name: 'SELSAS6*',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I don\'t have any friends who share my views, but I wish I did.</p>',
        name: 'SELSAS7',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I feel close to my family.</p>',
        name: 'SELSAS8*',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am able to depend on my friends for help.</p>',
        name: 'SELSAS9*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I wish I had a more satisfying romantic relationship.</p>',
        name: 'SELSAS10',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I feel part of my family.</p>',
        name: 'SELSAS11*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My family really cares about me.</p>',
        name: 'SELSAS12*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I do not have any friends who understand me, but I wish I did.</p>',
        name: 'SELSAS13',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I have a romantic partner to whose happiness I contribute.</p>',
        name: 'SELSAS14*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I have an unmet need for a close romantic relationship.</p>',
        name: 'SELSAS15',
        labels: scale},
           
]

questions.forEach(function(question) {
    question.required = true;
});

var SELSAS = {
    type: 'survey-likert',
  	questions: questions,
    randomize_question_order: false
};
  
  var SELSAS_block = {
    timeline: [prompt, SELSAS],
    randomize_order: false,
  };
  