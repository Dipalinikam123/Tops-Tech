// factorial using recursion function
#include<stdio.h> 
int fact(int n);
int main()
{
	int n;
	printf("Enter the value:-");
	scanf("%d",&n);
	printf("Factorial is:-%d",fact(n));
	return 0;
}
int fact(int n)
{
	if(n==0)
	{
		return 1;
	}
	int factn=fact(n-1);
	int factN=factn*n;
	return factN;
}
