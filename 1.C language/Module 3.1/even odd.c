//Even or odd sum in for loop
#include<stdio.h>
int main()
{
	int i,n,sum=0;
	
	printf("Enter the number:-");
	scanf("%d",&n);
	
        printf("Even number is..\n");
        
        for(i=2;i<=n;i=i+2)
        {
        	printf("%d\n",i);
        	
        	 sum=sum+i;	 
	}
        printf("Addition of even number's:-%d\n",sum);
	
	
	int a,add,v;
	printf("Enter the number:-");
        scanf("%d",&v);
	
	printf("Odd number is..\n");
	
        for(a=1;a<=v;a=a+2)
        {
        	printf("%d\n",a);
        	
        	add=add+a;
	}
	printf("Addition of odd number's:-%d",add);
     
	return 0;
}

