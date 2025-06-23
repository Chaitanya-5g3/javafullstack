import java.util.Scanner;
class Evenandodd
{
  int[] evenandoddfun(int[] a,int n)
   {  int even=0,odd=0;
     for(int i=0;i<n;i++)
    {
     if(a[i]%2==0)
     {
       even=even+1;
     }
    else
    {
       odd=odd+1;
    }
    }
  return new int[]{even,odd};
   }
}
class EvenAndOddNums
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
  Evenandodd ead=new  Evenandodd(); 
int result[]=ead.evenandoddfun(a,n);
System.out.println(" The total number of evens are:"+result[0]);
System.out.println("The total number of odd are:"+result[1]);
}
}