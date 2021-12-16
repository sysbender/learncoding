#include "header.h"

using namespace std;


template<typename Container>
void print(const Container& container){
    for(auto const & x: container){
        std::cout << x << " ";
    }
    std::cout << std::endl;
}

 

int main(){

    vector<int> v {1,2,3,4};

    // print - for legecy
    for( int i =0; i<v.size() ; i++){
        cout << v.at(i)<< ", ";
    }
    cout << endl;

    // print - for range
    for (auto &&i : v)
    {
        cout << i << ";";
    }
    cout <<endl;

    // modify
    for( int & i : v) {
        i = i * i;
    }

    print(v);
    // map
    map<string, int> histogram{ {"a", 1},{"b", 2}};
    for(const auto& kvp: histogram){
        cout << kvp.first <<" : " << kvp.second << "    ";
    }
    cout << endl;
    
    


    return 0;
}