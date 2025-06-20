import java.util.Scanner;
class Copy
{
  public static void main(String[] args)
{
  Scanner s=new Scanner(System.in);
  int n,i,j=0;
  System.out.println("Enter the size of array");
  n=s.nextInt();
  int a[]=new int[n];
   int b[]=new int[n];
   System.out.println("Enter the elements of array");
   for(i=0;i<n;i++)
   {
       a[i]=s.nextInt();
          b[j]=a[i];
           j++;
   }
    
   System.out.println(" the Copy of array is");
   for(i=0;i<n;i++)
   {
       
   System.out.println(b[i]);
   }
}
}