var sayilar = document.querySelectorAll("#numara");
var ekran = document.querySelector("#sonuc");
var myoperator = document.querySelectorAll("#opearator");
var sembolMu = false;
var opt = "";
var final = 0;

sayilar.forEach(number=> {
    number.addEventListener("click", sayiGoster)

    function sayiGoster()   {
        if(ekran.textContent == "0" || sembolMu){
            ekran.textContent="";
        }
        ekran.textContent += this.textContent
        sembolMu = false;

    }
})

myoperator.forEach(opeartor => {
    opeartor.addEventListener("click", islemYap);

    function islemYap(){
        sembolMu = true;
        var yeniSemb = this.textContent;

    
        
        switch(opt){
            case "+":
            ekran.textContent = final + Number(ekran.textContent);
                break;

            case "-":
            ekran.textContent = final - Number(ekran.textContent);
                break;

            case "/":
            ekran.textContent = final / Number(ekran.textContent);
                break;
            
             case "*":
            ekran.textContent = final * Number(ekran.textContent);
                break;
            case "=":
            final = Number(ekran.textContent);
                break;
            case "%":
            ekran.textContent =Number(ekran.textContent) / 100;
                break;
        }
        final = Number(ekran.textContent);
        opt = yeniSemb;
    }
}
   
)
