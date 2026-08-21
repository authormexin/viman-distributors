/* Viman Distributors branding */
document.title=document.title.replace(/SAMWEST WHOLESALE DISTRIBUTORS KENYA/gi,'Viman Distributors').replace(/SAMWEST DISTRIBUTORS KENYA/gi,'Viman Distributors').replace(/SAMWEST/gi,'Viman');
document.querySelectorAll('meta[name="description"]').forEach(m=>{m.content=m.content.replace(/SAMWEST WHOLESALE DISTRIBUTORS KENYA/gi,'Viman Distributors').replace(/SAMWEST/gi,'Viman')});
document.querySelectorAll('.brand').forEach(b=>{const span=b.querySelector('span');if(span)span.innerHTML='Viman <b>Distributors</b>';b.setAttribute('aria-label','Viman Distributors home');const img=b.querySelector('img');if(img)img.alt='Viman Distributors logo'});
document.querySelectorAll('footer strong').forEach(e=>e.textContent='Viman Distributors');
document.querySelectorAll('footer span').forEach(e=>e.textContent='Your trusted distributor for quality groceries, household products, cleaning supplies and personal care products across Kenya.');
document.querySelectorAll('footer small').forEach(e=>e.textContent='© 2026 Viman Distributors. All rights reserved.');
document.querySelectorAll('.eyebrow').forEach(e=>{e.textContent=e.textContent.replace(/SAMWEST WHOLESALE DISTRIBUTORS KENYA/gi,'VIMAN DISTRIBUTORS').replace(/ABOUT SAMWEST/gi,'ABOUT VIMAN')});