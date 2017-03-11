#######   O(n) runtime   #######

def makeTable(str):
	strDict = {}
	for char in str:
		if char not in strDict:
			strDict[char] = 1
		else:
			strDict[char] += 1
	return strDict

def isUnique(str):
	hT = makeTable(str)
	for char in hT:
		if hT[char] > 1:
			return False
	return True

#######   O(n) runtime   #######


#######   O(n^2) runtime   #######

# def isUnique(str):
# 	for c in str:
# 		for d in str:
# 			if c == d:
# 				return False
# 	return True

#######   O(n^2) runtime   #######


print isUnique('supercalifragilisticexpialadocious')
