import java.util.Scanner;
class Palindrome
{
  public static void main(String[] args)
  {
    Scanner s=new Scanner(System.in);
    int num,rmd,res=0,num1;
    System.out.println(" Enter a number");
    num=s.nextInt();
    num1=num;
    while(num1>0)
    {
       rmd=num1%10;
       res=res*10+rmd;
       num1=num1/10;
    }
   if(num==res)
   {
    System.out.println(+(num)+"  number is Palindrome");
   }
   else
   {
    System.out.println(+(num)+"  number is NotPalindrome");
   }
  }
}