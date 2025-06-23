class Dem
{
  Dem(int a)
{
  this(10,20);
  System.out.println("one");
}
 Dem(int a,int b)
{
  this(10,20,30);
  System.out.println("two");
}
 Dem(int a,int b,int c)
{

  System.out.println("three");
}
}
class Launch
{
  public static void main(String[] args)
  {
    Dem d=new Dem(10);
  }
 }