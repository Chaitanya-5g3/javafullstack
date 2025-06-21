// StringCreating 
class StringMethods
{
  public static void main(String[] args)
  {
    String s1="Udayagiri Naga Chaitanya";
    String s2="Rajya lakshmi";
    String s3=new String("Udayagiri");
    System.out.println("1."+s1);
    System.out.println("2."+s2);
    System.out.println("3."+s3);
  // Concatenating two strings using operator
    System.out.println("4. Concatenating two strings using operator"+ s3+s2);
    System.out.println("5. Concatenating two strings using method"+s3.concat(s2));
// length of string
    System.out.println("6. length of string"+s1.length());
// substring method
    System.out.println("7.substring method"+s1.substring(9));
 // indexOf  method
   System.out.println("8.indexOf  method"+s1.indexOf('C'));
  // comparing two strings using equals method
   System.out.println("9.comparing two strings using equals method"+s2.equals(s1));
   // startswith,endswith and compareTo methods
    System.out.println("10.startswith method"+s2.startsWith("R"));
    System.out.println("11.endswith method"+s2.endsWith("."));
    System.out.println("12.compareTo method"+s3.compareTo(s1));
    System.out.println("13.equalsIgnoreCasemethod"+s1.equalsIgnoreCase("Naga"));
   // trim method
   System.out.println("14.trim method"+s1.trim());
   // replacing characters
    System.out.println("15.replacing characters"+s1.replace("Naga","_"));
   // spliting
      String s4[]=s1.split(" ");
         for(String arr:s4)  
         {
           System.out.println(arr);
          }
     
    // converting number to strings
     System.out.println("17.valueOf method "+s1.valueOf(97));
    // convert to uppercases and lowercases
   System.out.println("18.toUppercase method "+s1.toUpperCase());
 System.out.println("19.toLowercase method "+s1.toLowerCase());
// matches
   System.out.println("20.matches method"+s2.matches("[A-Z]+[a-z]+"));
   System.out.println("20.matches method"+s1.matches("[A-Z]+[a-z]+\\s[A-Z]+[a-z]+\\s[A-Z]+[a-z]+"));
  }
}
/**   
    1.Udayagiri Naga Chaitanya
2.Rajya lakshmi
3.Udayagiri
4. Concatenating two strings using operatorUdayagiriRajya lakshmi
5. Concatenating two strings using methodUdayagiriRajya lakshmi
6. length of string24
7.substring method Naga Chaitanya
8.indexOf  method15
9.comparing two strings using equals methodfalse
10.startswith methodtrue
11.endswith methodfalse
12.compareTo method-15
13.equalsIgnoreCasemethodfalse
14.trim methodUdayagiri Naga Chaitanya
15.replacing charactersUdayagiri _ Chaitanya
Udayagiri
Naga
Chaitanya
17.valueOf method 97
18.toUppercase method UDAYAGIRI NAGA CHAITANYA
19.toLowercase method udayagiri naga chaitanya
20.matches methodfalse
20.matches methodtrue
*/