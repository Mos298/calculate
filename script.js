const cal_container = document.getElementById('cal_container');
const display_area = document.getElementById('display_area');

cal_container.addEventListener('click', e =>{
    if(e.target.nodeName =='BUTTON'){
        switch(e.target.textContent){
            case 'c':
                clear();
                break;
            case 'DEL':
                deleteLastCharacter();
                break;
            case '=':
                evaluate();
                break;
            default:
                addToDisplayArea(e.target.textContent);
            }
    }
}
)

function clear(){
    display_area.textContent = '';
}
function addToDisplayArea(value){
    display_area.textContent += value;

}

function deleteLastCharacter(){
    let current_value = display_area.textContent;
    display_area.textContent = current_value.slice(0, -1);
}

function evaluate(){
    try {
        let calculation = math.evaluate(display_area.textContent);
        display_area.textContent = calculation;
    }
    catch(error){
        display_area.textContent = "Error";
        return;
    }
}