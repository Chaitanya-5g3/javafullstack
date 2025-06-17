/* 1 2 3 4 5
   6 7 8 9 10
   11    ....
    ......25
*/    
class NumbersPatterns3
{
   public static void main(String[] args)
   {  int a=1;
      for(int i=1;i<6;i++)
      {
        for(int j=0;j<5;j++)
        {  
          System.out.print(a +" ");
          a=a+1;
        }
         System.out.println(" ");
      }
   } 
}