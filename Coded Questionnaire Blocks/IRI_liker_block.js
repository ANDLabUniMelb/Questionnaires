var prompt = {
    type: 'html-button-response',
    stimulus: '<p style="font-size:24px">The following statements inquire about your thoughts and feelings in a variety of situations.</p>' +
        '<p style="font-size:24px"> For each item, indicate how well it describes you by choosing the appropriate circle.</p>'+
        '<p style="font-size:24px"> READ EACH ITEM CAREFULLY BEFORE RESPONDING. Answer as honestly as you can. Thank you.</p>',
        choices: ['Continue']
};

var scale = [
    "1 - Does not describe me well",
    "2",
    "3",
    "4",
    "5 - Describes me very well",
];

var questions = [
    {prompt: '<p style="text-align:center; font-size:24px">I daydream and fantasize, with some regularity, about things that might happen to me.</p>',
        name: 'IRI1',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I often have tender, concerned feelings for people less fortunate than me.</p>',
        name: 'IRI2',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I sometimes find it difficult to see things from the \"other guy\'s\" point of view.</p>',
        name: 'IRI3',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">Sometimes I don\'t feel very sorry for other people when they are having problems.</p>',
        name: 'IRI4',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I really get involved with the feelings of the characters in a novel.</p>',
        name: 'IRI5',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">In emergency situations, I feel apprehensive and ill-at-ease.</p>',
        name: 'IRI6',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">I am usually objective when I watch a movie or play, and I don\'t often get completely caught up in it.</p>',
        name: 'IRI7',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I try to look at everybody\'s side of a disagreement before I make a decision.</p>',
        name: 'IRI8',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">When I see someone being taken advantage of, I feel kind of protective towards them.</p>',
        name: 'IRI9',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I sometimes feel helpless when I am in the middle of a very emotional situation.</p>',
        name: 'IRI10',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I sometimes try to understand my friends better by imagining how things look from their perspective.</p>',
        name: 'IRI11',
        labels: scale},
               
    {prompt: '<p style="text-align:center; font-size:24px">Becoming extremely involved in a good book or movie is somewhat rare for me.</p>',
        name: 'IRI12',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">When I see someone get hurt, I tend to remain calm.</p>',
        name: 'IRI13',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">Other people\'s misfortunes do not usually disturb me a great deal.</p>',
        name: 'IRI14',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">If I\'m sure I\'m right about something, I don\'t waste much time listening to other people\'s arguments.</p>',
        name: 'IRI15',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">After seeing a play or movie, I have felt as though I were one of the characters.</p>',
        name: 'IRI16',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">Being in a tense emotional situation scares me.</p>',
        name: 'IRI17',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">When I see someone being treated unfairly, I sometimes don\'t feel very much pity for them.</p>',
        name: 'IRI18',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I am usually pretty effective in dealing with emergencies.</p>',
        name: 'IRI19',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I am often quite touched by things that I see happen.</p>',
        name: 'IRI20',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I believe that there are two sides to every question and try to look at them both.</p>',
        name: 'IRI21',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I would describe myself as a pretty soft-hearted person.</p>',
        name: 'IRI22',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">When I watch a good movie, I can very easily put myself in the place of a leading character.</p>',
        name: 'IRI23',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">I tend to lose control during emergencies.</p>',
        name: 'IRI24',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">When I\'m upset at someone, I usually try to "put myself in his shoes" for a while. </p>',
        name: 'IRI25',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">When I am reading an interesting story or novel, I imagine how I would feel if the events in the story were happening to me.</p>',
        name: 'IRI26',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">When I see someone who badly needs help in an emergency, I go to pieces.</p>',
        name: 'IRI27',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">Before criticizing somebody, I try to imagine how I would feel if I were in their place.</p>',
        name: 'IRI28',
        labels: scale},       
           
]

questions.forEach(function(question) {
    question.required = true;
});

var IRI = {
    type: 'survey-likert',
  	questions: questions,
    randomize_question_order: false
};
  
  var IRI_block = {
    timeline: [prompt, IRI],
    randomize_order: false,
  };
  