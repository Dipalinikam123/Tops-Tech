//simple calculator using class using constructor
#include<iostream>
using namespace std;

class calculator
{
public:
int a,b;
calculator()
{
  cout<<"Enter the value of a:-";
  cin>>a;
  cout<<"Enter the value of b:-";
  cin>>b;
}
void calsi()
{
   cout<<"Addition is: "<<a+b<<endl;
   cout<<"Subtraction is:- "<<a-b<<endl;
   cout<<"Multiplication is:- "<<a*b<<endl;
   cout<<"Division is:- "<<a/b<<endl;
}
};
int main()
{
         calculator ob;
ob.calsi();
return 0;

}
