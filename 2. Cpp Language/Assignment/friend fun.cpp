//swap two number using friend function 
#include<iostream>
using namespace std;

class num
{
    
	public:
		int a,b;
	num()
	{
		cout<<"Enter the value of a & b, Before swapping values:-";
		cin>>a>>b;
	}	
	friend void swa(num);
};
void swa(num x)
{
	x.a=x.a+x.b;
	x.b=x.a-x.b;
	x.a=x.a-x.b;
	
	cout<<"After swapping:-"<<"a:-"<<x.a<<endl<<"b:-"<<x.b;
}
int main()
{
	num obj;
	swa(obj);
	return 0;
}
