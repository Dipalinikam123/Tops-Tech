//find a area of circle
#include<stdio.h>
int main()
{
   float pi=3.14,r,area;
   printf("Enter the radius:-");
   scanf("%f",&r);
   
   area=pi*r*r;
   
   printf("Area of circle is:-%f",area);
   
   return 0;
}
