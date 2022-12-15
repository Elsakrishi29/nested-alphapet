let i,j,alpha;
for(i=1;i<=5;i++)
{
    alpha=65;
    for(j=1;j<=i;j++)
    {
        document.write(String.fromCharCode(alpha));
        alpha++;
    }
    document.write("<br>");
}

/*let i;
for(i=0;i<=65535;i++)
{
    document.write(i+")"+string.fromcharcode(i)+"<br>");
}*/
