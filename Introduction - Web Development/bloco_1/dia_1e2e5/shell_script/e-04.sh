#!/bin/bash

FILE=/pasta1/pasta2/pasta3

if [ -e $FILE ]
then 
    echo "é um caminho"
else 
echo "NÃO é um caminho"
fi

if [ -w $FILE ]
then
  echo "Você tem permissão para editar $FILE" 

else echo "Você NÃO foi autorizado a editar `$FILE`" 
fi 