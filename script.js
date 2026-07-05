//========================
// منوی کناری
//========================

const menu = document.getElementById("sideMenu");
const overlay = document.getElementById("overlay");

document.getElementById("menuBtn").onclick = () => {

    menu.classList.add("active");
    overlay.classList.add("active");

};

overlay.onclick = () => {

    menu.classList.remove("active");
    overlay.classList.remove("active");

};

//========================
// تغییر مود ماشین حساب
//========================

let scientificMode = false;

const scientificBtn = document.getElementById("scientificBtn");
const scientificPanel = document.getElementById("scientificPanel");

scientificBtn.onclick = () => {

    scientificMode = !scientificMode;

    scientificPanel.classList.toggle("active");

};

//========================
// ماشین حساب
//========================

const display = document.getElementById("display");

const normalButtons = document.querySelectorAll(".keys button");

const scientificButtons =
document.querySelectorAll(".scientificPanel button");

let expression = "";

//------------------------
// دکمه های علمی
//------------------------

scientificButtons.forEach(btn => {

    btn.onclick = () => {

        let value = btn.innerHTML;

        switch(value){

            case "π":
                expression += Math.PI;
            break;

            case "e":
                expression += Math.E;
            break;

            case "√":
                expression += "Math.sqrt(";
            break;

            case "sin":
                expression += "Math.sin(";
            break;

            case "cos":
                expression += "Math.cos(";
            break;

            case "tan":
                expression += "Math.tan(";
            break;

            case "log":
                expression += "Math.log10(";
            break;

            case "ln":
                expression += "Math.log(";
            break;

            case "x²":
                expression += "**2";
            break;

            case "xʸ":
                expression += "**";
            break;

            default:
                expression += value;

        }

        display.value = expression;

    };

});

//------------------------
// دکمه های معمولی
//------------------------

normalButtons.forEach(btn => {

    btn.onclick = () => {

        let value = btn.innerHTML;

        if(value=="C"){

            expression="";

        }

        else if(value=="⌫"){

            expression=expression.slice(0,-1);

        }

        else if(value=="="){

            try{

                expression=eval(expression).toString();

            }

            catch{

                expression="Error";

            }

        }

        else{

            expression+=value;

        }

        display.value=expression;

    };

});
