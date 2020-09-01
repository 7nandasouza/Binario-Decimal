
function convert(){
   const binario = document.getElementById('Binary').value;
   if( binario === "") return("Please, enter a binary number");

   binario.split('').map((char) => {
      if(char !== '0' && char !== '1'){
      return alert ('Please, enter a binary number');}
      
   });
   
   const decimal = parseInt(binario ,2);
   document.getElementById('decimal').value = decimal; 
   return true;

   

}
// clean
function clean(){
      document.getElementById('Binary').value=""
      document.getElementById('decimal').value =""
   }