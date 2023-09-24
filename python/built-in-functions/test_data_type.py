
'''
Boolean	    bool()	    Returns False if omitted or False values, otherwise True.
Containers	frozenset()	Returns a new frozenset object type.
Dictionary	dict()	    Create a new dictionary object.
Lists	    list()	    Create a mutable list object.
Sets	    set()	Create a set object type.
Slice	    slice()	Returns a slice object from another object.
'''


def test_bool():
    assert True == bool([0, False])

# fronzeset imutable/hashtable (iterable)
def test_fronzenset():
    f = frozenset([1,2,3])
    set( [1,2, frozenset([1,2])] ) # hashable


''' 
dict(**kwarg)
dict(mapping, **kwarg)
dict(iterable , **kwarg)  - iterable of tupe/pair
'''

def test_dict():
    # **kwargs
    d1 = dict( name='john', age=12)
    assert d1['name']== 'john'
    # mapping (dict is the only standard mapping)
    d2 = dict( {'name':'john', 'age':12} )
    assert d2['name']== 'john'

    d3 = dict( [ ('name', 'john') , ('age', 12)  ])
    assert d3['name']== 'john'

    d4 = dict( zip( ['a','b','c'] , [1,2,3]  ))
    assert d4['a'] ==1




# list([iterable])

def test_list():
    # iter
    assert list( iter( range(0,3)) ) == [ 0,1,2]

    # map
    assert list( map(str, range(0,3)) ) == ['0', '1', '2']

