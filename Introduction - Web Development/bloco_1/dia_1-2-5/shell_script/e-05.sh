#!/bin/bash

echo "Digite um caminho ou diretório: "
read FILE

if [ -f "$FILE" ]
then 
    echo "É um arquivo"

elif [ -d "$FILE" ]
then
    echo "É um diretório"

else
    echo "$FILE é algo diferente"
fi