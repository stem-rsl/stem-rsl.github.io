$('#quiz').quiz({
  questions: [
    {
      'q': 'What name best describes this polygon?<br><img src="img/geo1.png"/>',
      'options': [
        'Rhombus',
        'Rectangle',
        'Square',
        'Parallelogram'
      ],
      'correctIndex': 0,
	  'correctResponse': 'Correct!',
	  'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'Which of the following statements <b>MUST</b> be true about a parallelogram?',
		'options': [
			'It has four sides of equal length',
			'It has four right angles',
			'It has two pairs of opposite sides'
		],
		'correctIndex': 2,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'What is the distance between (4,7) and (2,2)?',
		'options': [
			'<math><msqrt><mn>10</mn></msqrt></math>',
			'<math><msqrt><mn>29</mn></msqrt></math>',
			'8',
			'9'
		],
		'correctIndex': 1,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect'
	},
	{
		'q': 'Choose the equation of a line that is parallel to <i>y=0.6x+3</i> and that passes through the point (-3,-5)',
		'options': [
			'<i>y=0.6x-3.2</i>',
			'<i>y=-3.2x+0.6</i>',
			'<i>y=-0.2x+3</i>',
			'<i>y=-0.6x+6</i>'
		],
		'correctIndex': 0,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'What is the angle <i>x</i> in degrees?<br><img src="img/geo2.png"/>',
		'options': [
			'48',
			'3.7',
			'132',
			'180'
		],
		'correctIndex': 2,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'Given <i>m&#x2220;A=3x+9, m&#x2220;B = 5x+20, m&#x2220;C=3x, m&#x2220;D=2x+6</i>, find <i>m&#x2220;D<br><img src="img/geo3.png"/>',
		'options': [
			'25',
			'56',
			'47',
			'32'
		],
		'correctIndex': 1,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	}
  ]
});
