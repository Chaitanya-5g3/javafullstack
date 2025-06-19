import java.util.Scanner;
class FindIndex
{
  public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i,element;
    System.out.println("Enter array range:");
    n=s.nextInt();
  int a[]=new int[n];
     System.out.println("Enter elements of array :");
     for(i=0;i<n;i++)
     {
      a[i]=s.nextInt();

     }
   
     System.out.println("Enter the element of element");
     element=s.nextInt();
      
      for(i=0;i<n;i++)
     {
      if(a[i]==element)
       {
         System.out.println(+(element)+" Index is:" +i);
       }

     }
     
  }
}