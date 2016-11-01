a = [2,4,10,16]

def multiply(arr, Y):
	for i in range(len(arr)):
		arr[i] *= Y
	return arr

b = multiply(a, 5)
print b
