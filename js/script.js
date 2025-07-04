document.getElementById("botaoEnviar").addEventListener("click",validaFormulario)
    
    function validaFormulario(){
        if(document.getElementById("nome").value != "" && document.getElementById("email").value != "" && document.getElementById("telefone").value != ""){
            alert("Pronto! Você receberá as novidades por e-mail!")
        }

        else{
            alert("Para receber nossas novidades, por favor, preencha os campos com seu nome, e-mail e telefone.")
        }
    }

// Get the button:
let mybutton = document.getElementById("botaoTopo");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


