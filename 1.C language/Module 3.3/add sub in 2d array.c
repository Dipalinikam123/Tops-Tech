//add sub multi using 2D array
#include<stdio.h>
int main()
{
	int r,c;
	printf("Enter the size of row's:-");
	scanf("%d",&r);
	printf("Enter the size of column:-");
	scanf("%d",&c);
	
	int a[r][c],i,j;
	printf("Enter First matrix element:-");
	
	for(i=0;i<r;i++)
	{
		for(j=0;j<c;j++)
		{
			scanf("%d",&a[i][j]);
		}
	}
	printf("Matrix is:-\n");
	for(i=0;i<r;i++)
	{
		for(j=0;j<c;j++)
		{
			printf("%d ",a[i][j]);
		}
		printf("\n");
	}
	
	
	int b[r][c];
	printf("Enter second matrix element:-");
	for(i=0;i<r;i++)
	{
		for(j=0;j<c;j++)
		{
			scanf("%d",&b[i][j]);
		}
	}
	printf("Second matrix is:-\n");
	for(i=0;i<r;i++)
	{
		for(j=0;j<c;j++)
		{
		   printf("%d ",b[i][j]);
		}
		printf("\n");
	}
	
	int res;
	
	printf("Addition is:-\n");
	for(i=0;i<r;i++)
	{
		for(j=0;j<c;j++)
		{
			res=a[i][j]+b[i][j];
			printf("%d ",res);
		}
		printf("\n");
	}
	
	printf("subtraction is:-\n");
	for(i=0;i<r;i++)
	{
		for(j=0;j<c;j++)
		{
			res=a[i][j]-b[i][j];
			printf("%d ",res);
		}
		printf("\n");
	}
	
	printf("Multiplication is:-\n");
	for(i=0;i<r;i++)
	{
		for(j=0;j<c;j++)
		{
			res=a[i][j]*b[i][j];
			printf("%d ",res);
		}
		printf("\n");
	}
	return 0;
}
