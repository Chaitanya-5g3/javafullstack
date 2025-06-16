class Sviet
{
  void hiMessage()
  {
    System.out.println("Welcome to sviet");
  } 
}
class CRTP extends Sviet
{
   void learn()
   {
     System.out.println("Are you Ready to learn My Dear students");
   }
}
class College
{
   public  static void main(String[] args)
   {
     Sviet obj1=new Sviet();
     CRTP obj2=new CRTP();
     obj1.hiMessage();
     obj2.learn();

   }
}
