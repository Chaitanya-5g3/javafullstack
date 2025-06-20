import java.util.Scanner;
class InFun
  {
     void  InsertFun(int a[],int n,int element,int pos)
    {
      for(int i=0;i<n;i++)
      {
      if(i==pos)
      {
       a[pos]=element;
      }
      }
    }
  }

class Insert
{
  public static void main(String[] args)
{
  Scanner s=new Scanner(System.in);
  int n,i,pos,element;
  System.out.println("Enter the size of array");
  n=s.nextInt();
  int a[]=new int[n];
   System.out.println("Enter the elements of array");
   for(i=0;i<n;i++)
   {
       a[i]=s.nextInt();
   }
    
   System.out.println(" Enter the Insert  element and specific  position in array :");
   element=s.nextInt();
   pos=s.nextInt();
   InFun obj=new InFun();
   obj.InsertFun(a,n,element,pos);
    System.out.println("The modified array is");
   for(i=0;i<n;i++)
   {
      System.out.print( a[i] +" ");
   } 
}
}