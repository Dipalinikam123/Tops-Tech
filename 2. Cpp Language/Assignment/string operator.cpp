#include<iostream>
#include<string.h>
using namespace std;

class sttr
{
	public:
		string s1[20];
		string s2[20];
		
		void datas(char str1[],char str2[])
		{
		// Initialize the string to class object
        strcpy(this->s1, str1);
        strcpy(this->s2, str2);
    	}
		
		void operator+();
		
};
void sttr::operator+()
{
	{
			cout<<"Concatenation:- "<<strcat(s1,s2);
	}
}
int main()
{
	sttr obj;
	obj.datas("hello","string");
	+obj;
	return 0;
}
