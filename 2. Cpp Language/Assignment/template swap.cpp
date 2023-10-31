//template swap two numbers 
#include<iostream>
using namespace std;
template<class t>

void num(t a,t b)
{
	cout<<"Enter the value of a:-";
	cin>>a;
	cout<<"Enter the value of b:-";
	cin>>b;
	
    t c;
    c=a;
    a=b;
    b=c;
	
	cout<<"After swapping "<<"a is:- "<<a<<endl<<"b is:- "<<b;
}
int main()
{
	int a,b;
	num(a,b);
	return 0;
}
