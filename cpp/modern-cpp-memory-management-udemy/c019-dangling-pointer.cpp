
#include <iostream>
#include <memory>

using namespace std;

class Foo{

    public:
    Foo(){
        cout << "Creating foo at " << this << endl;
    }

    ~Foo(){
        cout << "destructing Foo at " << this << endl;
    }

};

class Bar{

    private:
        std::shared_ptr<Foo>   m_foo;
    public:

        Bar(){
            m_foo.reset(new Foo());
            cout << "creating Bar at" << this << endl;
        }

        ~Bar(){
            // delete m_foo;
            cout << "Destructing Bar at " << this << endl;
        }


};


int main(){

    Bar original;
    Bar copy = original;   // unique_ptr is not copyable
    return 0;
}