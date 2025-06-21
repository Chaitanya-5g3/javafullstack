class ParaArray
{
  public static void main(String[] args)
  {
   int a[]={1,2,3,4,5};
   int b[]={0,0,0,0,0};
   int i,j=0,r,k=0;
   for(i=0;i<5;i++)
   {
    for(j=i;j<5;j++)
   {  r=a[i]-b[i];
    b[j]=b[i]+r;
   } 
  k++;
   
    for(int l=0;l<5;l++)
   {  
       System.out.print(b[l]);
   }
    System.out.println(" ");
 }

  System.out.println(k);
  }
}
