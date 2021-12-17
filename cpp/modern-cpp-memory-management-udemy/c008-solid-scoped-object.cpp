#include <string>

using namespace std;

class Customer{

    private:
        string m_name;        

    public:
        Customer(string name) 
        :m_name(name){
            
        }

        string name(){
            return m_name;
        }

};

class Order{
    private:
        Customer m_customer;
    public:
        Order(Customer customer)
        :m_customer(customer)
        {

        }

        string print_summary(){
            return "Order by: " _ m_customer.name();
        }
};

/*

drawback of solid:
1. increasing the size of owning object
2. can not be optional
3. no polymorphism
*/