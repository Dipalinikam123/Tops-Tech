//fibonacci series
#include<stdio.h>
#include<conio.h>
int main()
{
    int n,a=0,b=1,c;
    printf("Enter number of term:-");
    scanf("%d",&n);
    
    for(i=1;i<=n;i++)
    {
    	printf("%d",a);
    	c=a+b;
    	a=b;
    	b=c;
    }
    getch();
    return 0;
    
}
