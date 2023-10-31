//ATM
#include<iostream>
using namespace std;

class ATM
{
  public:
  	int date;
  	int y=1,n=0;
  	int num,pin=12345;
  	int ch;
  	int rs;
  	int acno;
  	string name,city,branch;
  	int bal,dep,with;
  	
  	void dis()
  	{
  	  cout<<"********* Welcome To ATM ********** \n";
	   cout<<"\t\t-------------------\n";
	   
	   cout<<"\t\tEnter the date:- ";
	   cin>>date;
	   
	   cout<<"\t\t-------------------\n";
	   cout<<"***************************************\n";
	}
	
	void dis2()
	{
		cout<<"Press 1 and Then press Enter to Access your account via pin number "<<endl;
		cout<<" or "<<endl;
		cout<<"press 0 and press Enter to get help "<<endl;
		cin>>ch;
		
		switch(ch)
		{
		   case 0:
		   	cout<<"\t\t*********** ATM account status ***************\n\n";
		   cout<<"You must have the correct pin number to access this account.see your ";
		   cout<<"bank representative for assistance during bank opening hours ";
		   cout<<"Thanks for, your choice today!!";
		   
		   cout<<"press any enter key.....";
		   cin>>y;//optional

		   
		   break;
		   case 1:
		     cout<<"Your pin is 12345"<<endl;
		     cout<<"Enter your acc pin access number![Only one attemt to allowed] :-"<<endl;
		     cin>>pin;
		      if(pin==12345)
		      {
		      	cout<<"\t\t------ ATM main menu screen---------\n";
		      	cout<<"Enter [1] To Deposite cash\n";
		      	cout<<"Enter [2] To withdraw cash\n";
		      	cout<<"Enter [3] To Balance Inquiry\n" ;
		      	cout<<"Enter [0] To Exit ATM\n";
		      	
		      	cout<<"PLEASE ENTER A SELECTION AND PRESS RETURN KEY:-\n";
		      	cin>>rs;
		      	
		      	switch(rs)
		      	{
			      
		      	case 1:
		      		cout<<"The name of the acc holders are: ";
		      		cin>>name;
		      		cout<<"The acc holder's address is:-";
		      		cin>>city;
		      		cout<<"The Branch laction is:-";
		      		cin>>branch;
		      		cout<<"Account number:-";
		      		cin>>acno;
		      		
		      		cout<<"\t---------------------------\n";
		      		
		      		cout<<"Present available balance: Rs.";
		      		cin>>bal;
		      		cout<<"Enter the amount to be Deposited: Rs.";
		      		cin>>dep;
		      		with=bal+dep;
		      		cout<<"Your new available Balanced amount is Rs."<<with<<endl;
		      		cout<<"\t\t\tThank you !";
		      		cout<<"Press any key to Return to the main Menu..";
		      		cin>>y;//optional
	
		      		break;
		      		
		      		case 2:
		      			cout<<"The name of the acc holders are: ";
		      	    	        cin>>name;
		      		        cout<<"The acc holder's address is:-";
		      		        cin>>city;
		      		        cout<<"The Branch laction is:-";
		      		        cin>>branch;
		      		        cout<<"Account number:-";
		      		        cin>>acno;
		      		        
		      		        cout<<"insufficient Available balance in your acc."<<endl<<endl;
		      		        cout<<" \t\t\t Sorry !!";
		      			break;
		      		
		       }
		        
		      }	
		      else
		      {
		      	cout<<"-------Thank you------\n";
		      	
		      	cout<<"you had made your attempt which failed !!! No more attempts allowed!! sorry!!";
		      	cout<<"press any key to continue...";
		      	cin>>y;//optional
		      }
		}	
	}
	
		
};
int main()
{
	ATM obj;
	obj.dis();
	obj.dis2();
}
