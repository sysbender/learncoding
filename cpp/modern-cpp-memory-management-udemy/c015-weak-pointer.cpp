#include "student.h"

int main (){

    auto alice = make_shared<Student>("Alice");
    auto bob = make_shared<Student>("Bob");
    cout << "best friend of Alice is :" <<alice->NameBestFriend() <<endl;
    
    alice->SetBestFriend(bob);
    bob->SetBestFriend(alice);

    cout << "best friend of Alice is :" <<alice->NameBestFriend() <<endl;

    return 0;


}