import datetime
import random

def populate():
	randos = []
	for n in range(1, 101):
		randos.append(random.randint(0,10000))
	return randos

def bubble_sort(arr):
	temp = 0
	for i in range(0, len(arr)):
		for j in range(0, len(arr)-1):
			if arr[j] > arr[j+1]:
				temp = arr[j+1]
				arr[j+1] = arr[j]
				arr[j] = temp
	return arr



new_Array = populate()
a = datetime.datetime.now()
sorted_Array = bubble_sort(new_Array)
b = datetime.datetime.now()
c = b - a

print sorted_Array
print "Completed in", c.microseconds, "microseconds"
