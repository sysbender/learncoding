#include <iostream>
#include <memory>
using namespace std;

class BaseClass{

    private:
    string m_name;

    public:

    BaseClass(string name)
    :m_name(name){
        cout << "constructing BaseClass = " << m_name << endl;
    }


    virtual ~BaseClass(){
        cout << "Destructing BaseClass = " << m_name << endl;
    }
};


class Derived: public BaseClass{
    private:
        unique_ptr<BaseClass> m_member;

    public:
        Derived()
        :BaseClass("Derived"),
        m_member(new BaseClass("Member")){
            cout << "Constructing Drived = " << "Derived ( Member)" << endl;
        }

        ~Derived(){
            cout << "Destructing Derived =" << "Derived ( Member)"<< endl;
        }


};



int main(){

    // Derived d;

    //Derived * p = new Derived();
    //delete p;

    BaseClass * p = new Derived();  // if the base class destructor is not virtual, only the base class destructor will be called, not the derived class destructor
    delete p;

    return 0;
}

/*
standard lib class don't have virtual destructor, so don't create subclass for them.
*/