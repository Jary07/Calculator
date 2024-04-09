let textBox = document.querySelector("#text-box");
let btns = document.querySelectorAll(".str");
let query=document.querySelector("#querry")
let string= "";
let number=[0,1,2,3,4,5,6,7,8,9]
// let num=forEach(number)
let alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]
let sign=["+","-","*","/","%","(",")","!","@","#","$","%","^","&",",",".",":",";","{","}","[","]","?","<",">","|",]

function fact(n){
    if(n==1){
        return 1
    }
    else{
        return n*fact(n-1)
    }
}

function calculator(){
Array.from(btns).forEach((btn)=>{
    textBox.addEventListener("input",function(){
        query.textContent="Ans = "+eval(string)
    })
    btn.addEventListener('click',(e)=>{
        let text = e.target.innerHTML
        
        if(text== "=" || text=="Ans")
        {
            for(let i=0;i<string.length;i++)
            {
                if(string[i]=="^"){
                    let a= string.slice(0,i)
                    let b= string.slice(i+1,string.length+1)
                    string=Math.pow(a,b)
                }
                if(string[i]=="√"){
                    let a= string.slice(0,i)
                    let b= string.slice(i+1,string.length)
                    let d=Math.sqrt(eval(b))
                    
                    if(a[a.length-1]== "+"){
                        let c= eval(a.slice(0,a.length-1))
                        string= c + d
                    }
                    else if(a[a.length-1]== "-"){
                        let c= eval(a.slice(0,a.length-1))
                        string= c - d
                    }
                    else if(a[a.length-1]== "*"){
                        let c= eval(a.slice(0,a.length-1))
                        string= c * d
                    }
                    else if(a[a.length-1]== "/"){
                        let c= eval(a.slice(0,a.length-1))
                        string= c - d
                    }
                    else{
                        let c= eval(a.slice(0,a.length))
                        string= c * d
                    }
                }
                if(string[i]=="π"){
                    let a= string.slice(0,i)
                    let b= string.slice(i+1,string.length+1)
                    let c= eval(a)
                    let d= eval(b)
                    string= c * d * Math.PI
                }
                if(string[i]=="!"){
                    n = eval(string.slice(0,i))
                    string=fact(n)
                }
            }
            if(string==""){
                string=""
                query.textContent=""
            }
            else if(string[0]=="l" && string[3]=="("){
                let x = parseInt(string.slice(4,string.length-1))
                string = Math.log10(x)
            }
            else if(string[0]=="s" && string[3]=="("){
                let x = parseInt(string.slice(4,string.length-1))
                string = Math.sin(Math.PI*x/180)
            }
            else if(string[0]=="c" && string[3]=="("){
                let x = parseInt(string.slice(4,string.length-1))
                string = Math.cos(Math.PI*x/180)
            }
            else if(string[0]=="t" && string[3]=="("){
                let x = parseInt(string.slice(4,string.length-1))
                string = Math.tan(Math.PI*x/180)
            }
            else if(string[0]=="e")
            {
                e = Math.E
            }
            else if(string[string.length-1] == "*")
            {
                string = string.slice(0,string.length-1)
            }
            else if(string[string.length-1] == "/")
            {
                string = string.slice(0,string.length-1)
            }
            else if(string[string.length-1] == "+")
            {
                string = string.slice(0,string.length-1)
            }
            else if(string[string.length-1] == "-")
            {
                string = string.slice(0,string.length-1)
            }
            else if(string[string.length-1] == "^")
            {
                string = string.slice(0,string.length-1)
            }
            else if(string[string.length-1] == "%")
            {
                string = string.slice(0,string.length-1)/100;
            }
            else if(string[string.length-1] == "!")
            {
                string= Math.FACT
            }
            else{
                let que=string
                query.textContent=que
                string = eval(string)
            }
        }
        else if(text=="AC"){
            string=""
            query.textContent=""
        }
        else if(text=="C"){
            string = string.substring(0,string.length-1);
        }
        else if(text=="log"){
            string+=`log(`
        }
        else if(text=="sin"){
            string+=`sin(`
        }
        else if(text=="cos"){
            string+=`cos(`
        }
        else if(text=="tan"){
            string+=`tan(`
        }
        else if(text=="e"){
            string+= `e * `
        }
        else if(text=="Deg"){
            string+=""
        }
        else if(text=="Rad"){
            string+= ""
        }
        else{
            console.log(text)
            string += text;
        }
        textBox.value=string;
    })
})}


calculator();
