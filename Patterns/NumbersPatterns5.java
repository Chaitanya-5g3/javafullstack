/* 1 3 5 7 9
11 13 15 17 19
21 23 25 27 29
31 33 35 37 39
41 43 45 47 49
*/
class NumbersPatterns5
{
  public static void main(String[] args)
  {
    int a=1;
    for(int i=0;i<5;i++)
    {
     for(int j=0;j<5;j++)
     {   
       System.out.print(a +" ");
       a=a+2;  
     }
     System.out.println(" ");
    }
  }
}