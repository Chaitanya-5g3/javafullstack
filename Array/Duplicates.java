import java.util.Scanner;
class DupliArray
{
  int[]  DupliFun(int a[],int n)
  {   
    int b[]=new int[n];
    int i,j,k=0;
    for(i=0;i<n;i++)
    {
     for(j=i+1;j<n;j++)
     {
       if(a[i]==a[j])
       {
          b[k++]=a[j];
          break;
       }
     }
    }
 return b;
   
  }
}
class Duplicates
{
   public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int n,i;
    System.out.println(" Enter size of array : ");
    n=s.nextInt();
    int a[]=new int[n];
    System.out.println(" Enter elements of array : ");
    for(i=0;i<n;i++)
     {
      a[i]=s.nextInt();
     }
    DupliArray d=new DupliArray();
   int[] count= d.DupliFun(a,n);
     System.out.println(" the duplicate of array is : ");
     for(i=0;i<count.length;i++)
     {   
        if (count[i] != 0) 
        {
      System.out.println(count[i]);
       }
    }
    
  }
}
