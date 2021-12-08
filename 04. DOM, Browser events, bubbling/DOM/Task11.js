class VladDOMAPI{
    constructor(selector){
        this.selectedDOM = document.body.querySelectorAll(selector)
        this.stat = {}
        this.value = {}

        let tagName
        
        if(this.selectedDOM.length === 0){
            console.log("По данному селектору не получен ни один DOM элемент, возможно допущена ошибка в написании, или подходящих DOMelement'ов нет")
        }

        for (let tag of this.selectedDOM){
            
            // console.log(tag.innerHTML) 
            tagName = tag.tagName.toLowerCase();

            if (this.stat[tagName] !== undefined){
                this.stat[tagName] += 1
                this.value[tagName + 'Values'].push(tag)              
            } else {
                this.stat[tagName] = 1
                this.value[tagName + 'Values'] = []
                this.value[tagName + 'Values'].push(tag)

                this[tagName + 's'] = () => {

                    let currTagName = tag.tagName.toLowerCase()
                    console.log(currTagName)
                    return this.value[currTagName + 'Values']
                }
            }

        }
    }
   
    stats(){ 
        
        let nums = [12,13,14]

        for (let tag in this.stat){
            let value = this.stat[tag]
            value % 10 >= 2 && value % 10 <= 4  && nums.indexOf(value % 100) == -1 
           ? console.log("Tag " + tag + " == " + value + " разa") 
           : console.log("Tag " + tag + " == " + value + " раз")
        }

        return this.stat 
    }
    
}

function select(selector){
    return new VladDOMAPI(selector)
}

let api = select('*')

let a = api.divs()

let stat = api.stats()

let div = select('#main-container')