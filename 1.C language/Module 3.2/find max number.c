// find max number
#include<stdio.h>
int main()
{
int a,b,c,d;
printf("Enter the values:-");
scanf("%d%d%d%d",&a,&b,&c,&d);

           
if(a>b && a>c && a>d )
{
printf("Max number is:-%d",a);
}
else if(b>c && b>d)
{
printf("Max number is:-%d",b);
}
else if(c>d)
{
 printf("Max number is:-%d",c);
}
else
{
printf("Max number is:-%d",d);
}

return 0;
}

