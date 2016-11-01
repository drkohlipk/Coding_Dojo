x = [4, "Tom", 1, "Michael", 5, 7, "Jimmy Smith"]

def print_Starlet(arr):
	for i in range(len(arr)):
		if isinstance(arr[i], int):
			print arr[i] * "*"
		elif isinstance(arr[i], str):
			print arr[i][0].lower() * len(arr[i])

print_Starlet(x)
