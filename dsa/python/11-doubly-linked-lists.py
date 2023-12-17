
class Node:
    def __init__(self , data, prev = None, next = None) -> None:
        self.data = data
        self.prev: Node|None = prev
        self.next: Node|None = next

