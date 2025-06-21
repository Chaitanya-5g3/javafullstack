class ParaArray
{
  public static void main(String[] args)
  {
   int a[]={1,2,3,4,5};
   int b[]=new int[5];
   int i,j=0;
b[0]=a[0];
for(i=1;i<5;i++)
   {
    for(j=i;j<5;j++)
   { 
    b[j]=a[i];
  
   } 

    for(int k=0;k<5;k++)
   {
       System.out.print(b[k]);
   }
    System.out.println(" ");
}
  }
}