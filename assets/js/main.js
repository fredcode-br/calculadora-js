function insert(num){
    var result = document.getElementById('result').innerHTML;
    if(result.length == 1 && result == 0){
        result = '';
    }
    document.getElementById('result').innerHTML = result + num;
}

function calculate(){
    if(result.innerHTML){
        result.innerHTML = eval(result.innerHTML);
    }
}

function clean(){
    document.getElementById('result').innerHTML = 0;
}

function deleteInput(){
    var result = document.getElementById('result').innerHTML;
    if(result.length == 1){
        document.getElementById('result').innerHTML = 0;
    }else{
        document.getElementById('result').innerHTML = result.substring(0,result.length -1)
    }
    
}
