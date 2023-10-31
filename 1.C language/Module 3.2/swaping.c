//swap to number without using third number
#include<stdio.h>
#include<conio.h>
int main()
{
    
    printf("Before swapping...\n");
    int a,b;//10 20
    printf("Enter the value of a:-");
    scanf("%d",&a);
    printf("Enter the value of b:-");
    scanf("%d",&b);
    
    a=a+b; 
    b=a-b; 
    a=a-b; 
    
    printf("After swapping...\n");
    printf("a=%d\n",a);
    printf("b=%d\n",b);
    
    getch();  
    return 0;
}
