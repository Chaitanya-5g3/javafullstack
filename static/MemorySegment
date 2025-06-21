class Memory
{
   static int a=10;
   static int b=20;
   int c=30,d=40;
   static{
       System.out.println(" C1 Static block1");
     } 
     static{
       System.out.println("C1 Static block2");
     } 
     {
       System.out.println("C1 Instance block1");
     } 
     {
       System.out.println("C1 Instance block2");
     } 
    static void add1()
     {
       System.out.println("C1 static method1"+(a+b));
     }
      static void sub1()
     {
       System.out.println("C1 static method2"+(a-b));
     }
      void add2()
     {
       System.out.println("C1  Instance method1"+(a+c));
     }
      void sub2()
     {
       System.out.println("C1 Instance method2"+(d-b));
     }
}
class MemorySegment
{
   static int p=10;
   static int q=20;
   int r=30,k=40;
   static{
       System.out.println("C2 Static block1");
     } 
     static{
       System.out.println("C2 Static block2");
     } 
     {
       System.out.println("C2 Instance block1");
     } 
     {
       System.out.println("C2 Instance block2");
     } 
    static void mul1()
     {
       System.out.println("C2 static method1"+(p*q));
     }
      static void div1()
     {
       System.out.println("C2 static method2"+(p/q));
     }
      void mul2()
     {
       System.out.println("C2  Instance method1"+(p*r));
     }
      void div2()
     {
       System.out.println("C2 Instance  method2"+(k/q));
     }
    public static void main(String[] args)
    {
    Memory m=new Memory();
    MemorySegment ms=new MemorySegment();
    m.add1();
    m.sub1();
    m.add2();
    m.sub2();
    ms.mul1();
    ms.div1();
    ms.mul2();
    ms.div2();
    
    
    }
}
