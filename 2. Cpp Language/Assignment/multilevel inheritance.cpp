
//multilevel inheritamnce in cpp
#include<iostream>
using namespace std;
class student
{
public:
int roll;
string name;

void getdata()
{
cout<<"Enter the name:-";
cin>>name;
cout<<"Enter the roll number:-";
cin>>roll;
}
void putdata()
{
cout<<"\n**********************************"<<endl;
cout<<endl<<"......Student Marksheet......"<<endl;
cout<<"Name is:                 "<<name<<endl;
cout<<"Roll number is:          "<<roll<<endl<<endl;
}
};
class exam:public student
{
public:
int math,phy,chem,eng,hindi;
double per;

void marks()
{

cout<<"Enter the marks of Mathematics:-";
cin>>math;
cout<<"Enter the marks of Physics:-";
cin>>phy;
cout<<"Enter the marks of Chemistry:-";
cin>>chem;
cout<<"Enter the marks of English:-";
cin>>eng;
cout<<"Enter the marks of Hindi:-";
cin>>hindi;
        }

void dismrks()
{
cout<<"Mathematics marks are:    "<<math<<endl;
cout<<"Physics marks are:        "<<phy<<endl;
cout<<"Chemistry marks are:      "<<chem<<endl;
cout<<"English marks are:        "<<eng<<endl;
cout<<"Hindi marks are:          "<<hindi<<endl;

}
};
class result:public exam
{
public:
void findp()
{
per=(math+phy+chem+eng+hindi)/5.0;
cout<<endl<<"Total percentage is:      "<<per<<"%"<<endl;
}

};
int main()
{
result obj;
obj.getdata();
obj.marks();
obj.putdata();
obj.dismrks();
obj.findp();
return 0;
}
