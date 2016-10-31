print "Hello World!"


# a = [2,4,5,6,7]
# b = 5
#
# def multByB(arr, Y):
#     for i in range(5):
#         arr[i] *= Y
#     print arr
#
# multByB(a, b)
#
# print "Your name is", a
# print "You are", b, "years old"
#
my_list = [2,3,34,5]
my_tuple = (1,2,3,4,5)

new_list = list(my_tuple)
new_tuple = tuple(my_list)

print(new_list)
print(list(reversed(new_tuple)))
