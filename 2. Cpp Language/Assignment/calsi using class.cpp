//simple calculator using class
#include<iostream>
using namespace std;

class calculator
{
public:
int a,b;

void add()
{
             cout<<"Enter the value of a:-";
             cin>>a;
             cout<<"Enter the value of b:-";
             cin>>b;
             cout<<endl<<"Addition is:-"<<a+b<<endl<<endl;
}
void sub()
{            
             cout<<"subtraction is:-"<<a-b<<endl<<endl;
}
void multi()
{
   cout<<"Multiplication is:-"<<a*b<<endl<<endl;
}
void div()
{
  cout<<"division is:-"<<a/b<<endl<<endl;
}
};
int main()
{
calculator a;
a.add();
a.sub();
a.multi();
a.div();
return 0;
}
