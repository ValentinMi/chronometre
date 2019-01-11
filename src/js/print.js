function print(){
    var printbtn = document.querySelector("#printbtn");
    printbtn.addEventListener("click",printlist);
    
    function printlist(){
        console.log("print");
        window.print();
    }
}

export default print;