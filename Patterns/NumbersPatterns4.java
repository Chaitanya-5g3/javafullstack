/* 12345
67891
23456
78912
34567
*/
class NumbersPatterns4
{
   public static void main(String[] args)
   {   int a=1;
      for(int i=1;i<6;i++)
      {
        for(int j=1;j<6;j++)
        { 
        if(a<10)
        {
          System.out.print(a);
           a=a+1;
         }
        else
         {
           a=1;
         System.out.print(a);
         a=a+1;
         }
      
        }
            System.out.println(" ");
     }
   } 
}