
import java.util.Scanner;
class Reverse
{
  int[]  revArray(int a[],int n)
  {   
    int b[]=new int[n];
    int i,j=n-1;
    for(i=0;i<n;i++)
    {
     b[j]=a[i];
     j--;
    }
     return b;
  }
}
class ReverseArray
{
   public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i;
    System.out.println(" Enter size of array : ");
    n=s.nextInt();
    int a[]=new int[n];
   //  int b[]=new int[n];
    System.out.println(" Enter elements of array : ");
    for(i=0;i<n;i++)
     {
      a[i]=s.nextInt();
     }
     Reverse r=new Reverse();
   int[] b=  r.revArray(a,n);
     System.out.println(" the reverse of array is : ");
     for(i=0;i<n;i++)
     {
      System.out.println(b[i]);
     }
  }
}
