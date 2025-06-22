import java.util.Scanner;
class CommonValues
{
 public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
   int i,j,n;
   System.out.println("Enter the size of the arrays:");
    n=s.nextInt();
   int a[]=new int[n];
    int b[]=new int[n];
   System.out.println("Enter the elements of the first arrays:");
    for(i=0;i<n;i++)
    {
         a[i]=s.nextInt();
    }
    System.out.println("Enter the elements of the second arrays:");
    for(i=0;i<n;i++)
    {
         b[i]=s.nextInt();
    }
 System.out.println("The comman value of two arrays is:");
 for(i=0;i<n;i++)
 {
   for(j=0;j<n;j++)
   {
     if(a[i]==b[j])
     {
          System.out.println(b[j]);
     }
   }
 }
}
}