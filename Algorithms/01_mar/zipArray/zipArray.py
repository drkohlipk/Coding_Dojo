def zipArr(list1, list2):
	resDict = {}
	n = len(list1) if len(list1) < len(list2) else len(list2)

	for i in range(n):
		resDict[list1[i]] = list2[i]

	return resDict

firstList = ["abc", 3, "yo"]
secondList = [42, "wassup", True]

print zipArr(firstList, secondList)
