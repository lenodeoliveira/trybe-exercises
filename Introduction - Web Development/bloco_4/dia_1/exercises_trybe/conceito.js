let conceito = 50;

if (conceito < 0 || conceito > 100) {
    console.log('Error');
}
else if (conceito >= 90) {

    console.log('A');
}
else if (conceito >= 80 && conceito < 90)
{
    console.log('B');
}
else if (conceito >= 70 && conceito < 80)
{
    console.log('C');
}
else if (conceito >= 60 && conceito < 70)
{
    console.log('D');
}
else if(conceito >= 50 && conceito < 60)
{
    console.log('E');
}
else if(conceito < 50)
{
    console.log('F');
}
