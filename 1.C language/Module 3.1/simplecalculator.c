//simple calculator 
#include<stdio.h>
int main()
{
   int a,b;
   float c;
   printf("Enter the value of a:-");
   scanf("%d",&a);
   printf("Enter the value of b:-");
   scanf("%d",&b);
   
   c=a+b;
   printf("Addition is:-%f\n\n",c);
   c=a-b;
   printf("substraction is:-%f\n\n",c);
   c=a*b;
   printf("Multiplication is:-%f\n\n",c);
   c=a/b;
   printf("Division is:-%f\n\n",c);
   c=a%b;
   printf("Modulo is:-%f",c);
   
   return 0;
   	
}
