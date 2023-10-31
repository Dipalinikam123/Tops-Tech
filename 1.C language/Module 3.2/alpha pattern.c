/* pattern 2
 A 
 A B
 A B C 
 A B C D
 A B C D E */
 
 #include<stdio.h>
 int main()
 {
 	char ch;
 	printf ("Enter any alphabet:-");
 	scanf("%c",&ch);
 	int i,j;
 	
 	for(i='A';i<=ch;i++)
 	{
 	   for(j='A';j<=i;j++)
 	   {
 	   	printf("%c ",i);
	    }
	    printf("\n");
	 }
	 return 0;
  } 
 
