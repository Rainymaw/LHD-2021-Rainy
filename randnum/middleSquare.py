#Middle-Square method for random num generation.
import time
seed = int(time.time())

length= len(str(seed))
if length % 2 != 0:
    seed = int(str(seed).zfill(1))
    length= len(str(seed))

number = seed
seenNumber = set()

upperBound = length + length//2
lowerBound = length//2
counter = 0


for i in range(10):
    counter +=1
    seenNumber.add(int(number))
    number = str(number * number).zfill(len(str(seed))*2)
    number = int(number[lowerBound:upperBound])
    
print("the random number is : ",number)

