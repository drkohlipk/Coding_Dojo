def odd_even():
	for i in range(1, 2001):
		if (i % 2) == 0:
			print "Number is {}.  This is an even number.".format(i)
		else:
			print "Number is {}.  This is an odd number.".format(i)

odd_even()
