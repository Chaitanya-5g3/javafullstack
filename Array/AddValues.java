import java.util.Scanner;
class AddValues
{
  public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i,count=0;
    System.out.println(" Enter size of array : ");
    n=s.nextInt();
    int a[]=new int[n];
    System.out.println(" Enter elements of array : ");
    for(i=0;i<n;i++)
     {
      a[i]=s.nextInt();
      count=count+a[i];
     }
      System.out.println(" Sum of array elements is : "+count); 
  }
}
