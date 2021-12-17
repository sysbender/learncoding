#include "jarjar.h"

int main(){


    // using the stack
    {
        JarJar binks;
    }

    // using free store
    JarJar * p = new JarJar();
    delete p;


    //using heap -deprecated:  not calling constructor and destrctuor
    JarJar * h = (JarJar*) malloc( sizeof(JarJar));
    h->talk();
    free(h);


    return 0;
}