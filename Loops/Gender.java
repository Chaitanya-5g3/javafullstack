import java.util.Scanner;
class Gender
{
   public static void main(String[] args)
   {
     Scanner s=new Scanner(System.in);
     char gender;
     System.out.println("Enter gender (M/F):");
     gender=s.next().charAt(0);
     switch(gender)
     {
       case 'M':
       case 'm':
        {
           System.out.println("Male");
        }
        case 'F':
        case 'f':
        {
           System.out.println("Female");
        }
     }
   }
}