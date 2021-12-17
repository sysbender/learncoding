#pragma once
#include <iostream>
using namespace std;

class JarJar
{
    public:
    //constructor
    JarJar(){
        cout << "Constructing JarJar at " << this << endl;
    }

    //destructor
    ~JarJar(){
        cout << "Deleting JarJar at " << this << endl;
    }

    //copy constructor
    JarJar(const JarJar & old){
        cout << "Copy Constructing JarJar at " <<   endl;
    }
 

    //copy assignment operator
    JarJar & operator=( const JarJar & old ){
         cout << "Copy Assignment JarJar at " <<   endl;
         return *this;
    }


    //move constructor
    JarJar(JarJar && old){
        cout << "Move constructing JarJar " << endl;
    }

    //move assignment operator

    JarJar & operator=(  JarJar && old ){
         cout << "Move Assignment JarJar at " <<   endl;
         return *this;
    }

    void talk(){
        cout << "jarjar talks!" <<endl;
    }


};

