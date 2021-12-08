let zIndexCount = 0;

function createSquares() {
    let colors = ["grey","blue","pink","green","green"]
    let square

    for (color in colors){
        
        console.log("Cоздан " + colors[color] + " квадрат")
        square = document.createElement('div')
        square.id = "square"
        square.className = "movable " + colors[color]
        square.style.top = Math.random() * 400 + 'px'
        square.style.left = Math.random() * 400 + 'px'
        document.body.append(square)

    }

    square = document.createElement('div')
    square.id = "square"
    square.className = "black"
    square.style.top = Math.random() * 400 + 'px'
    square.style.left = Math.random() * 400 + 'px'
    
    document.body.append(square)
}

createSquares()

document.body.addEventListener('mouseover',onMouseOverSquare)

function onMouseOverSquare (event) {

    let targetElement = event.target
      
    if(targetElement.id === "square"){

        targetElement.style.boxShadow = "0px 0px 17px 0px rgb(255, 0, 212)"
            
        if(targetElement.classList.contains("movable")){
            targetElement.style.boxShadow = "0px 0px 17px 0px rgb(14, 121, 0)"
        }        
    
        document.body.addEventListener('mouseout',onMouseOutSquare)
    
        function onMouseOutSquare (event){
                
            targetElement.style.boxShadow = ''
    
        }
    
    }        
    
}

document.body.addEventListener('mousedown',onMouseDown)

function onMouseDown (event) {
            
    let square = event.target
  
    let classList = square.classList;

    if(classList.contains("movable")) {
 
        let shiftX = event.clientX - square.getBoundingClientRect().left;
        let shiftY = event.clientY - square.getBoundingClientRect().top;
                                    
        zIndexCount += 1
                
        square.style.zIndex = zIndexCount;
                        
        moveAt(event.pageX, event.pageY);
                
        // переносит квадрат на координаты (pageX, pageY),
        // дополнительно учитывая изначальный сдвиг относительно указателя мыши
        function moveAt(pageX, pageY) {
            square.style.left = pageX - shiftX + 'px';
            square.style.top = pageY - shiftY + 'px';
        }
                
        function onMouseMove(event) {
            moveAt(event.pageX, event.pageY);
        }

        document.body.addEventListener('mousemove', onMouseMove);

        function onMouseUp() {
            window.removeEventListener('blur',onBlur)
            document.removeEventListener('mouseleave',onMouseLeave)
            document.body.removeEventListener('mousemove', onMouseMove);
            document.body.removeEventListener('mouseup', onMouseUp)
        }

        function onBlur() {
            console.log("Потеря фокуса на окне браузера")
            onMouseUp()
        }

        window.addEventListener('blur', onBlur)
        
        function onMouseLeave() {
            console.log("out of window")
            onMouseUp()
        }
        
        document.addEventListener('mouseleave',onMouseLeave)

        document.body.addEventListener('mouseup', onMouseUp)

    } else if (classList.contains("black") && square.id === 'square') {
        alert("Данный обьект нельзя передвинуть!")
    }
    
}

// function onMouseOut(event){
//     if (!event.toElement && !event.relatedTarget){
//         onMouseUp()
//     }
// }

// document.body.addEventListener('mouseout',onMouseOut)
