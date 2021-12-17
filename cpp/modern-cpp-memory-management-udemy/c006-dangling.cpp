#include <iostream>
using namespace std;

class Foo{

};

class Bar{

    private:
        Foo * m_foo;

    public:
        Bar(){
            m_foo = new Foo();
            cout <<"creating Bar at " << this << endl;

        }


        ~Bar(){
            delete m_foo;
            cout << "Destructing Bar at " << this << endl;

        }
};



int main(){
    Bar original;
    Bar copy = original;  // shalow copy, both Bar have the pointer to the same foo instance => call delete twice

    return 0;
}

/*
rule of three:
if you need to destrctor, you also need to implement copy constructor and copy assignment opreator.

*/

