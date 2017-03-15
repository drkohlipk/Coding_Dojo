def rotMat(matrix):
	if len(matrix) != len(matrix[1]): return False

	n = len(matrix)

	for layer in range(n/2):
		end = n - layer - 1

		for i in range(layer, end):
			top = matrix[layer][i]

			matrix[layer][i] = matrix[n-1-i][layer]

			matrix[n-1-i][layer] = matrix[end][n-1-i]

			matrix[end][n-1-i] = matrix[i][end]

			matrix[i][end] = top

	return matrix

print rotMat([['a', 'b', 'c', 'd', 'e', 'f'], [1, 2, 3, 4, 5, 6], ['g', 'h', 'i', 'j', 'k', 'l'], [7, 8, 9, 10, 11, 12], ['m', 'n', 'o', 'p', 'q', 'r'], [13, 14, 15, 16, 17, 18]])
