#####Short way#####
a = [1, 2, 5, 10, 255, 3]

print(sum(a))


#####Long way#####
sum = a[0]
for i in range(1,len(a)):
    sum += a[i]

print sum
