import datetime
import random

##########populate a list of 100 random values from 0 to 10000#########
def populate():
	randos = [] #create empty list
	for n in range(100): #from 0 to 99...
		randos.append(random.randint(0,10000)) #append random values to the randos list
	return randos

##########sort the randomly populated list...get min only#########
def sel_sort(arr):
	temp, idx, count = 0, 0, 0
	for i in range(0, len(arr)): #for the length of arr...
		idx = i
		for j in range(i, len(arr)): #iterate through arr...
			if arr[j] < arr[idx]: #if the current value is less than the current minimum...
				idx = j #set idx to the index of the current minimum
				count += 1 #count if else!
			else:
				count += 1 #count if else!
		temp = arr[i] #swap arr at index of i with the found minimum.
		arr[i] = arr[idx]
		arr[idx] = temp
	return arr, count

##########sort the randomly populated list...get min and max#########
# def sel_sort(arr):
# 	temp, idxMin, idxMax, count, currj = 0, 0, 0, 0, 0
# 	for i in range(0, len(arr)): #for the length of arr...
# 		idxMin = i
# 		idxMax = i
# 		for j in range(i, len(arr)): #iterate through arr...
# 			currj = j
# 			if arr[j] < arr[idxMin]: #if the current value is less than the current minimum...
# 				idxMin = j #set idx to the index of the current minimum
# 				count += 1 #count if else!
# 			elif arr[j] > arr[idxMax]: #if the current value is greater than the current maximum...
# 				idxMax = j #set idx to the index of the current maximum
# 				count += 1 #count if else!
# 		temp = arr[i] #swap arr at index of i with the found minimum.
# 		arr[i] = arr[idxMin]
# 		arr[idxMin] = temp
# 		temp = arr[currj] #swap the last value of arr with the found maximum.
# 		arr[currj] = arr[idxMax]
# 		arr[idxMax] = temp
# 	return arr, count

new_Array = populate() #make your random list
a = datetime.datetime.now() #start the clock!
sorted_Array = sel_sort(new_Array) #sort the random list
b = datetime.datetime.now() #stop the clock!
c = b - a #find the time delta

print sorted_Array[0]
print "You executed", sorted_Array[1], "if statements"
print "Completed in", c.microseconds, "microseconds"
