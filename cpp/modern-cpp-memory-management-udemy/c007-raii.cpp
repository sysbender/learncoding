
#include <iostream>
#include <fstream>

using namespace std;
void old_way(){
    FILE * f = fopen("readme.md", "r");
    if(nullptr !=f){
        // access
        
        fclose(f);

    }

}

void raii_way(){
    std::ifstream f("readme.md", std::ios::in);
    std::cout << f.rdbuf() ;
}

int main(){

    raii_way();
    return 0;
}