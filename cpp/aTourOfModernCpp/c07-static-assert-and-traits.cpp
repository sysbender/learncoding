#include "header.h"
using namespace std;

template<typename T, size_t size>
class Values{
    static_assert(size >1, "use a scalar");
    T Values[size];
};

template<typename T, typename U>
auto add(T t, U u){
    static_assert(is_integral<T>::value, "first value must be integral");
    return t + u;
}

int main(){

    Values<int,3 > stuff;
    cout <<"=================================" << endl;

    cout << "add = " << add(2, 3.10) << endl; 

    return 0;
}