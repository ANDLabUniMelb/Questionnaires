var prompt = {
	type: 'html-button-response',
	stimulus:
		'<p style="text-align:center; font-size:24px"> There are some sentences below.</p>' +
		'<p style="text-align:center; font-size:24px"> Indicate how often each of the statements below is descriptive of you.</p>' +
		'<p style="text-align:center; font-size:24px"> There are no right or wrong answers. </p>',
		choices: ['Continue']
};

var scale = [
	"Strongly Disagree",
	"Disagree",
	"Neutral",
	"Agree",
	"Strongly Agree"
];

var questions = [
	{prompt:'<p style="text-align:center; font-size:24px">I feel that I fit in well as part of the college environment.</p>',
	name: 'SACQ1',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have been feeling tense or nervous lately.</p>',
	name: 'SACQ2',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have been keeping up to date on my academic work.</p>',
	name: 'SACQ3',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am meeting as many people, and making as many friends as I would like at college.</p>',
	name: 'SACQ4',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I know why I am in college and what I want out of it.</p>',
	name: 'SACQ5',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am finding academic work at college difficult.</p>',
	name: 'SACQ6',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Lately, I have been feeling blue and moody a lot.</p>',
	name: 'SACQ7',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am very involved with social activities in college.</p>',
	name: 'SACQ8',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am adjusting well to college.</p>',
	name: 'SACQ9',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have not been functioning well during examinations.</p>',
	name: 'SACQ10',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have felt tired much of the time lately.</p>',
	name: 'SACQ11',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Being on my own, taking responsibility for myself, has not been easy.</p>',
	name: 'SACQ12',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am satisfied with the level at which I am performing academically.</p>',
	name: 'SACQ13',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have had informal, personal contacts with college professors.</p>',
	name: 'SACQ14',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am pleased now about my decision to go to college.</p>',
	name: 'SACQ15',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am pleased now about my decision to attend this college in particular.</p>',
	name: 'SACQ16',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I am not working as hard as I should at my course work.</p>',
	name: 'SACQ17',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have several close social ties at college.</p>',
	name: 'SACQ18',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">My academic goals and purposes are well defined.</p>',
	name: 'SACQ19',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">I have not been able to control my emotions very well lately.</p>',
	name: 'SACQ20',
	labels: scale}

    {prompt:'<p style="text-align:center; font-size:24px">I am not really smart enough for academic work I am expected to be doing now.</p>',
	name: 'SACQ21',
	labels: scale},

	{prompt: '<p style="text-align:center; font-size:24px">Lonesomeness for home is a source is of difficulty for me now.</p>',
	name: 'SACQ22',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">Getting a college degree is very important for me.</p>',
	name: 'SACQ23',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">My appetite has been good lately.</p>',
	name: 'SACQ24',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I haven not been very efficient in the use of study time lately.</p>',
	name: 'SACQ25',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I enjoy living in a college dormitory. (Please omit if you do not live in a dormitory; any university housing should be regarded as a dormitory).</p>',
	name: 'SACQ26',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I enjoy writing papers for courses.</p>',
	name: 'SACQ27',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I have been having a lot of headaches lately.</p>',
	name: 'SACQ28',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I really haven not had much motivation for studying lately.</p>',
	name: 'SACQ29',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I am satisfied with the extracurricular activities available at college.</p>',
	name: 'SACQ30',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I have given a lot of thought lately to whether I should ask for help from the Psychologica/Counselling Service Centre or from a psychotherapist outside of college.</p>',
	name: 'SACQ31',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">Lately, I have been having doubts regarding the value of a college education.</p>',
	name: 'SACQ32',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I am getting along very well with my roommates(s) at college. (Please omit if you do not have a roommate).</p>',
	name: 'SACQ33',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I wish I were at another college or university.</p>',
	name: 'SACQ34',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I have put on (or lost) too much weight recently.</p>',
	name: 'SACQ35',
	labels: scale},

	{prompt:'<p style="text-align:center; font-size:24px">I am satisfied with the number and variety of courses available at college.</p>',
	name: 'SACQ36',
	labels: scale},

    {prompt:'<p style="text-align:center; font-size:24px">I feel that I have enough social skills to get along well in the college setting.</p>',
    name: 'SACQ37',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I have been getting angry too easily lately.</p>',
    name: 'SACQ38',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">Recently I have had trouble concentrating when I try to study.</p>',
    name: 'SACQ39',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I have not been sleeping very well..</p>',
    name: 'SACQ40',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am not doing well enough academically for the amount of work I put in.</p>',
    name: 'SACQ41',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am having difficulty feeling at ease with other people at college.</p>',
    name: 'SACQ42',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am satisfied with the quality or the caliber of courses available at college.</p>',
    name: 'SACQ43',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am attending classes regularly.</p>',
    name: 'SACQ44',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">Sometimes my thinking gets muddled up too easily.</p>',
    name: 'SACQ45',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am satisfied with the extent to which I am participating in social activities at college.</p>',
    name: 'SACQ46',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I expect to stay at this college for a bachelors degree.</p>',
    name: 'SACQ47',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I have not been mixing too well with the opposite sex lately.</p>',
    name: 'SACQ48',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I worry a lot about my college expenses.</p>',
    name: 'SACQ49',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am enjoying my academic work at college.</p>',
    name: 'SACQ50',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I have been feeling lonely a lot at college lately.</p>',
    name: 'SACQ51',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am having a lot trouble getting started on homework assignments.</p>',
    name: 'SACQ52',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I feel I have good control over my life situation at college.</p>',
    name: 'SACQ53',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I am satisfied with my program of courses for this semester/quarter.</p>',
    name: 'SACQ54',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I have been feeling in good health lately.</p>',
    name: 'SACQ55',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">I feel I am very different from other students at college in ways that I do not like.</p>',
    name: 'SACQ56',
    labels: scale}
    
    {prompt: '<p style="text-align:center; font-size:24px">On balance, I would rather be home than here.</p>',
    name: 'SACQ57',
    labels: scale},
    
    {prompt: '<p style="text-align:center; font-size:24px">Most of the things I am interested in are not related to any of my course work at college.</p>',
    name: 'SACQ58',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">Lately I have been giving a lot of thought to transferring to another college.</p>',
    name: 'SACQ59',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">Lately I have been giving a lot thought to dropping out of college altogether and for good.</p>',
    name: 'SACQ60',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">I find myself giving considerable thought to taking time off from college and finishing later.</p>',
    name: 'SACQ61',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">I am very satisfied with the professors I have now in my courses.</p>',
    name: 'SACQ62',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">I have some good friends or acquaintances at college with whom I can talk about any problems I may have.</p>',
    name: 'SACQ63',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">I am experiencing a lot of difficulty coping with the stresses imposed upon me in college.</p>',
    name: 'SACQ64',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">I am quite satisfied with my social life at college.</p>',
    name: 'SACQ65',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">I am quite satisfied with my academic situation at college.</p>',
    name: 'SACQ66',
    labels: scale},
    
    {prompt:'<p style="text-align:center; font-size:24px">I feel confident that I will be able to deal in a satisfactory manner with future challenges here at college.</p>',
    name: 'SACQ67',
    labels: scale},

	];

questions.forEach(function(question) {
    question.required = true;
});

var SACQ = {
	type: 'survey-likert',
	questions: questions,
	randomize_question_order: false
};

var SACQ_block = {
	timeline: [prompt, SACQ],
	randomize_order: false
};
