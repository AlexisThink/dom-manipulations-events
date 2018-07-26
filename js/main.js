// GO!

// TASK 1 -- Show/Hide Nav
var nav = document.querySelector('.nav-menu');
var btnExc1 = document.querySelector('#hide-nav button');
var counter = 0;


btnExc1.addEventListener('click', function(event){
    var hide = nav.style.opacity = 0;
    counter += 1;

    if(counter === 2){
        nav.style.opacity = 1;
        counter = 0;
    }
    console.log(counter);
})

// TASK 2 -- Select an Icon
var icons = document.querySelectorAll('.wish-list div');
var classSelected = "selected"
var counter = 0;

icons.forEach(function(icon){
    icon.addEventListener('click', function(event){
        var icn = event.currentTarget;

        icn.classList.toggle('selected');
    })
})

// TASK 3 -- Move Item From List to List
var buttons = document.querySelectorAll('.add-points button');
var resultadoTxt = document.querySelector('.total-points');
var resultadoNum = parseInt(resultadoTxt.textContent);

buttons.forEach(function(button){
    button.addEventListener('click',function(event){
        var btn = event.target;
        var valor = btn.textContent;
        var valorFinal = parseInt(valor);

        resultadoNum += valorFinal;

        resultadoTxt.textContent = resultadoNum.toString();
        console.log(resultadoTxt);
        console.log(resultadoNum);
    })
})

// TASK 4 -- Add Guest to List
var goodList = document.querySelector('.good-standing-list'); //PARENT
var probationList = document.querySelector('.probation-list'); //PARENT
var listItems = document.querySelectorAll('.answer-box li'); //CHILPALLATES

listItems.forEach(function(item){
    item.addEventListener('click', function(event){
        var li = event.target
        var clase = li.parentNode.className;


        if(clase === 'good-standing-list'){
            goodList.removeChild(li);
            probationList.appendChild(li);
        }

        if(clase === 'probation-list'){
            probationList.removeChild(li);
            goodList.appendChild(li);
        }
    })
})

// TASK 5 -- (Adventure Mode)-- Add + Remove Item From List
var buttonsColor = document.querySelectorAll('.palette span');
var textBox = document.querySelector('.msg');

buttonsColor.forEach(function(buttonColor){
    buttonColor.addEventListener('click', function(event){
        var btnColor = event.target;
        var clase = btnColor.className;
        
        textBox.className = 'msg '+clase;
    })
})