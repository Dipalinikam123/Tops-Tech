//leap year program

#include<stdio.h>
int main()
{
  int year;
  
  printf("Enter the year:-");
  scanf("%d",&year);
   
   if((year%4==0)&&((year%400==0)||(year%100!=0)))
   {
   	printf("%d This is leap year..",year);
   }

   else
   {
   	printf("%d this is not leap year..",year);
   }
   
  return 0;
}
