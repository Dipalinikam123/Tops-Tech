//sum of last & first 2 digit
#include<stdio.h>
int main()
{
int n,f,l,sum=0;
printf("Enter any number:-");  
scanf("%d",&n);

l=n%10;
while(n>10)
{
n=n/10;
}
f=n;
sum=f+l;
printf("%d",sum);

return 0;
}

