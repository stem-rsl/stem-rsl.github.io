$('#quiz').quiz({
	questions: [
		{
			'q': 'Is the following sentence a fragment?<br><i>Alex and Marcus are excited about watching the Olympics.</i>',
			'options': [
				'Yes',
				'No'
			],
			'correctIndex': 1,
			'correctResponse': 'Correct!',
			'incorrectResponse': 'Incorrect!'
		},
		{
			'q': 'Is the following sentence a fragment?<br><i>Because she didn\'t do her homework.</i>',
			'options': [
				'Yes',
				'No'
			],
			'correctIndex': 0,
			'correctResponse': 'Correct!',
			'incorrectResponse': 'Incorrect!'
		},
		{
			'q': 'Which of the following is propper grammar?',
			'options': [
				'Our professor reviewed for the test in class, and several of us went to the library afterwards to study.',
				'Our professor reviewed for the test in class. Several of us went to the library afterwards to study.',
				'Our professor reviewed for the test in class: several of us went to the library afterwards to study.'
			],
			'correctIndex': 1,
			'correctResponse': 'Correct!',
			'incorrectResponse': 'Incorrect!',
		},
		{
			'q': 'Which of the following are correct?',
			'options': [
				'The coach was mad at his team. He told the players that they had to work harder in practice, and he made them watch extra film to prepare for the next game.',
				'The coach was mad at his team; he told the players that they had to work harder in practice, and he made them watch extra film to prepare for the next game.',
				'The coach was mad at his team he told the players that they had to work harder in practice, and he made them watch extra film to prepare for the next game.'
			],
			'correctIndex': 0,
			'correctResponse': 'Correct!',
			'incorrectResponse': 'Incorrect!'
		},
		{
			'q': 'What is the appropriate verb choice of the following sentence?<br><i>She is the only one of the students who (have, has) failed the test.',
			'options': [
				'Have',
				'Has'
			],
			'correctIndex': 1,
			'correctResponse': 'Correct!',
			'incorrectResponse': 'Incorrect!'
		},
		{
			'q': 'What is the appropriate verb choice of the following sentence?<br><i>I am certain that both Catherine and Lucy (is, are) coming over this weekend.</i>',
			'options': [
				'Is',
				'Are'
			],
			'correctIndex': 1,
			'correctResponse': 'Correct!',
			'incorrectResponse': 'Incorrect!'
		}
	]
});
