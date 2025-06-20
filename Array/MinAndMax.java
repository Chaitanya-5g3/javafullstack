import java.util.Scanner;
class FindminAndmax
{  int i;
 int min(int a[],int n)
  {
    int min=a[0];
   for(i=1;i<n;i++)
  {
    if(a[i]<min)
    {
      min=a[i];
    }
  }
     return min;
  }
   int max(int a[],int n)
  {
    int max=a[0];
    for(i=1;i<n;i++)
    {

    if(a[i]>max)
    {
      max=a[i];
    }
   }
     return max;
   }
}
class MinAndMax
{
   public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i;
    System.out.println(" Enter size of array : ");
    n=s.nextInt();
    int a[]=new int[n];
    System.out.println(" Enter elements of array : ");
    for(i=0;i<n;i++)
     {
      a[i]=s.nextInt();
     }
    FindminAndmax f=new FindminAndmax();
   int max=f.max(a,n);
   int min=f.min(a,n);
  System.out.println("The Maximum number is " + max);
  System.out.println("The Minimum number is " + min);

  
   }
}