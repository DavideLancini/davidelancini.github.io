const headerHTML = `<div id="header"><div class="container"><h1><a href="index.html" id="logo">Dev.</a></h1><nav id="nav"><ul>
<li class><a href="con_indice.html">Con Indice</a></li>
<li class><a href="senza_indice.html">Senza Indice</a></li>
</ul></nav></div></div>
`;

document.addEventListener("DOMContentLoaded", () => {
 const headerContainer = document.getElementById("header");
 if (headerContainer) {
  headerContainer.innerHTML = headerHTML;
 }
});
