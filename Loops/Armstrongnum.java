import java.util.Scanner;
class Armstrongnum
{
   public static void main(String[] args)
{
   Scanner s=new Scanner(System.in);
   int num,num1,rmd,Arm=0;
   System.out.println(" Enter the number:");
   num=s.nextInt();
   num1=num;
   while(num1>0)
     {
       rmd=num1%10;
       Arm=Arm+(rmd*rmd*rmd);
      num1=num1/10;
     }
    if(num==Arm)
    {
     System.out.println("The given number is Armstrong");
    }
   else
    {
       System.out.println("The given number is NotArmstrong");
    }
  }
}