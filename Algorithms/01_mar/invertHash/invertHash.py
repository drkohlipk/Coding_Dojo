def invert_hash(assoc_arr):
	new_dict = {}
	for key in assoc_arr:
		new_dict[assoc_arr[key]] = key

	return new_dict

ex_dict = {
	"name": "Zaphod",
	"charm": "high",
	"morals": "dicey"
}

print invert_hash(ex_dict)
