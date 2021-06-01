
   

    function checkNumber(number) {
        
        if (number >= 100 && number <= 200) {
           return 'Liczba znajduje sie w przedziale';  
         } else if (number <= 100 || number >= 200) {
           return 'Liczba nie znajduje sie w przedziale';
          }
        }
    
        console.log(checkNumber(150));
