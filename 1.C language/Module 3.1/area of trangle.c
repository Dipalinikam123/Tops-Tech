//find area of trangle
#include<stdio.h>
int main()
{
  float area,height,base;
  
  printf("Enter the height:-");
  scanf("%f",&height);
  
  printf("Enter the breadth:-");
  scanf("%f",&base);
  
  area=(height*base)/2;
  
  printf("Area of trangle is:-%f",area);
  
  return 0;
  
}
