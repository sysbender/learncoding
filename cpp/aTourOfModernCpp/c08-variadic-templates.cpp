#include "header.h"
using namespace std;


// teminating condition 
auto sum() {
    return 0;
}


template<typename H, typename... T>
auto sum ( H h, T... t){
    return h+ sum(t...); 

}


auto sum_product(double a, double b){
    return make_pair(a+b, a*b);
}


int main(){

   auto s = sum( 2 , 1.23);
   cout << s << endl;

   auto vaules = sum_product(3,4);
   // old way = get one from pair
   auto d = get<0>(vaules);

    // new way
   float f;
   tie(f, ignore) = sum_product(3,4) ;

   cout << "sum (first)= " << f << endl;




}