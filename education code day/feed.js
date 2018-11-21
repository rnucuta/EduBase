var linkme = document.getElementById("linkme");

disarray.forEach(function(link) {
  var el = document.createElement('a');
  el.setAttribute("href", link);
  var len = link.length-5
  var throwaway = link.substring(0, len);
  throwaway = throwaway.charAt(0).toUpperCase();
  el.innerHTML=throwaway + link.substring(1, len);;
  console.log(link.substring(0, len));
  linkme.appendChild(el);
  console.log(linkme);
})
