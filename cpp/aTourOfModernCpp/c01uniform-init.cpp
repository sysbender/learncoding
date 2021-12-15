#include <iostream>
#include <vector>
#include <map>
#include  <algorithm>

#include <functional>

using namespace std;


struct Address {

};

struct Person {
	string name;
	int age;

	Address address;

	Person (const string & name , int age)
	:name(name), 
	age(age) {

	}

	explicit Person(const Address& address) :address(address) {

	}

};

struct Exchange {
	int count;
	float rates[2];

	Exchange(initializer_list<float> r) {
		if (r.size() < 2) { return; }
		auto i = r.begin();
		rates[0] = *i;
		i++;
		rates[1] = *i;
	}
};


int main() {
 

	int a{ 1 };
	string s{ "hello world" };
	vector<int> values {1,2,3};

	map<string, string> countries{
		{ "ca" , "cananda"},
		{"us", "united"}
	};

	Person p{ "jason" , 123 };
	Person person{ Address() };

	Exchange e{ 1,2,3 };


	cout << a << endl;
	cout << s << endl;
	cout << countries["ca"] << endl;
	cout << p.name << endl;

	cout << e.rates[1] << endl;
	return 0;
}