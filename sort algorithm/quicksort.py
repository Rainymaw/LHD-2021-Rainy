#Quicksort algorithm for sorting an array, let's décortiquer la task en mini-tasks.

#-Have an array

from os import system, name 

testArray = [14,10,12,25,10,46,78,20,36,45,12,19,11,2,8,7,6,33,35,39]

taille = len(testArray) - 1


'''Quicksort partitions an array and then calls itself recursively 
twice to sort the two resulting subarrays. 
This algorithm is quite efficient for large-sized data sets 
as its average and worst-case complexity are O(n2), respectively. '''

#part one : calculate a new pivot

#step one : chose the highest value.

pivot = testArray[taille]

#step two : take a left and right index variable.
left = 0
right = taille

counter = 0


def calculPivot(left,right,pivot):
    leftpointer = left
    rightpointer = right - 1
    #step three :  make the index move to right and left
    while True:
        #left is always lower than pivot
        while testArray[leftpointer] < pivot:
            leftpointer +=1
        #Right is always higher than pivot
        while rightpointer > 0 and testArray[rightpointer] > pivot:
            rightpointer -= 1

        #If left >= pivot and Right <= pivot then we swap them
        if leftpointer >= rightpointer:
            break
        else:
            testArray[leftpointer],testArray[rightpointer] = testArray[rightpointer],testArray[leftpointer]
            leftpointer +=1
            rightpointer -=1
        #If left >= right then we have our new pivot
        
    testArray[leftpointer], testArray[right] = pivot, testArray[leftpointer]
    
    return leftpointer

#Part two : recursivity

def quicksort(left, right):
    if right - left <=0:
        return
    else:
        pivot = testArray[right]
        partition = calculPivot(left,right,pivot)
        quicksort(left, partition-1)
        quicksort(partition+1,right)

        
quicksort(left,right)

print(testArray)