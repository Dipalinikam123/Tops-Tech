// pattern 3
/*
 A 
 B C 
 D E F
 G J I J
 K L M N O */
#include<stdio.h>
int main()
{
    char i,j,count='A'; 
    for(i='A';i<='E';i++)
     {
      for(j='A';j<=i;j++)
         {
           printf("%c",count);
           count++;
         }
           printf("\n");
     }
        return 0;
}
