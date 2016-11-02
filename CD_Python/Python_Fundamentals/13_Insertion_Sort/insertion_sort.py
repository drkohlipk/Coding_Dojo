import datetime
import random

##########populate a list of 100 random values from 0 to 10000#########
def populate():
	randos = [] #create empty list
	for n in range(100): #from 0 to 99...
		randos.append(random.randint(0,10000)) #append random values to the randos list
	return randos

##########sort the randomly populated list#########
def ins_sort(arr):
	minimum = 0
	for i in range(0, len(arr)-1): #for the length of arr...
		if arr[i] > arr[i+1]: #if the current value at index i is less than the value ahead of it...
			minimum = arr[i+1] #make that value the new minimum
			for j in range(i, -1, -1): #starting at the current i value, iterate backwards back to 0...
				if minimum < arr[j]: #if the minimum value is less than the current j index value...
					if j == 0: #if j is index 0...
						arr[j+1] = arr[j] #move 0 to index of 1
						arr[j] = minimum # set minimum to be the new index 0
					else: #if j isn't index 0...
						arr[j+1] = arr[j] #move the value at index j up one
				else: #if the minimum value isn't less than the current j index value...
					arr[j+1] = minimum #insert the minimum value after the current j index value
					break #and break the j loop
	return arr

new_Array = populate() #make your random list
a = datetime.datetime.now() #start the clock!
sorted_Array = ins_sort(new_Array) #sort the random list
b = datetime.datetime.now() #stop the clock!
c = b - a #find the time delta

print sorted_Array
print "Completed in", c.microseconds, "microseconds"
