import java.util.Scanner;
class Loop4
{
  public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i,j=0;
     System.out.println(" Enter range ");
    n=s.nextInt();
    int a[]=new int[n];
    int b[]=new int[n];
    for(i=1;i<=n;i++)
    {
      if(i%2==0)
        { 
         a[j]=i;
          j++;
         }
      
      else
        {
         b[j]=i;
          
        }
     }

    
   for(i=0;i<(n/2);i++)
    {
      System.out.println("Even Number" +(i+1)+" " +a[i]);
    }
    
   for(i=0;i<(n/2);i++)
    {
      System.out.println("odd Number" +(i+1)+" " +b[i]);
    }
  }
}