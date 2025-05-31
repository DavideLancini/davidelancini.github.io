document.addEventListener("DOMContentLoaded", () => {
 if (header) {
  header.innerHTML = `<div class="container"><h1><a href="index.html" id="logo">Dev.</a></h1><nav id="nav"><ul>
<li class><a href="con_indice.html">Con Indice</a></li>
<li class><a href="senza_indice.html">Senza Indice</a></li>
</ul></nav></div>`;
 }
 if (footer) {
  footer.innerHTML = `<section class="container"><header class="major"><h2>Contact</h2><span class="byline">Come along with me</span></header><ul class="icons"><li class="active"><a href="https://www.facebook.com/davidelenc" class="fa fa-facebook"><span>Facebook</span></a></li><li><a href="https://twitter.com/davidelenc" class="fa fa-twitter"><span>Twitter</span></a></li><li><a href="https://www.linkedin.com/in/davide-lancini-111997163/" class="fa fa-linkedin"><span>LinkedIn</span></a></li></ul><hr /></section><div id="copyright">Made by Lancini Davide</div>`;
 }
});
