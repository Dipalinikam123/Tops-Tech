//find max number using friend function

#include<iostream>
using namespace std;

class mx
{
   int a,b;
   public:
    mx()
   	{
   		cout<<"Enter the value of a & b:-";
   		cin>>a>>b;
	}
   	friend void num(mx);
};
void num(mx y)
{
	if(y.a>y.b)
		cout<<"a is maximum number  "<<y.a;
	else
	    cout<<"b is maximum number  "<<y.b;
}
int main()
{
   mx obj;
   num(obj);
   return 0;
}
