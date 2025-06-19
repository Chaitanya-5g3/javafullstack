/* 
 IN
IND
INDI
INDIA

*/
class RightTriangle
{
  public static void main(String[] args)
  {
    char[] n={'I','N','D','I','A'};
    int i,j;
    for(i=0;i<5;i++)
    {
      for(j=i;j<5;j++)
      {
         
      System.out.print(n[j] +" ");
      }
      
      System.out.println(" ");
    }
    
  }
}
