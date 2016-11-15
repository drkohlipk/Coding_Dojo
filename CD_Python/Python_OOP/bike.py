import random

class Bike(object):
	def __init__(self):
		self.price = 150
		self.max_speed = '25mph'
		self.miles = 0

	def displayInfo(self):
		print(self.price)
		print(self.max_speed)
		print(self.miles)

	def ride(self):
		print('Riding')
		self.miles += 10

	def reverse(self):
		print('Reversing')
		if self.miles <= 0:
			print('Unable to reverse! Ride first...')
		else:
			self.miles -= 5

red_bike = Bike()
red_bike.ride()
red_bike.ride()
red_bike.ride()
red_bike.displayInfo()

blue_bike = Bike()
blue_bike.ride()
blue_bike.ride()
blue_bike.reverse()
blue_bike.reverse()
blue_bike.displayInfo()

green_bike = Bike()
green_bike.reverse()
green_bike.reverse()
green_bike.reverse()
green_bike.displayInfo()
