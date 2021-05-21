function calculate(){
    var input = document.getElementById("input").value
    var output = (input * 9/5) + 32
    document.getElementById("output").innerHTML = output
    if (output > 95){
        console.log("Its to hot")
        document.getElementById("h3").innerHTML = "Its to hot"
    }
    else{
        console.log("its cold")
        document.getElementById("h3").innerHTML = "Its cold"
    }
}