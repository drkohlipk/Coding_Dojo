def oneAway(str1, str2):
	str1Len = len(str1)
	str2Len = len(str2)

	if str1Len - str2Len > 1 or str2Len - str1Len > 1:
		return False

	n = str1Len
	j = 0
	changeCount = 0

	if str1Len > str2Len: n = str2Len

	for i in range(n):
		if str1[i] != str2[j]:
			if str1[i] == str2[j+1]:
				j += 1
				i -= 1
			elif str1[i+1] == str2[j]: j -= 1

			changeCount += 1

		if changeCount > 1: return False

		j += 1

	return True

print oneAway('pale', 'bake')
