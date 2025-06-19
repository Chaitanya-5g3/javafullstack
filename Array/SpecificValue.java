import java.util.Scanner;
class Search
{
  int SearchVal(int se,int a[],int n)
{
    for(int i=0;i<n;i++)
     {
      if(a[i]==se)
       {
        return i;
       }
        
       }
        return (-1);
 
     }
  }


class SpecificValue
{
  public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i,se;
    System.out.println("Enter array range:");
    n=s.nextInt();
  int a[]=new int[n];
     System.out.println("Enter elements of array :");
     for(i=0;i<n;i++)
     {
      a[i]=s.nextInt();
     }
     System.out.println("Enter the specific element in the array");
     se=s.nextInt();
      Search obj=new  Search();
     int index= obj.SearchVal(se, a, n); 
     System.out.println(index);
       if(index!=-1)
       {
              System.out.println("Element is found at:"+index);
       }
      else
        {
         System.out.println("Element isNot found:");
       }

  }
}