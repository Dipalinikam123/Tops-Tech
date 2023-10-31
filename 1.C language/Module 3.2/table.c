//print table through user input
#include<stdio.h>
#include<conio.h>
int main()
{
	int i,n;
	printf("Enter the number:-");
	scanf("%d",&n);
	
	for(i=1;i<=10;i++)
	{
		printf("%d*%d=%d\n",i,n,i*n);
	}
	getch();
	return 0;
}

