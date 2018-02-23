$('#quiz').quiz({
  questions: [
    {
      'q': 'Which of the following elements has the highest electronegativity?',
      'options': [
        'Sodium',
        'Magnesium',
        'Potassium',
        'Calcium'
      ],
      'correctIndex': 1,
	  'correctResponse': 'Correct!',
	  'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'What is the trend of ionization energy?',
		'options': [
			'Decrease across a period, increase down a group.',
			'Increase across a period, decrease down a group.',
			'Increase across a period, decrease up a group.',
           'Decrease across a period, increase up a group.'
		],
		'correctIndex': 1,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'How is a mixture different from a compound?',
		'options': [
			'Mixtures have two or more components',
			'Each substance in a mixture keeps its characteristics',
			'Mixtures are commonly found in nature',
			'Solids liquids and gasses can form mixtures'
		],
		'correctIndex': 1,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect'
	},
	{
		'q': 'Which of the following will <b>NOT</b> break down compounds?',
		'options': [
			'Heat',
			'Electric Current',
			'Chemical Change',
			'Filtering'
		],
		'correctIndex': 3,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'How do Bohr\'s and Rutherford \'s models compare?',
		'options': [
			'Bohr improved Ruthherford\'s model by proposing energy levels of electrons.',
			'Bohr improved Rutherford\'s model by proposing protons.',
			'Rutherford improved Bohr\'s model by proposing energy.',
			'Rutherford improvec Bohr\'s model by proposing that protons and electrons are together in the atom.'
		],
		'correctIndex': 0,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	},
	{
		'q': 'Rutherford\'s gold foil experiment provided evidence that',
		'options': [
			'Negative and positive charges are spread evenly throughout the atom.',
			'Alpha particles have a positive charge',
			'Gold is not as dense as previously thought',
			'There is a dense positively charged nucleus at the center of an atom'
		],
		'correctIndex': 0,
		'correctResponse': 'Correct!',
		'incorrectResponse': 'Incorrect!'
	}
  ]
});
