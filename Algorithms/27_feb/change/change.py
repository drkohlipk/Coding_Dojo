def make_change(value):
	curr = [25, 10, 5, 1]
	change = {}
	for coin in curr:
		diff = value // coin
		if diff >= 1:
			if coin == 25:
				change['quarter'] = diff
			elif coin == 10:
				change['dime'] = diff
			elif coin == 5:
				change['nickel'] = diff
			else:
				change['penny'] = diff
			value -= diff * coin
	return change

print make_change(94)
