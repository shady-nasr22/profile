const track=document.querySelector(".certificate-track");

document.querySelector(".next").onclick=()=>{

track.scrollBy({

left:460,

behavior:"smooth"

});

}

document.querySelector(".prev").onclick=()=>{

track.scrollBy({

left:-460,

behavior:"smooth"

});

}

const lightbox=document.getElementById("lightbox");

const lightboxImage=document.getElementById("lightbox-image");

document.querySelectorAll(".certificate").forEach(img=>{

img.onclick=()=>{

lightbox.style.display="flex";

lightboxImage.src=img.src;

}

})

document.querySelector(".close-lightbox").onclick=()=>{

lightbox.style.display="none";

}

lightbox.onclick=e=>{

if(e.target===lightbox){

lightbox.style.display="none";

}

}


function sendWhatsApp(){

const name=document.getElementById("name").value.trim();

const phone=document.getElementById("phone").value.trim();

const message=document.getElementById("message").value.trim();

if(name==="" || phone==="" || message===""){

alert("Please fill in all fields.");

return;

}

const btn=document.getElementById("sendBtn");

btn.classList.add("loading");

setTimeout(()=>{

const text=

`👤 Name: ${name}%0A`

+

`📞 Phone: ${phone}%0A%0A`

+

`💬 Message:%0A${message}`;

window.open(

`https://wa.me/201025130799?text=${text}`,

"_blank"

);

btn.classList.remove("loading");

document.getElementById("name").value="";

document.getElementById("phone").value="";

document.getElementById("message").value="";

},1000);

}