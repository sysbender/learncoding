#include "header.h"
using namespace std;

class Address{
    public:
    Address(){}

    // copy constructor
    Address(const Address & a){
        cout << "address copied !" << endl;
    }


    // members
    int house;
    string city;
    string postcode;


};


Address create_address(int house, string postcode){
    Address address{};
    cout << "created address @" << &address <<endl;
    address.house =house;
    return address;
}


unique_ptr<Address> create_address_smart(int house, string postcode){
    auto a= make_unique<Address>();
     
    a->house = house;
    return a;

}

class Person{
    public:
    unique_ptr<Address> address;

    Person(){
        address = make_unique<Address>();
    }

};



int main(){
    auto my_address =  create_address(23, "H4Y2E5");
    cout << "main : created address @ " << &my_address << endl;

    auto my_address2  =create_address_smart(  23, "H4Y2E5") ;

    //unique_ptr<Address> a;

 


    return 0;
}