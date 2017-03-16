inpMatrix = [[1, 1, 1, 1, 0, 1], [1, 0, 1, 1, 1, 1], [1, 1, 1, 1, 1, 1], [1, 1, 1, 0, 1, 1], [1, 1, 1, 1, 1, 1]]

def findZeroes(matrix, m, n):
	for r in range(1, m):
		for c in range(1, n):
			if matrix[r][c] == 0:
				matrix[0][c] = 0
				matrix[r][0] = 0

	return matrix

def zeroOutRow(matrix, row, n):
	for i in range(n):
		matrix[row][i] = 0

	return matrix

def zeroOutCol(matrix, col, m):
	for i in range(m):
		matrix[i][col] = 0

	return matrix

def __main__(matrix):
	m = len(matrix)
	n = len(matrix[0])
	row0 = False
	col0 = False

	if m > 0 and n > 0:
		for i in range(n):
			if matrix[0][i] == 0:
				row0 = True
				break
		for j in range(m):
			if matrix[j][0] == 0:
				col0 = True
				break

	else: return False

	matrix = findZeroes(matrix, m, n)

	for i in range(1, n):
		if matrix[0][i] == 0:
			matrix = zeroOutCol(matrix, i, m)

	for j in range(1, m):
		if matrix[j][0] == 0:
			matrix = zeroOutRow(matrix, j, n)

	if row0: matrix = zeroOutRow(matrix, 0, n)
	if col0: matrix = zeroOutCol(matrix, 0, m)

	return matrix

print __main__(inpMatrix)
