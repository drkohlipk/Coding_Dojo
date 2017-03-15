def makeTable(str):
	tab = {}

	for c in str:
		if c not in tab:
			tab[c] = 1
		else:
			tab[c] += 1

	return tab

def palPerm(str):
	str = str.lower();
	tab = makeTable(str)
	oddCount = 0

	for c in tab:
		if tab[c] % 2 == 1 and c != ' ':
			oddCount += 1
		if oddCount > 1:
			return False

	return True

print palPerm('super')
