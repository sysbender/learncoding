#include <map> 
#include <vector>
#include <algorithm>
#include <functional>

#include <string>
#include <iostream>

using namespace std;

class Animal{

    protected:
        int legs = 4;

    public:


    explicit Animal(int legs)
    :legs(legs){

    }

    virtual int walk(int steps) {  
        return steps * 2;
    }

    virtual int run(int steps) final {  // final - forbid to override
        return steps * 10;
    }

};

class Human :public Animal{

    public:
    Human() :Animal(2){
    
    }
    Human(Human const &) = delete;  // prevent to use the copy constructor

    int walk(int steps) override{
        return steps * 3;
    }  // override - check the method signature
 

};



int main() {

    Human h;
    // Human h2{h};  // copy constructor - unless we have a smart pointer

    cout << h.walk(1) << endl;
    cout << h.run(1) << endl;




    return 0;
}
 