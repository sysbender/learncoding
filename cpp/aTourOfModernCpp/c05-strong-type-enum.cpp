#include "header.h"

using namespace std;

// - old enum : auto cast to int, in the global scope
enum OldColor{ 
    red, green, blue
};

OldColor oc = green;

int oc1 = oc;

// new enum
enum class NewColor{
    red, green, blue, black
};

NewColor nc = NewColor::black;
 //  int nc1 = nc;  // not working 


int main(){

    cout <<"hello"<<endl;
    return 0;

}