!function(){var e,t;e=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP"),e.onreadystatechange=function(){e.readyState==XMLHttpRequest.DONE&&(200==e.status?(console.log(e.responseText),t=JSON.parse(e.responseText),n(".desktop-nav"),n(".sidebar-mobile-nav"),console.log(t)):alert("there was an error and here is what the server said:"+httpRequest.status))};var n=function(e){for(var n=document.querySelector(e),a=t.items,r=0;r<a.length;r++){var l=document.createElement("li"),o=document.createElement("a");n.appendChild(l),l.appendChild(o),o.innerHTML=a[r].label,o.setAttribute("href",a[r].url);var s=a[r].items;if(s.length>0){var d=document.createElement("ul"),i=document.createElement("div");d.setAttribute("class",a[r].label),l.appendChild(d),l.appendChild(i),i.setAttribute("class","drop-arrow");for(var c=0;c<s.length;c++){var p=document.createElement("li"),u=document.createElement("a");d.appendChild(p),p.appendChild(u),u.innerHTML=s[c].label,u.setAttribute("href",s[c].url)}}}};e.open("GET","/api/nav.json",!0),e.send(),console.log("complete")}();