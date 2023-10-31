//string revstr in recursion
#include <stdio.h>
#include <string.h>

void stringReverse(char *Str)
{
if(*Str)
{
stringReverse(Str + 1);
printf("%c", *Str);
}
}
 
int main()
{
  char Str[100];
 
  printf("Please Enter any String to Reverse =  ");
    scanf("%s",&Str);
 
  printf("\nString after Reversing = ");
  stringReverse(Str);
   printf("\n");
   return 0;
}
