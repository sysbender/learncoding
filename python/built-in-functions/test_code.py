import pytest

'''
Category	Function	Description

Code	    eval()	Returns the result of an evaluated statement.
Code	    exec()	For dynamic execution of code.
Compiling	compile()	Compiles source into code.

'''

# eval(expression, globals=None, locals=None)
# run one statement, and return value
def test_eval():
    assert eval('abs(-5)') ==5
    # remove all builtins from globals and add only abs
    assert eval("abs(-5)", {"__builtins__": None}, {'abs':abs}) == 5



# exec( str|object ,  globals=None, locals=None)
# run multiple statement, not return value
def test_exec():
    x=4
    exec("print(5)\nprint(6)"   )

    
# compile(source, filename, mode, flags=0, dont_inherit=False, optimize=-1)
''' 
mode
* exec
* eval
* single
'''
# python code => code object
def test_comple_str():
    c = compile('2+3 ==5', '', 'eval')
    eval(c)

def test_comple_bytes():
    c = compile(b'2+3 ==5', '', 'eval')
    eval(c)

def test_comple_ast():
    import ast
    ast_obj = ast.parse("print('hello')")
    c = compile(ast_obj, '', 'exec')
    exec(c)
