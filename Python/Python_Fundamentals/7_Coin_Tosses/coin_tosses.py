import random

def rando(times):
    random_num = 0
    heads = 0
    tails = 0
    coin = ""
    for i in range(1, times+1):
        random_num = round(random.random())
        if random_num == 0:
            tails += 1
            coin = "tail"
        if random_num == 1:
            heads += 1
            coin = "head"
        print "Attempt #{}: Throwing a coin... It's a {}!... So far, you have {} head(s) and {} tail(s).".format(i, coin, heads, tails)


rando(5000)
