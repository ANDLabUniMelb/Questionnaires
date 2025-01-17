var prompt = {
    type: 'html-button-response',
    stimulus: '<p style="font-size:24px">The statements below concern how you feel in emotionally intimate relationships. We are interested in how you generally experience relationships, not just in what is happening in a current relationship.</p>' +
        '<p style="font-size:24px"> Respond to each statement by clicking a circle to indicate how much you agree or disagree with the statement.</p>'+
        '<p style="font-size:24px"> There are no right or wrong answers.</p>'+
        '<p style="font-size:24px"> Do not spend too much time on any statement.</p>',
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
    {prompt: '<p style="text-align:center; font-size:24px">I\'m afraid that I will lose my partner\'s love.</p>',
        name: 'ECRR1',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I often worry that my partner will not want to stay with me.</p>',
        name: 'ECRR2',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I often worry that my partner doesn\'t really love me.</p>',
        name: 'ECRR3',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I worry that romantic partners won\'t care about me as much as I care about them.</p>',
        name: 'ECRR4',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I often wish that my partner\'s feelings for me were as strong as my feelings for him or her.</p>',
        name: 'ECRR5',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I worry a lot about my relationships.</p>',
        name: 'ECRR6',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">When my partner is out of sight, I worry that he or she might become interested in someone else.</p>',
        name: 'ECRR7',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">When I show my feelings for romantic partners, I\'m afraid they will not feel the same about me.</p>',
        name: 'ECRR8',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I rarely worry about my partner leaving me.</p>',
        name: 'ECRR9*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My romantic partner makes me doubt myself.</p>',
        name: 'ECRR10',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I do not often worry about being abandoned.</p>',
        name: 'ECRR11*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I find that my partner(s) don\'t want to get as close as I would like.</p>',
        name: 'ECRR12',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">Sometimes romantic partners change their feelings about me for no apparent reason.</p>',
        name: 'ECRR13',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My desire to be very close sometimes scares people away.</p>',
        name: 'ECRR14',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I\'m afraid that once a romantic partner gets to know me, he or she won\'t like who I really am.</p>',
        name: 'ECRR15',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">It makes me mad that I don\'t get the affection and support I need from my partner.</p>',
        name: 'ECRR16',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I worry that I won\'t measure up to other people.</p>',
        name: 'ECRR17',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My partner only seems to notice me when I\'m angry.</p>',
        name: 'ECRR18',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I prefer not to show a partner how I feel deep down.</p>',
        name: 'ECRR19',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I feel comfortable sharing my private thoughts and feelings with my partner.</p>',
        name: 'ECRR20*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I find it difficult to allow myself to depend on romantic partners.</p>',
        name: 'ECRR21',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I am very comfortable being close to romantic partners.</p>',
        name: 'ECRR22*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I don\'t feel comfortable opening up to romantic partners.</p>',
        name: 'ECRR23',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I prefer not to be too close to romantic partners.</p>',
        name: 'ECRR24',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I get uncomfortable when a romantic partner wants to be very close.</p>',
        name: 'ECRR25',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I find it relatively easy to get close to my partner.</p>',
        name: 'ECRR26*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">It\'s not difficult for me to get close to my partner.</p>',
        name: 'ECRR27*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I usually discuss my problems and concerns with my partner.</p>',
        name: 'ECRR28*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">It helps to turn to my romantic partner in times of need.</p>',
        name: 'ECRR29*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I tell my partner just about everything.</p>',
        name: 'ECRR30*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I talk things over with my partner.</p>',
        name: 'ECRR31*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I am nervous when partners get too close to me.</p>',
        name: 'ECRR32',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I feel comfortable depending on romantic partners.</p>',
        name: 'ECRR33*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I find it easy to depend on romantic partners.</p>',
        name: 'ECRR34*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">It\'s easy for me to be affectionate with my partner.</p>',
        name: 'ECRR35*',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My partner really understands me and my needs.</p>',
        name: 'ECRR36*',
        labels: scale},

]

questions.forEach(function(question) {
    question.required = true;
});

var ECRR = {
    type: 'survey-likert',
  	questions: questions,
    randomize_question_order: false
};
  
  var ECRR_block = {
    timeline: [prompt, ECRR],
    randomize_order: false,
  };
  