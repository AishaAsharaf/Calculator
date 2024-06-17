function display(num){
    result.value += num 

}

function clearAL(){
    result.value = ""
}

function del(){
    result.value = result.value.slice(0,-1)
}

function equal(){
    try{result.value = eval(result.value)}
    catch(error){
        
        result.value = "error"
        setTimeout(()=>{result.value},1000)
    }
    fina
}