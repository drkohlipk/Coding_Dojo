def get_max_min_avg(arr):
	n = len(arr)
	max_min_avg = {
		"max": arr[0],
		"min": arr[0],
		"avg": arr[0]
	}

	for i in range(n):
		if arr[i] > max_min_avg["max"]:
			max_min_avg["max"] = arr[i]
		if arr[i] < max_min_avg["min"]:
			max_min_avg["min"] = arr[i]
		max_min_avg["avg"] += arr[i]

	max_min_avg["avg"] /= float(n)

	return max_min_avg

inp_arr = [5, 8, 2, 14, 25, 9]

print get_max_min_avg(inp_arr)
