import java.util.Scanner;
class Prime
{
  public static void main(String[] args)
 
  {
    Scanner s=new Scanner(System.in);
    int num;
    int count=0;
    System.out.println(" Enter a number");
    num=s.nextInt();
   for(int i=1;i<=num;i++)
   {
     if(num%i==0)
      {
        count=count+1;
      }
   }
  if(count==2)
    {
       System.out.println( +(num)+" number is prime");
    }
    else
   {
    System.out.println( +(num)+"number is Notprime");
   }
  }   
}