//add,sub,multi,div,modulo, simple calculator
#include<stdio.h>
#include<conio.h>
int main()
{
	int a,b,c;
	
	printf("Enter the value of a:-\n");
	scanf("%d",&a);
	printf("Enter the value of b:-\n");
	scanf("%d",&b);
	c=a+b;
	printf("Addition is :-%d\n",c);
	printf("_______________________________\n");
	
	printf("Enter the value of a:-\n");
	scanf("%d",&a);
	printf("Enter the value of b:-\n");
	scanf("%d",&b);
	c=a-b;
	printf("Substraction is:-%d\n",c);
	printf("_______________________________\n");
	
	printf("Enter the value of a:-\n");
	scanf("%d",&a);
	printf("Enter the value of b:-\n");
	scanf("%d",&b);
	c=a*b;
	printf("Multiplication is:-%d\n",c);
	printf("_______________________________\n");
	
	printf("Enter the value of a:-\n");
	scanf("%d",&a);
	printf("Enter the value of b:-\n");
	scanf("%d",&b);
	c=a/b;
	printf("Division is:-%d\n",c);
	printf("_______________________________\n");
	
	printf("Enter the value of a:-\n");
	scanf("%d",&a);
	printf("Enter the value of b:-\n");
	scanf("%d",&b);
	c=a%b;
	printf("Modulo is:-%d\n",c);
	
	getch();
	return 0;
}
