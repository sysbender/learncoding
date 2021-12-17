

#include "jarjar.h"

void simple_function(){

    throw exception() ;
}

int main(){

    try{
        JarJar *j = new JarJar();
        j->talk();
        simple_function();

        
        delete j;

    }catch(std::exception & e){
        cout << e.what() <<endl;
    }





    return 0;
}
