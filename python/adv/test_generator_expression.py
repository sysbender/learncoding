

def test_gen():
    it = (len(x) for x in ['hello', 'foo', 'hi',  'bar'])
    print(list(it))
