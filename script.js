function generate(){
    const text = document.getElementById("text");
    const imgtag = document.getElementById("imgtag");
    const imgdiv = document.getElementById("qrimg");
    if (text.value.length>0) {
        imgtag.src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+text.value;
        imgtag.style.display="block"
    } else {
        text.classList.add('error');
        setTimeout(()=>{
            text.classList.remove('error');
        },1000);
    }
}
