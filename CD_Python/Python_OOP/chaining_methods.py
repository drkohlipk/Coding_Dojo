class Bike(object):
	def __init__(self):
		self.price = 150
		self.max_speed = '25mph'
		self.miles = 0

	def displayInfo(self):
		print('*'*50)
		print(self.price)
		print(self.max_speed)
		print(self.miles)
		print('*'*50)
		return self

	def ride(self):
		print('Riding')
		self.miles += 10
		return self

	def reverse(self):
		print('Reversing')
		if self.miles <= 0:
			print('Unable to reverse! Ride first...')
		else:
			self.miles -= 5
		return self

red_bike = Bike()
red_bike.ride().ride().ride().displayInfo()

blue_bike = Bike()
blue_bike.ride().ride().reverse().reverse().displayInfo()

green_bike = Bike()
green_bike.reverse().reverse().reverse().displayInfo()
