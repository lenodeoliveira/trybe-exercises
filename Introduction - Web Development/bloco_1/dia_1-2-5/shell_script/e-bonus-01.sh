#!/bin/bash
#Eu sou Tryber e...

FILES=$@

for FILE in $FILES
 do 
   if [ -f "$FILE" ]
     then 
      echo "$FILE é um arquivo"
   
   elif [ -d "$FILE" ]
     then
    echo "$FILE é um diretório"
   
   else
      echo "$FILE é  outra coisa"
   fi
   ls -l $FILE
 done
