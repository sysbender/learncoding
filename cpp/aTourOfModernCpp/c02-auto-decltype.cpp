#include <algorithm>
#include <vector>
#include <map>
#include <functional>

#include <iostream>
using namespace std;


auto meaning_of_life(){
    return 42;
}


template <typename T, typename U>
auto add(T t, U u){   // -> decltype(t+u)  , required in c11, not c14
    return t + u;
}


// get type name

template <typename T> std::string type_name();



int main(){

    auto a = 0;
    auto b =  1.23f;
    auto c = L"hello";  // const wchar_t *
    auto d = {1,2,3} ;  // std::initilizer_list<int>
    initializer_list<int> i = {1,2,3};

    map<string, vector<double>> ticks;
    map<string, vector<double>>::iterator it = ticks.begin();
    auto it2 = ticks.end();
    
    //decltype 
    cout << add( 5, 3.14) << endl;

    cout << add(string("Hello") , " world") << endl;

    vector<double> values;
    typedef decltype(values.begin()) dvi;
    typedef decltype(42) myint;

    typedef decltype(42, 'c') mychar;


}
