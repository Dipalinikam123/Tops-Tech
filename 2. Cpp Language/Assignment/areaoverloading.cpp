// find area of rectangle, circle, triangle using function overloading
#include<iostream>
using namespace std;
class overload
{
	public:
		//rectangle:
    int area(int l,int w)
    {
    	return l*w;
	}
        // circle:
    int area(int r)
    {
    	return 2*3.14*r*r;
	}
        //triangle:	
    int area(float h,float b,int c)
	{
		return (h*b)/c;
	}
};
int main()
{
	overload obj;
	cout<<"Area of rectangle :-"<<obj.area(4,3)<<endl;
	cout<<"Area of circle:-"<<obj.area(6)<<endl;
	cout<<"Area of triangle:-"<<obj.area(2,4,2);
	return 0;
}
