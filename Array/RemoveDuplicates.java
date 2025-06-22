import java.util.Scanner;
class Remove
{
   int removefun(int a[],int n)
 {  int i,j,k;
    for(i=0;i<n;i++)
     {
       for(j=i+1;j<n ;j++)
       {
          if(a[i]==a[j])
          {
            for (k=j;k<n-1;k++)
                    {
                        a[k] = a[k + 1];
                    }
                    n--;
                    j--; 
          }
       }
     }
return n;
 } 
}
class RemoveDuplicates
{
 public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
   int i,j,n,k=0;
   System.out.println("Enter the size of the arrays:");
    n=s.nextInt();
   int a[]=new int[n];
   System.out.println("Enter the elements of the first arrays:");
    for(i=0;i<n;i++)
    {
         a[i]=s.nextInt();
    }
    Remove r=new Remove();
  int l= r.removefun(a,n);
    System.out.println("After removing the duplicates in array ");
     for(i=0;i<l;i++)
    {
         System.out.println(a[i]);
    }
}
}
