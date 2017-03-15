import re

def URLify(str):
	str = re.sub(r'\s', '%20', str)
	return str


# def URLify(str):
# 	str2 = ''
# 	for c in str:
# 		if c == ' ':
# 			str2 += '%20'
# 		else:
# 			str2 += c
# 	return str2

print URLify('Bob Hope and the cactus')
