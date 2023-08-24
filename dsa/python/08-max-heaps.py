
'''
complete binary tree
every node <= its parent


- push : insert in O(log n)
- peek: get max in O(1)
- pop: remove max in O(log n)


i = 4  # index 4
parent(i) = i/2 =2
left child (i) =  i *2 =8
right child (i) =  i * 2 +1 = 9

'''

# push
'''
1. append to the end
2. float/bubble up it - compare with parent, to see if needed to swap the place
'''



# peek  - return heap[1]


#pop
'''
move max to the end of arry
delete it
Bubble down the item at index 1 to its proper position
return max
'''


# public func : push, peek, pop
# private func: swap, __floatUp, __bubbledown, __str
class MaxHeap:
    def __init__(self, items=[]) -> None:
        super().__init__()
        self.heap = [0]  # the first element, won't use
        for item in items:
            self.heap.append(item)
            self.__floatUp( len(self.heap) - 1)  # float up the last value in the list

    def push(self, data):
        self.heap.append(data)
        self.__floatUp( len(self.heap) - 1)

    def peek(self):
        if len(self.heap) >1:
            return self.heap[1]
        else:
            return None
    

    def pop(self):
        if len(self.heap) > 2:
            self.__swap(1, len(self.heap)-1 )
            max = self.heap.pop()
            self.__bubbleDown(1)
        elif len(self.heap) == 2:
            max = self.heap.pop()
        else:
            max = None
        return max


    def __swap(self, i, j):
        if len(self.heap) >=max(i,j):
            self.heap[i], self.heap[j] =  self.heap[j], self.heap[i]
        else:
            raise Exception("error - index out of bound for swapping")
        
    def __floatUp(self, index):
        parent = index//2
        if index <=1:  # alread is the top position
            return
        elif self.heap[index] > self.heap[parent]:
            self.__swap(index, parent)
            self.__floatUp(parent)  # recursively

    def __bubbleDown(self, index):
        left = index * 2
        right = index * 2 +1
        largest = index
        # find in(parent, left child, right child) , which one is the largest
        if len(self.heap)> left:
            if self.heap[largest] < self.heap[left]:
                largest = left

        if len(self.heap)> right:
            if self.heap[largest] < self.heap[right]:
                largest = right

        if largest != index:
            self.__swap(index, largest)
            self.__bubbleDown(largest)

    def __str__(self):
        return str(self.heap)


         

#

m = MaxHeap([95, 3,21])
m.push(10)
print(m)
print(m.pop())
print(m)
print(m.pop())

