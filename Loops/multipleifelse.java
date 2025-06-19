
import java.util.Scanner;
class Largest3Num
{
  public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int a,b,c;
    a=10;
    b=20;
    c=30;
    if(a==b && b==c)
     {
        System.out.println(" All are same");
     }
    else if(a>=b && a>=c)
     {
       System.out.println(" The large number is:" +a);
     }
     else if(b>=a && b>=c)
     {
       System.out.println(" The large number is:" +b);
     }
      else
       {
          System.out.println(" The large number is:" +c);
       }
}
}
