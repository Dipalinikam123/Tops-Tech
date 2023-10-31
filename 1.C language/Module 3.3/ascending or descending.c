//ascending or descending
#include<stdio.h>
#include<conio.h>
int main()
{ 
  int size,a[100],i,j,temp;
  printf("Enter array size :-");
  scanf("%d",&size);
  
  printf("Enter array element:-");
  for(i=0;i<size;i++)
  {
  	scanf("%d",&a[i]);
  }
  for(i=0;i<size;i++)
  {
  	for(j=i+1;j<size;j++)
  	{
  	  if(a[i]>a[j])
	    {
	       temp=a[i];
	       a[i]=a[j];
	       a[j]=temp;    	
	    }	
	}
  }
  printf("Array Element in Ascending order:-");
  for(i=0;i<size;i++)
  {
  	printf("%d\n",a[i]);
  }
  
   for(i=0;i<size;i++)
  {
  	for(j=i+1;j<size;j++)
  	{
  	  if(a[i]<a[j])
	    {
	       temp=a[i];
	       a[i]=a[j];
	       a[j]=temp;    	
	    }	
	}
  }
  printf("Array Element in Descending order:-");
  for(i=0;i<size;i++)
  {
  	printf("%d\n",a[i]);
  }
   getch();
   return 0;
}
