//obtener los elementos del DOM
const resultLabel = document.querySelector(`.calculadora__result`);
//seleccionamos todos nuestros botones
const buttons = document.querySelectorAll (`.calculadora__button`); //con el querys seleccinamos todos los elementos que tengan la clase de calculadora__button

console.log(resultLabel)

//variable para almacenarlos nuneros y operaciones. 3
let currentNumber = ""; //con let creamos variables que se pueden reemplazar
let previusNumber = ""; //variable para almacenar el dato que se ingreso cuando se metio el primer dato
let currentOperator = ""; //aqui el operador

//funcion para actualizar el resultado en el label

const updateResult = ()=>{
    resultLabel.textContent = currentNumber; //lo que aparezca en el resultado se le asignara un valor de currentNumber (el numero que estamos ingresando)
};

//funcion para realizar la operacion matematica

const calculate = ()=>{
    //convertir los numeros de cadena a numero
    const num1 = parseFloat(previusNumber); //aqui alamcena el numero 1
    const num2 = parseFloat(currentNumber); //aqui alamcena el numero 2
    const num3 = parseFloat(currentNumber);


//realizar la operacion segun el operador seleccionado

switch (currentOperator) { //y vamos creando los casos
    case `+`:
        currentNumber = num1 + num2 + num3;
        break; //para la operacion si eso ocurre y no se siguen ejecutando los demas casos

     case `-`:
        currentNumber = num1 - num2;
        break;

    case `/`:
        currentNumber = num1 / num2;
        break;    
    
     case `x`:
        currentNumber = num1 * num2 * num3;
        break;   
    //el usuario ejecuta un + pero si no es un + ejecuta la resta, sino la multiplicaion y asi..
    }

    //convertir el resultado de nuevo a cadena
    currentNumber = currentNumber.toString(); //convierte un numero en texto y como es funcoin lleva parentesis

};


//necesitamos escuchar el clic del usuario, cuando seleccione los botones el usuario
buttons.forEach((button)=>{//esto hace que cada vez que lo recorra vamos a crear el elemnto buton
    button.addEventListener(`click`,()=>{ //aqui escucha el click del usuario
        const value = button.textContent; //va a recorrer cuando le demos clic y a value le asignara lo que venga en el text conten del boton. clic al 3, recorre y selecciona el valor de 3
    
        //verificamos si el boton es un numero. todos  tienen la misma clase asik agregamos la calse de data number, asi diferenciamos los botones numericos de las operaciones
        if(button.classList.contains(`data--number`)){ //si contiene esta clase debe hacer lo siguiente
            currentNumber = currentNumber + value; //concatena los valores
            updateResult();
        }


        //verificamos si el boton es el de igual
        else if(value === `=`){ //si lo que viene en value es igual a = hace la operacion calculate
            calculate();
            updateResult();//para actualizar el resultado en la pantalla

            //reiniciamos la operación para poder hacer otra que son las de current number y previuos number. como ya estan arriba asignadas no necesitamos poner el LET
            currentNumber = "";
            previusNumber = "";//les estamos asignando u nestado vacio
        }
        //verificar si el boton es el de limpiar el C
        else if(value === `C`){
           currentNumber = "";
           previusNumber = "";
           currentNumber = ""; //nos limpie todas las variable sy reinice el resultado
           updateResult();//actualizamos la pantalla
           //si queremos que siempr este el cero lo hacemos con result label
           resultLabel.textContent = 0;

        }

        //verificamos si el boton es el de un operados
        else{
            previusNumber = currentNumber;
            currentNumber = ``;
            currentOperator = value;
        }

    });

});    