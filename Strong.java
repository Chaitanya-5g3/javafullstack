import java.util.Scanner;
public class Strong
{  // factorial
    public static int factorial(int n)
        { int fact=1,i;
           for(i=1;i<=n;i++)
           {
             fact=fact*i;
           }
        return fact;
        }
    public static void main(String[] args)
    {
        Scanner s=new Scanner(System.in);
        System.out.println("Enetr n value");
        int n=s.nextInt();
        int num,i,stg=0;
        num=n;
        if (n <= 0)
         {
           System.out.println("Please enter a positive integer greater than 0.");
           return;
        }
        while(num>0)
        {  
            int r=num%10;
            stg=stg+factorial(r);
            num=num/10;
        }

        System.out.println(stg);
        if(stg==n)
        {
            System.out.println("Yes");
        }
        else
        {
            System.out.println("No");
        }

    }
}