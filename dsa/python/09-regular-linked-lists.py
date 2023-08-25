
'''
data + pointer
* 
* root - first , pointer - is none for last node
* size :

* find(data)
* add(data)
* remove (data)
* print_list()

'''


class Node:
    def __init__(self, data, next=None , prev =None) -> None:
        self.data = data
        self.next_node = next
        self.prev_node = prev

    def __str__(self) -> str:
        return ( f"({str(self.data)})")
    

class LinkedList:
    def __init__(self, root=None) -> None:
        self.root = root
        self.size = 0


    def add(self, data):
        new_node = Node(data, next=self.root )
        self.root = new_node
        self.size += 1

    def find(self, data) -> object:
        this_node: Node | None = self.root
        while this_node is not None :
            if this_node.data == data:
                return this_node
            else:
                this_node = this_node.next_node
        return None
    
    def remove(self, data)-> bool:
        this_node:Node|None= self.root
        prev_node:Node|None = None

        while this_node is not None:
            if this_node.data == data: # found
                if prev_node is not None:
                    prev_node.next_node = this_node.next_node
                else: # data in root
                    self.root = this_node.next_node

                return True
            else:  # not found yet
                prev_node = this_node
                this_node = this_node.next_node

        return False # not found
    
    def __str__(self) -> str:
        result: str = ""
        this_node = self.root
        while this_node is not None:
            result += f'->{str(this_node)}'
            this_node = this_node.next_node

        return result


if __name__ == '__main__':
    x = LinkedList()
    x.add(5)
    x.add(8)
    x.add(12)

    print(x)
    print(x.size)
    x.remove(9)
    print(x.find(12))

