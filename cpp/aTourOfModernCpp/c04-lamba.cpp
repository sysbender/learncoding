#include <iostream>
#include <map>
#include <vector>
#include <algorithm>
#include <functional>

using namespace std;

// anonymous function

int main(){

    vector<int> scores { 8, 2, 4, 1};
    for_each( begin(scores) , end(scores) , 
        [] (int n) -> float {
            cout << n << endl;
            return n;
        }
    );


    //capturing value of variable : = for value, & for reference
    auto zero = 0;

    auto is_positive = [zero](int n){
        return n>zero ;
    };

    cout <<boolalpha << is_positive(-1) <<endl;   // print true/false 


    // recursion - must not use auto for : function<int(int)>
    function<int(int)> fib = [&fib] (int x) {
        return x <2 ? 1 : fib(x-1) + fib(x-2); 
    };

    cout <<fib(8) << endl;

    return 0;
}