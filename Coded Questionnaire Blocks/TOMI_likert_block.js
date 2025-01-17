var prompt = {
    type: 'html-button-response',
    stimulus: '<p style="font-size:24px">The statements below are used to assess caregivers\' ideas about their children\'s thoughts and reasoning. Interpret the question the best you can and try to give your most general answer using everything you know about this child.</p>' +
        '<p style="font-size:24px">Respond to each statement by clicking a circle to indicate how much you agree or disagree with the statement.</p>'+
        '<p style="font-size:24px">There are no right or wrong answers.</p>',
        choices: ['Continue']
};

var scale = [
    "Definitely not",
    "Probably not",
    "undecided",
    "Probably",
    "Definitely"
];

var questions = [
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when someone puts on a jacket, it is probably because he/she is cold.</p>',
        name: 'TOMI1',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">If it were raining and I said in a sarcastic voice "Gee, looks like a really nice day outside," my child would understand that I didn\'t actually think it was a nice day.</p>',
        name: 'TOMI2',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">My child recognizes when someone needs help.</p>',
        name: 'TOMI3',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when someone says they are afraid of the dark, they will not want to go into a dark room.</p>',
        name: 'TOMI4',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">My child understands that people can be wrong about what other people want.</p>',
        name: 'TOMI5',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when people frown, they feel differently than when they smile.</p>',
        name: 'TOMI6',
        labels: scale},

    {prompt: '<p style="text-align:center; font-size:24px">My child understands the word \'think\'.</p>',
        name: 'TOMI7',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">If I put my keys on the table, left the room, and my child moved the keys from the table to a drawer, my child would understand that when I returned, I would first look for my keys where I left them.</p>',
        name: 'TOMI8',
        labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that to know what is in an unmarked box, you have to see or hear about what is in that box.</p>',
        name: 'TOMI9',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands the word \'know\'.</p>',
        name: 'TOMI10',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">Appearances can be deceiving. For example, when seeing a candle shaped like an apple, some people first assume that the object is an apple. Given the chance to examine it more closely, people typically change their mind and decide that the object is actually a candle. If my child was in this situation, my child would understand that it was not the object that changed, but rather his or her ideas about the object that changed.</p>',
        name: 'TOMI11',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">If I showed my child a cereal box filled with cookies and asked "What would someone who has not looked inside think is in the box?", my child would say that another person would think that there was cereal in the box.</p>',
        name: 'TOMI12',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">If I said "Let\'s hit the road!" my child would understand that I really meant "Let\'s go!"</p>',
        name: 'TOMI13',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that people can lie to purposely mislead others.</p>',
        name: 'TOMI14',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when someone makes a \'guess,\' it means they are less certain than when they \'know\' something.</p>',
        name: 'TOMI15',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when someone is thinking about a cookie, they cannot actually smell, eat, or share that cookie.</p>',
        name: 'TOMI16',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that people can smile even when they are not happy.</p>',
        name: 'TOMI17',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands the difference between when a friend is teasing in a nice way and when a bully is making fun of someone in a mean way.</p>',
        name: 'TOMI18',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that people don\'t always say what they are thinking because they don\'t want to hurt others\' feelings.</p>',
        name: 'TOMI19',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands the difference between lies and jokes.</p>',
        name: 'TOMI20',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that if two people look at the same object from a different standing point, they will see the object in different ways.</p>',
        name: 'TOMI21',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that people often have thoughts about other people\'s thoughts.</p>',
        name: 'TOMI22',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that people often have thoughts about other people\'s feelings.</p>',
        name: 'TOMI23',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands whether someone hurts another on purpose or by accident.</p>',
        name: 'TOMI24',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child recognizes when others are happy.</p>',
        name: 'TOMI25',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child can pretend that one object is a different object (for example, pretending a banana is a telephone).</p>',
        name: 'TOMI26',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child recognizes when a listener is not interested.</p>',
        name: 'TOMI27',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that, when I show fear, the situation is unsafe or dangerous.</p>',
        name: 'TOMI28',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands the word \'if\' when it is used hypothetically as in, "If I had the money, I\'d buy a new house."</p>',
        name: 'TOMI29',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when a person uses his/her hands as a bird, that the person doesn\'t actually think it is a real bird.</p>',
        name: 'TOMI30',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child knows how to make up stories to get what he/she wants.</p>',
        name: 'TOMI31',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that in a game of hide and seek, you don\'t want the person who is \'it\' to see you.</p>',
        name: 'TOMI32',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when a person promises something, it means the person is supposed to do it.</p>',
        name: 'TOMI33',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child is able to put himself/herself in other people\'s shoes and understand how they feel.</p>',
        name: 'TOMI34',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that when someone shares a secret, you are not supposed to tell anyone.</p>',
        name: 'TOMI35',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">If I said "What is black, white and \'read\' all over? It\'s a newspaper!" my child would understand the humor in this play on words.</p>',
        name: 'TOMI36',
        labels: scale},
    {prompt: '<p style="text-align:center; font-size:24px">My child is able to show me things.</p>',
        name: 'TOMI37',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child is able to pay attention when I show him/her something.</p>',
        name: 'TOMI38',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands the word \'believe\'.</p>',
        name: 'TOMI39',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">When we like others, we are likely to interpret their behavior in positive ways and when we don\'t like others, we are likely to interpret their behavior more negatively. My child understands that previous ideas and/or opinions of others can influence how we interpret their behaviors.</p>',
        name: 'TOMI40',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that two people can see the same image and interpret it differently. For example, when looking at this image, one person might see a rabbit whereas another might see a duck.</p>',
        name: 'TOMI41',
        labels: scale},
           
    {prompt: '<p style="text-align:center; font-size:24px">My child understands that if Bruce is a mean boy and John is a nice boy, Bruce is more likely than John to engage in malicious or hurtful behaviors.</p>',
        name: 'TOMI42',
        labels: scale},
           
]

questions.forEach(function(question) {
    question.required = true;
});

var TOMI = {
    type: 'survey-likert',
  	questions: questions,
    randomize_question_order: false
};
  
  var TOMI_block = {
    timeline: [prompt, TOMI],
    randomize_order: false,
  };
  