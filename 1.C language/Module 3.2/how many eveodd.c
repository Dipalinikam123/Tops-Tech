//take input from use & find how many even odd
#include<stdio.h>
#include<conio.h>
int main()
{
    int n,i;
    printf("Enter any number:-");
    scanf("%d",&n);
    
    printf("Even number's are..\n");
    for(i=1;i<=n;i++)
    {
    	if(i%2==0)
    	{
    	   printf("%d\n",i);	
	}
    }
    printf("Odd number's are...\n");
    for(i=1;i<=n;i++)
    {
    	if(i%2!=0)
    	{
    	   printf("%d\n",i);	
	}
    }
    getch();
    return 0;
}
