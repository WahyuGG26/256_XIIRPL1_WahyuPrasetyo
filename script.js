const display=document.querySelector(".display");
const tombol=document.querySelectorAll("button");
const archon=["-", "+", "="];
let output="";


const hitung=(btn)=>{
    display.focus();
    if (btn ==="=" && output!=="="){
        output=eval(output.replace("%", "/100").replace("X", "*").replace(":", "/"));
    } else if (btn ==="C"){
        output="";
    } else if (btn ==="D"){
        output=output.toString().slice(0, -1);
    } else {
        if (output ==="" && archon.includes(btn)) return;
        output+=btn;
    }
    display.value=output;
}

tombol.forEach((a)=>{
    a.addEventListener("click", (e)=> hitung(e.target.dataset.value));
})
