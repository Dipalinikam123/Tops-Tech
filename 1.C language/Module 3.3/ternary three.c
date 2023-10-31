#include<stdio.h>
int main()
{
	int a,b,c;
	printf("Enter the value of a:-");
	scanf("%d",&a);
	printf("Enter the value of b:-");
	scanf("%d",&b);
	printf("Enter the value of c:-");
	scanf("%d",&c);
	
	a>b && a>c && b>c? printf("%d",a):printf("%d",b):printf("%d",c);
//	b>a && b>c? printf("%d",b):printf("%d",c);
	
}
