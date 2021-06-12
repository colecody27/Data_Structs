    //Create variables
let stkArr = [];
let tempVal = document.getElementById('inputBox');
let stk = null;
let popFlag = false;
let peekVal = document.getElementById('popped');

    //Create an eventListener for for when user inputs enter
tempVal.addEventListener('keyup', function(event){
    if(event.keyCode === 13){
        event.preventDefault();
        document.getElementById("inputButton").click();
    }
});

function push(input){
        //Limit user entry to 8 values on stack
    if(stkArr.length-1 < 7){
        //If an OL is already present we are going to replace the 
        //current with a new one with items in array 
    if(stk != null){
     stk.remove();
    }
        //Create a new ordered list and append it to "items"
    let items = document.getElementById('items');
    stk = document.createElement('ol');
    items.appendChild(stk);
    if(!popFlag)
        stkArr.push(input);
    for(let i = stkArr.length-1; i >= 0; i--){
        let newVal = document.createElement("li");
        newVal.textContent = stkArr[i];
        stk.appendChild(newVal)
    }
    tempVal.value = '';
}
}

function pop(){
    if(stkArr.length >= 1){
            //Delete old peekVal and Create a new under 'poppedVal'
        peekVal.remove();
        peekVal = document.createElement('h3');

            //Remove last element in array 
        peekVal.innerHTML = stkArr.pop();
        document.getElementById('poppedVal').appendChild(peekVal);

            //Animation for fadeout of popped value
        peekVal.style.animation = 'fadeOut 5s';
            //Remove peekVal by setting to white or deleting
        peekVal.style.color = 'white';
        
            //Set flag to true so push function can be utilized
        popFlag = true;

            //Display new stack
        push(null);
        popFlag = false;
        }
}

function peek(){
    if(stkArr.length >= 1){
            //Display last value in array
            //Follow similiar process for pop
        peekVal.remove();
        peekVal = document.createElement('h3');
        peekVal.innerHTML = stkArr[stkArr.length-1];
        document.getElementById('poppedVal').appendChild(peekVal); 
        peekVal.style.animation = 'fadeOut 5s';
        peekVal.style.color = 'white';
    }
}

    //LINKED LIST SECTION
    let LLArr = document.getElementById('LLItems').children;
    let LLInput = document.getElementById('LLPosition');
    let LLItems = document.getElementById('LLItems');
    let LLPosition = document.getElementById('LLPosition').value;
    let LLValue = document.getElementById('LLValue').value;

    //Detect when user inputs 'enter' 
    LLInput.addEventListener('keyup', function(event){
        if(event.keyCode === 13){
            event.preventDefault();
            document.getElementById("LLInputButton").click();
        }
    });

function append(position, value){
    //If position value is not empty 
    if(position != ''){
        //Create new oval
        let newItem = createOval(value);

        //If the list is empty, append the child
        if(LLArr.length == 0){
            LLItems.appendChild(newItem);
        }

        //Inserting at beginning when list is not empty 
        else if(position === 'null'){
            LLItems.insertBefore(newItem, LLItems.childNodes[1]);
        }
        
        //Inserting at end
        else if(find(position) == LLArr.length-1){
            LLItems.appendChild(newItem);
            console.log("end");
        }

        //Inserting in middle
        else{
            //Use find function to location position of value in array
            LLItems.insertBefore(newItem, LLItems.childNodes[(find(position)+2)]);
            console.log('middle');
        }
        //Reset array to include changes
        LLArr = document.getElementById('LLItems').children;
    }
}

function remove(value){
    if(value != ''){
        document.getElementById(value).remove();
        LLArr = document.getElementById('LLItems').children;
    }
}

function createOval(value){

    //Create an item which consist of an oval, line, and arrow. 
    let item = document.createElement('div');
        item.className = 'item';
        item.id = value;
    let oval = document.createElement('div');
        oval.className = 'oval';
        oval.innerHTML = value;
    let line = document.createElement('div');
        line.className = 'line';
    let arrow = document.createElement('arrow');
        arrow.className = 'arrow';

    //Construct item element push to array and append item to 'LLItems'
    item.appendChild(oval);
    item.appendChild(line);
    item.appendChild(arrow);
    return item;
}

function find(value){
    //Iterate through array searching for value
    for(let i = 0; i < LLArr.length; i++){
        if(LLArr[i].id == value)
            return i;
    }
    return null;
}

function count(){
    document.getElementById('LLOutput').innerHTML = 'Count:' + LLArr.length;
}

function findKey(value){
    let found = false;
    for(let i = 0; i < LLArr.length; i++){
        if(LLArr[i].id == value){
            document.getElementById('LLOutput').innerHTML = 'Index:' + i;
            found = true;
        }
    }
    if(found == false)
        document.getElementById('LLOutput').innerHTML = 'Index: null';
}

function ScrollToStack(){
    window.scroll({
        top: 0, 
        behavior: 'smooth'
      });
}

function ScrollToLL(){
    window.scroll({
        top: 2500, 
        behavior: 'smooth'
      });
}