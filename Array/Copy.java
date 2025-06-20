import java.util.Scanner;
class CpyFun
{
    int j=0,i;
   void CopyFunction(int a[],int n,int b[])
   {
       for(i=0;i<n;i++)
   {
       b[j]=a[i];
       j++;    
   }  
   }   
}
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
        
   }
   CpyFun c=new CpyFun();
   c.CopyFunction(a,n,b);
    
   System.out.println(" the Copy of array is");
   for(i=0;i<n;i++)
   {
       
   System.out.println(b[i]);
   }
}
}
