import java.util.Scanner;
class Switch
{
  public static void main(String[]  args)
  {
    Scanner s=new Scanner(System.in);
    int n ,flag;
    System.out.println("Enter a number");
    n=s.nextInt();
     if(n%2==0)
     {
      flag=1;
     }
     else
     {
       flag=0;
     }


    switch(flag)
    {
      case(1):
        {
         System.out.println(+(n)+" is Even");
         break;
       } 
       case(0):
       {
        System.out.println(+(n)+" is Odd");
        break;
       } 
   
                                                }   
  }
}