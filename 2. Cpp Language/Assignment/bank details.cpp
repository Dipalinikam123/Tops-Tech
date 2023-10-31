//bank details
#include<iostream>
using namespace std;

class bank
{
	string name;
	int acno;
	string typeac;
	double balance;
	
	public:
		getinfo()
		{
			cout<<"Enter the name of depositer:-";
			cin>>name;
			cout<<"Enter the account number:-";
			cin>>acno;
			cout<<"Enter the type of account:-";
			cin>>typeac;
		}
		
		
	
};
