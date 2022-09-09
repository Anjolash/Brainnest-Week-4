var cal = document.getElementsByTagName("table");
cal.onkeyup = function(event){
    if(event.keyCode === 13){
        console.log("Enter");
        let x = document.getElementById("display").value;
        console.log(x);
        solve();
    }
}


function solve(){
    let x = document.getElementById("display").value
    let y = math.evaluate(x)
    document.getElementById("display").value = y
}

solve()
