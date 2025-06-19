import java.util.Scanner;
class AvgOfElements
{
  public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i,sum=0,Avg;
    System.out.println("Enter array range:");
    n=s.nextInt();
  int a[]=new int[n];
     System.out.println("Enter elements of array :");
     for(i=0;i<n;i++)
     {
      a[i]=s.nextInt();
      sum=sum+a[i];
     }
     Avg=sum/n;
     System.out.println("The Average of array Elements is:"+Avg);
  }
}