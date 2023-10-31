//function overloading
#include<iostream>
using namespace std;
class overloading
{
    public:
        void op(int a,float b,int c,int d,int e)
        {
         cout<<"addition is:- "<<a+b+c+d+e<<endl;
        }
        void op(int a,int b,int c)
        {
        cout<<"subtraction is:- "<<a-b-c<<endl;
        }
        void op(int a,int b,int c,double d)
        {
        cout<<"Multiplication is:- "<<a*b*c*d<<endl;
        }
        void op(double a,int b)
        {
        cout<<"Division is:- "<<a/b<<endl;
        }
};
int main()
{
overloading ob;
ob.op(2,3,8,9,5);
ob.op(5,3,4);
ob.op(4,2,7,4);
ob.op(9,3);
return 0;
}

