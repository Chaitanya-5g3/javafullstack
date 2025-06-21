class Instance
{
 int a=10;
static int d=15;
static void add(Instance inn) //we can access the instance variable in static method we can pass parameters to the method
 {
   int b=20,t;
  t=inn.a;
   System.out.println( t+b);
 }
void sub()
{
  int c=30;
   System.out.println( c-a);
 System.out.println( c-d);
Instance.add(this);
}
public static void main(String[] args)
{
  Instance in=new Instance();
  in.add(in);
in.sub();
}
}