//year into days and days into year

#include<stdio.h>
#include<conio.h>
int main()
{

   float year,days,week;
   
   printf("Enter any year:-\n"); 
   scanf("%f",&year);
                                                              // year into days and weak
   days=year*365;
   printf("Nunber of days is:-%f\n",days);    
   
   week=days/7;
   printf("Number of week in year is:-%f\n\n",week);

   printf("______*________*_______*_______\n\n");
   
   printf("Enter the days:-\n");
   scanf("%f",&days);
                                                                 // days into year and week
   year=days/365;
   printf("Number of year is:-%f\n",year);
   
   week=days/7;
   printf("Number of weeks in days is:-%f",week);
   
   getch();
   return 0;
}
