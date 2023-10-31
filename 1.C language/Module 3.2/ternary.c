//even odd using ternary
#include<stdio.h>
#include<conio.h>
int main()
{
    int n;
    printf("Enter the number:-");
    scanf("%d",&n);
    
    (n%2==0) ? printf("%d Even numbers",n) : printf("%d Odd number",n);
    
    getch();
    return 0;

}
