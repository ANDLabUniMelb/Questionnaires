var prompt = {
    type: 'html-button-response',
    stimulus: '<p style="text-align:center; font-size:24px">A number of statements which people have used to describe themselves are given below.</p>' +
        '<p style="text-align:center; font-size:24px">Read each statement and then choose the appropriate response to indicate how you feel right now, that is, <b>at this moment</b>.</p>' +
        '<p style="text-align:center; font-size:24px">There are no right or wrong answers.</p>',
		choices: ['Continue']
};

var scale = [
    "Not at all",
    "Somewhat",
    "Moderately so",
    "Very much so"
];

var questions = [
    {prompt: '<p style="text-align:center; font-size:24px"><b>At this moment...</b></p><br>'+
    '<p style="text-align:center; font-size:24px">I feel calm.', name: 'STAIY1-1', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel secure.', name: 'STAIY1-2', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I am tense.', name: 'STAIY1-3', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel strained.', name: 'STAIY1-4', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel at ease.', name: 'STAIY1-5', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel upset.', name: 'STAIY1-6', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I am presently worrying over possible misfortunes.', name: 'STAIY1-7', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel satisfied.', name: 'STAIY1-8', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel frightened.', name: 'STAIY1-9', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel comfortable.', name: 'STAIY1-10', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel self-confident.', name: 'STAIY1-11', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel nervous.', name: 'STAIY1-12', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I am jittery.', name: 'STAIY1-13', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel indecisive.', name: 'STAIY1-14', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I am relaxed.', name: 'STAIY1-15', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel content.', name: 'STAIY1-16', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I am worried.', name: 'STAIY1-17', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel confused.', name: 'STAIY1-18', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel steady.', name: 'STAIY1-19', labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">I feel pleasant.', name: 'STAIY1-20', labels: scale}
];

questions.forEach(function(question) {
    question.required = true;
});

var STAIY1 = {
    type: 'survey-likert',
    questions: questions,
    randomize_question_order: false
};

var STAIY1_block = {
    timeline: [prompt, STAIY1],
    randomize_order: false,
};
