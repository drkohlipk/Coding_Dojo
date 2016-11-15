class Car(object):
	def __init__(self, price, speed, fuel, mileage):
		self.price = price
		self.speed = speed
		self.fuel = fuel
		self.mileage = mileage
		if price > 10000:
			self.tax = 0.15
		else:
			self.tax = 0.12
		self.display_all()

	def display_all(self):
		print('*'*10, self, '*'*10)
		print('Price:', self.price)
		print('Speed:', self.speed)
		print('Fuel:', self.fuel)
		print('Mileage:', self.mileage)
		print('Tax:', self.tax)
		print('*'*60)

orange_car = Car(2000, '35mph', 'Full', '15mpg')
blue_car = Car(2000, '5mph', 'Not Full', '105mpg')
green_car = Car(2000, '15mph', 'Kind of Full', '95mpg')
purple_car = Car(2000, '25mph', 'Full', '25mpg')
red_car = Car(2000, '45mph', 'Empty', '25mpg')
yellow_car = Car(20000000, '35mph', 'Empty', '15mpg')
