// c++ assesment food order

#include<iostream>
using namespace std;

class food
{
	public:
		
		string name;
		int n,que,num;
		int aa,ba,ca,da,ea,fa,ga,ha,ia,ja,ka,la,ma,oa,pa,za,ra,sa,sum;
		
		void info()
		{
			cout<<"----------Tops Tech. Fast Food-----------\n\n";
			cout<<"Please Enter Your Name:- ";
			cin>>name;
			cout<<"----------------------------------------\n";
			
			cout<<"What Would you like to order? \n\n";
			cout<<"----------MENU----------\n\n";			
		}
		
		void menu()
		{
			cout<<"1) Pizzas\n";
			cout<<"2) Burgers\n";
			cout<<"3) Sandwich\n";
			cout<<"4) Rolls\n";
			cout<<"5) Biryani\n";
			cout<<"===========================================\n";
		}
		
		void odr()
		{
			cout<<"Please Enter your choice:-"<<endl;
			cin>>n;
			
			if(n==1){
				cout<<"1. Margherita Pizza Rs:-150\n";
				cout<<"2. Italian Pizza Rs:-200\n";
			    cout<<"3. Deluxe veggie Pizza Rs:-249\n";
			    cout<<"4. Paneer paratha Pizza Rs:-349\n";
			    cout<<"===========================================\n";
			    
			    cout<<"Please Enter which Pizza you would like to have? ";
			    cin>>num;
			    cout<<"===========================================\n";
			//    int a,b,c,d;
			    
			    switch(num)
			    {
			    	case 1:
			    		cout<<"You selected Margherita Pizza..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						aa=150*que;
						cout<<"Ammount is:- "<<aa<<endl;
						cout<<"===========================================\n";
					break;	
					case 2:
						cout<<"You selected Italian Pizza..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ba=200*que;
						cout<<"Ammount is:- "<<ba<<endl;
						cout<<"===========================================\n";
					break;	
					case 3:
						cout<<"You selected Deluxe Pizza..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ca=249*que;
						cout<<"Ammount is:- "<<ca<<endl;
						cout<<"===========================================\n";
					break;	
					case 4:
						cout<<"You selected Paneer Paratha Pizza..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						da=349*que;
						cout<<"Ammount is:- "<<da<<endl;
						cout<<"===========================================\n";
					break;	
				}
			}
		    else if(n==2)
			    {
			        cout<<"1. Stuffed Bean Burger Rs:-159\n";
			    	cout<<"2. Cheese Burger Rs:-299\n";
			    	cout<<"3. Turkey Burger Rs:-209\n";
			    	cout<<"===========================================\n";
			    	
			    	cout<<"Please Enter which Burger you would like to have? ";
			        cin>>num;
			        
			    //    int e,f,g;
			        
			        switch(num)
			        {
			        case 1:
			    		cout<<"You selected Stuffed Bean Burger..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ea=159*que;
						cout<<"Ammount is:- "<<ea<<endl;
						cout<<"===========================================\n";
					break;	
					case 2:
			    		cout<<"You selected Cheese Burger..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						fa=299*que;
						cout<<"Ammount is:- "<<fa<<endl;
						cout<<"===========================================\n";
					break;	
					case 3:
			    		cout<<"You selected Turkey Burger..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ga=209*que;
						cout<<"Ammount is:- "<<ga<<endl;
						cout<<"===========================================\n";
					break;	
					}		
				}
				
				else if(n==3)
				{
					cout<<"1. Grilled cheese Sandwich Rs:-199\n";
					cout<<"2. Club Sandwich Rs:-239\n";
					cout<<"3. Submarine Sandwich Rs:-269\n";
					cout<<"===========================================\n";
					
					cout<<"Please Enter which Pizza you would like to have? ";
			        cin>>num;
			        
			//    int h,i,j;
			        
			    switch(num)
			        {
			        case 1:
			    		cout<<"You selected Grilled cheese Sandwich ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ha=199*que;
						cout<<"Ammount is:- "<<ha<<endl;
						cout<<"===========================================\n";
					break;
					case 2:
			    		cout<<"You selected Club Sandwich ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ia=239*que;
						cout<<"Ammount is:- "<<ia<<endl;
						cout<<"===========================================\n";
					break;
					case 3:
			    		cout<<"You selected Submarine Sandwich  ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ja=269*que;
						cout<<"Ammount is:- "<<ja<<endl;
						cout<<"===========================================\n";
					break;
					}
				}
				
				else if(n==4)
				{
					cout<<"1. Spring Roll Rs:-99\n";
					cout<<"2. Sweet Roll Rs:-119\n";
					cout<<"3. Chinese Roll Rs:-50\n";
					cout<<"4. Callifornia Roll Rs:-170\n";
					cout<<"===========================================\n";
					
					cout<<"Please Enter which Roll you would like to have? ";
			        cin>>num;
			        
			     //   int k,l,m,o;
			        
			        switch(num)
			        {
			        case 1:
			    		cout<<"You selected Spring Roll ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ka=99*que;
						cout<<"Ammount is:- "<<ka<<endl;
						cout<<"===========================================\n";
					break;
					case 2:
			    		cout<<"You selected Sweet Roll ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						la=119*que;
					cout<<"Ammount is:- "<<la<<endl;
					cout<<"===========================================\n";
					break;
						case 3:
			    		cout<<"You selected Chinese Roll ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ma=50*que;
					cout<<"Ammount is:- "<<ma<<endl;
					cout<<"===========================================\n";
					break;
						case 4:
			    		cout<<"You selected Callifornia Roll ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						oa=170*que;
					cout<<"Ammount is:- "<<oa<<endl;
					cout<<"===========================================\n";
					break;
					default:
						cout<<"You enreted wrong number\n";
					break;
					}
				}
				
				else if(n==5)
				{
				    cout<<"1. Hyderabadi Biryani Rs:-259\n";
					cout<<"2. Veg Biryani Rs:-199\n";
					cout<<"3. Chicken Biryani Rs:-359\n";
					cout<<"4. Fish Biryani Rs:-279\n";
					cout<<"===========================================\n";
					
					cout<<"Please Enter which Roll you would like to have? ";
			        cin>>num;
					
		
					
				switch(num)
					{
					  case 1:
			    		cout<<"You selected Hyderabadi Biryani..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						pa=259*que;
						cout<<"Ammount is:- "<<pa<<endl;
						cout<<"===========================================\n";
					break;
					case 2:
			    		cout<<"You selected Veg Biryani ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						za=199*que;
						cout<<"Ammount is:- "<<za<<endl;
						cout<<"===========================================\n";
					break;
					case 3:
			    		cout<<"You selected Chicken Biryani ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						ra=359*que;
						cout<<"Ammount is:- "<<ra<<endl;
						cout<<"===========================================\n";
					break;
					case 4:
			    		cout<<"You selected Fish Biryani ..\n";
						cout<<"Please Enter the quentity:-";
						cin>>que;
						sa=279*que;
						
						cout<<"Ammount is:- "<<sa<<endl;
						cout<<"===========================================\n";
					break;	
					}	
				}
				    else
				    {
					    cout<<"Not Available !!\n";
				    }
				
		}
		
		void rep()
		{
			   int y=1;
				   
				while(y>0 || y<0)
			       {
				      cout<<"Do you want to place more order:-";
				      cin>>y;
					 
				    if(y==0)
				    {
				    	cout<<"Your order will be delivered in 40 minutes\n\n";
				    	cout<<"Thank you for ordering From Tops Tech Fast Food\n\n";
				    	break;
					}
					else
					{
						menu();
				    	odr();
					}
				    
			        }
	    }			
};
int main()
{
	food obj;
	obj.info();
	obj.menu();
	obj.odr();
	obj.rep();
	return 0;
}
