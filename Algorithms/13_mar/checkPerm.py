# def makeTable(str):
# 	tab = {}
#
# 	for c in str:
# 		if c not in tab:
# 			tab[c] = 1
# 		else:
# 			tab[c] += 1
#
# 	return tab
#
# def checkPerm(str1, str2):
# 	if len(str1) != len(str2):
# 		return False
#
# 	tab = makeTable(str1)
#
# 	for c in str2:
# 		if c not in tab:
# 			return False
# 		tab[c] -= 1
#
# 	for k in tab:
# 		if tab[k] != 0:
# 			return False
#
# 	return True

def checkPerm(str1, str2):
	if len(str1) != len(str2):
		return False

	str1 = sorted(str1)
	str2 = sorted(str2)

	if str1 != str2:
		return False

	return True

print checkPerm("abcd", "dbca")
