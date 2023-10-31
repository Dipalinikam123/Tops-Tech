//factorial number
#include<stdio.h>
#include<conio.h>
int main()
{
   int n,f=1;
   
    printf("Enter the number:-");
    scanf("%d",&n);
    
    while(n>0)
    {
    	f=f*n;
    	n--;
    }
   
    printf("factorial number is:-%d",f);
    
    getch();
    return 0;
    
}

//6
//1*2*3*4*5*6=
