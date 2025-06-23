class Parent
{
static int a=10;
 int b=20;
static
{
System.out.println("Static");
}
 void add()
{
  System.out.println(a+b);
}
}
class Child extends Parent
{

}
class Inherited
{
public static void main(String[] args)
{
 Child c=new Child();
 c.add();
  System.out.println(c.a);
}
}