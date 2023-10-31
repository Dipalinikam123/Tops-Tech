//assignment multiple inheritance
#include<iostream>
using namespace std;
class person
{
      string name;
      int age;
     
     public:
       void getinfo(string n,int a)
       {
        name=n;
        age=a;
       }
       void disinfo()
         {
           cout<<endl;
           cout<<"Name is "<<name<<endl;
           cout<<"Age is "<<age<<endl;
         }
};

class student:public person
{
      float percent;

       public:
       void studis(float p)
       {
           percent=p;
       }  
        void stuinfo()
       {  
          cout<<"Percentage is "<<percent<<endl;
          cout<<"_______________________________"<<endl;
          cout<<"_______________________________"<<endl;
       }
};
class teacher:public person
{

    float salary;
    public:
    void salaryinfo(float s)
    {
    salary=s;
    }
    void teacherinfo()
     {
      cout<<"salary is "<<salary;
     }
};
int main()
{
   student obj;
   cout<<".....Student Information.....";
   obj.getinfo("Dip",21);
   obj.disinfo();
   obj.studis(79.80);
   obj.stuinfo();
   teacher t;
   cout<<endl<<"....Teacher Information.....";
   t.getinfo("kajal",23);
   t.salaryinfo(20000);
   t.disinfo();
   t.teacherinfo();
   return 0;
}
