def isRot(s1, s2):
	n = len(s1)

	if n != len(s2): return False

	for i in range(n):
		if s1[i] == s2[0]:
			for j in range(n):
				if s1[(j + i) % n] != s2[j]: break
				if j == n - 1: return True

	return False

print isRot('eeeeebeeeee', 'eeeeeebeeee')
