//assessment final
#include<stdio.h>
 int ch,qty,total;
   int i,y=1,n=0;
   int pi,bu,d,id,sum;
   int main()
{
 
 
   printf("\n.....WELCOME.....\n\n");
   printf("........MENU.........\n\n");
   
   printf("=======================\n\n");
   
   printf("[1].Pizza      price=180.00rs/pcs\n");
   printf("[2].Burger     price=100.00rs/pcs\n");
   printf("[3].Dosa       price=120.00rs/pcs\n");
   printf("[4].Idli       price= 50.00rs/pcs\n\n");
   
   printf("For more order's to press yes=1 or No=0\n..");

   
   printf("=======================\n");
   printf("Enter your choice..:-");
   scanf("%d",&ch);
 
   
   switch(ch)
   {
    case 1:
            printf("You have selected Pizza.\n");
            printf("Enter the quantity:-\n");
            scanf("%d",&qty);
        
               pi=180*qty;

printf("Amount is:-%d\n",pi);
printf("=======================\n");
            break;
    case 2:
            printf("You have selected Burger.\n");
            printf("Enter the quantity:-\n");
            scanf("%d",&qty);
           
               bu=100*qty;
            
printf("Amount is:-%d\n",bu);
printf("=======================\n");
            break;
    case 3:
    printf("You have selected Dosa.\n");
    printf("Enter the quantity:-\n");
            scanf("%d",&qty);
           
               d=120*qty;
            
printf("Amount is:-%d\n",d);
printf("=======================\n");
    break;
    case 4:
    printf("You have selected Idli.\n");
    printf("Enter the quantity:-\n");
            scanf("%d",&qty);
           
               id=50*qty;
            
printf("Amount is:-%d\n",id);
printf("=======================\n");
    break;
    default:
    printf("Dish not available");
  break;
}




while(y>0 || y<0)
  {
 
   printf("Do you want place more orders ? (y/n):-");
   scanf("%d",&y);
   
    if(y==0)
   {
   	sum=pi+bu+d+id;
   	printf("Total payment you have to paid:-%d\n",sum);
    printf("THANK YOU");
    break;
   }
   
 
   printf("=======================\n");
   printf("Enter your choice..:-");
   scanf("%d",&ch);
   
   switch(ch)
   {
    case 1:
            printf("You have selected Pizza.\n");
            printf("Enter the quantity:-\n");
            scanf("%d",&qty);
            
               pi=180*qty;
            
printf("Amount is:-%d\n",pi);
printf("=======================\n");
            break;
    case 2:
            printf("You have selected Burger.\n");
            printf("Enter the quantity:-\n");
            scanf("%d",&qty);
            
               bu=100*qty;
            
printf("Amount is:-%d\n",bu);
printf("=======================\n");
            break;
    case 3:
    printf("You have selected Dosa.\n");
    printf("Enter the quantity:-\n");
            scanf("%d",&qty);
          
               d=120*qty;
            
printf("Amount is:-%d\n",d);
printf("=======================\n");
    break;
    case 4:
    printf("You have selected Idli.\n");
    printf("Enter the quantity:-\n");
            scanf("%d",&qty);
            
               id=50*qty;
            
printf("Amount is:-%d\n",id);
printf("=======================\n");
    break;
    default:
    printf("Dish not available\n");
  break;  
      }
  }
   return 0;    
 }

