// find out the max no. given array using function
#include<stdio.h>
void max();
int main()
{

max();
return 0;
}
void max()
{
int a[100],size;
printf("Enter size of array:-");
scanf("%d",&size);

int i;
printf("Enter the value of array:-");
   
for(i=0;i<size;i++)
{
scanf("%d",&a[i]);

}

int max;
max=a[0];
for(i=0;i<size;i++)
{
 if(a[i]>max)
 {
  max=a[i];
 }
}
printf("maximum value of array:-%d",max);
return 0;
}

