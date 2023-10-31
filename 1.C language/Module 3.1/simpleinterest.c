//simple interest program
#include<stdio.h>
int main()
{
   float SI,p,r,t;
   printf("Enter the principle(ammount):-");
   scanf("%f",&p);
   printf("Enter the rate:-");
   scanf("%f",&r);
   printf("Enter the time in year:-");
   scanf("%f",&t);
   
   SI=(p*r*t)/100;
   
   printf("Simple Interest is:-%f",SI);
   
   
   return 0;
}
