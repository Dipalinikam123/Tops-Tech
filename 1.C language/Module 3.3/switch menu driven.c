//switch statement in add,sum,div,multi(must be menu in driven)
#include<stdio.h>
int main()
{
printf("\n.......Menu......\n\n");
printf("choice 1.Addition\n");
printf("choice 2.Subtraction\n");
printf("choice 3.Multiplication\n");
printf("choice 4.Division\n\n");

int ch;
printf("Enter your choice:-");
scanf("%d",&ch);

int a,b;
printf("Enter value number 1:-");
scanf("%d",&a);
printf("Enter value number 2:");
scanf("%d",&b);

switch(ch)
{
case 1:
printf("Addition is:-%d",a+b);
break;
case 2:
printf("Subtraction is:-%d",a-b);
break;
case 3:
printf("Multiplication is:-%d",a*b);
break;
case 4:
printf("Division is:-%d",a/b);
break;
default:
   printf("Invalid Choice..!");
}
return 0;
}
