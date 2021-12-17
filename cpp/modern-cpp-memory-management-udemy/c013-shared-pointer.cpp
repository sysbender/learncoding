#include "jarjar.h"
#include <memory>
#include <iostream>

using namespace std;

int main(){

    //auto jj_u1 = std::make_unique<JarJar>();
    auto jj = std::make_shared<JarJar>();
    cout << "use count = "<< jj.use_count() << endl;
    cout << "jj = " << jj.get() <<endl ;

    

    auto jja = std::shared_ptr<JarJar>(new JarJar());
    cout << "jja = " << jja.get() <<endl ;
    cout << "use count = " << jj.use_count() << endl;


    std::shared_ptr<JarJar> jjr;
    cout << "jjr = " << jjr.get() << endl;

    jjr.reset(new JarJar());
     cout << "jjr = " << jjr.get() << endl;


    {
        auto jj2 = jj;
        jj2->talk();

        auto jj3 = jja;
        jj3->talk();
        cout << "use count = " << jj.use_count() << endl;
    }

    jj->talk();
    return 0;
}