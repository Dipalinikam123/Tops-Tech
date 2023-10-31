 //single inheritance cricketer assignment in cpp
#include<iostream>
using namespace std;
class batsman
{
public:
  int runs;
  int matches;
  int notout;
  int battingavg;
  int dismissed;
  double average;
 
  void dis()
  {
  cout<<"Enter the Total Runs:- ";
  cin>>runs;
  cout<<"Enter the number of matches(innings):- ";
  cin>>matches;
  cout<<"Enter the NOT OUT number:- ";
  cin>>notout;
 
          dismissed=matches-notout;
         
          average=runs/dismissed;
  }

};
class cricketers:public batsman
{
public:
void input()
{
        cout<<endl<<"Total Runs are "<<runs<<endl;
        cout<<"Number of matches(innings) is  "<<matches<<endl;
        cout<<"NOT OUT innigs are "<<notout<<endl;
        cout<<"Number of times batsman dismissed "<<dismissed<<endl;
        cout<<"Batting average is(performance) "<<average<<endl;
}
};


int main()
{
    cricketers ob;
    ob.dis();
    ob.input();
    return 0;
}
