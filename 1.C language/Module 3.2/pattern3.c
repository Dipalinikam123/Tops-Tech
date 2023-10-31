//     *
//    ***
//   *****
//  *******
// *********

#include<stdio.h>
int main()
{
int i,j,a,n;

printf("Enter the number:-");
scanf("%d",&n);

for(i=1;i<=n;i++)
{
for(a=n;a>=i;a--)
{
printf(" ");
}
for(j=1;j<=2*i-1;j++)
{
printf("*");
}
printf("\n");
}
return 0;
 }

