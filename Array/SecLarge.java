import java.util.Scanner;
class Second
{
 int SecondLarge(int a[],int n)
 {
     int max1,max2,pos=0,i;

      max2=a[0];
      max1=a[0];
      for(i=1;i<n;i++)
       {
        if(a[i]>max1)
         {
           max1=a[i];
          }
         for(i=1;i<n;i++)
         {
         if(a[i]==max1)   
         {
         pos=i;
         }
       }
   n--;
  }

for(i=pos;i<n-1;i++)
{
   a[i]=a[i+1];
}
  for(i=1;i<n;i++)
  {
    if(a[i]>max2)
    {
         max2=a[i];
    } 
   
  } 
return max2;
}
}
class SecLarge
{
  public static void main(String[] args)
 {
    Scanner s=new Scanner(System.in);
   int n,i;
  System.out.println("Enter the array size");
   n=s.nextInt();
  int a[]=new int[n];
    System.out.println("Enter the elements of array ");
   for(i=0;i<n;i++)
   {
     a[i]=s.nextInt();
   }
  Second sc=new Second();
int b= sc.SecondLarge(a,n);
System.out.println(b);
  
 }
}