#include <iostream>
#include <memory>

using namespace std;
class Student{

    private:
        weak_ptr<Student> m_bestFriend;
        string m_name;

    public:

        Student(string name) 
        :m_name (name){
            cout << "Creating student =" << m_name << endl;
        }

        ~Student(){
            cout << "Destructing student = " <<m_name << endl;
        }

        void SetBestFriend( shared_ptr<Student> bestFriend) {
            m_bestFriend = bestFriend;
        }

        string Name() const {
            return m_name;
        }

        string NameBestFriend() const {
            auto s_bestFriend = m_bestFriend.lock();
            if (s_bestFriend){
                return s_bestFriend->m_name;
            }
            return "";

        }


};