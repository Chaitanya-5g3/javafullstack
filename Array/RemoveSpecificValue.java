import java.util.Scanner;
class Search
{
  void SearchVal(int se,int a[],int n)
{ int pos=0;
    for(int i=0;i<n;i++)
     {
      if(a[i]==se)
       {
        pos=i;
          
       }
   }
  for(int i=pos;i<n-1;i++)
  {
           a[i]=a[i+1];
  }
 n--;
  }
}

class RemoveSpecificValue
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
      obj.SearchVal(se, a, n); 
    for(i=0;i<n-1;i++)
     {
    System.out.print(a[i] +",");
      
     }

  }
}