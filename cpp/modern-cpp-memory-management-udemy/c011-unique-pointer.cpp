#include <iostream>
#include <memory>
#include "jarjar.h"

using namespace std;

auto create_jj(){

    return std::make_unique<JarJar>();
}

void pass_jj_reference( const std::unique_ptr<JarJar> & r_jj){  //
    r_jj->talk();
}

void pass_jj_move( std::unique_ptr<JarJar>  r_jj){
    r_jj->talk();
}

void use_jj(){

    auto jj = create_jj();
    pass_jj_reference(jj);
}

void use_jj_moving(){
    auto jj=create_jj();
    pass_jj_move(std::move(jj));   //move in the parameter, instead of copy

}




int main(){

    //auto j =  std::make_unique<JarJar>();  // template argument

    //auto j = std::unique_ptr<JarJar>(new JarJar());
    //j->talk();

    use_jj_moving();

    return 0;

    auto * p = new JarJar();
    std::unique_ptr<JarJar> u;
    cout << "unique ptr should be empty :"<<u.get() <<endl;
        u->talk();
    u.reset(p);
    cout << "unique ptr should not be empty :"<<u.get() <<endl;
    p->talk();
    u->talk();
 
    return 0;
}