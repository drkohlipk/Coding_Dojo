def scores(grade):
	letter = ''
	if grade >= 60 and grade <=69:
		letter = 'D'
	elif grade >= 70 and grade <=79:
		letter = 'C'
	elif grade >= 80 and grade <=89:
		letter = 'B'
	elif grade >= 90:
		letter = 'A'
	print 'Score: {}; Your grade is a {}'.format(grade, letter)

def ask(it):
	for i in range(it):
		a = input('Please enter your score: ')
		scores(int(a))
	print 'End of program.  Bye!'

ask(10)
