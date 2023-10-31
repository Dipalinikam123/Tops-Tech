// inline function in cpp
#include<iostream>
using namespace std;
class line
{
public:
int a,b;
int n;

inline void multi()
{
cout<<"Enter the value of a:-";
cin>>a;
cout<<"Enter the value of b:-";
cin>>b;
}
inline void dis()
{
cout<<"Multiplication is:- "<<a*b<<endl;
}
inline void cube()
{
cout<<"Enter the number to find cube:-";
cin>>n;
}
inline void cr()
{
cout<<"cube is:- "<<n*n*n;
}

};
int main()
{
line obj;
obj.multi();
obj.dis();
obj.cube();
obj.cr();
return 0;
}

