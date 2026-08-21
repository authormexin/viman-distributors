/* SAMWEST DISTRIBUTORS KENYA branding */
document.title = document.title.replace(/Viman Distributors/gi, "SAMWEST DISTRIBUTORS KENYA").replace(/Viman/gi, "SAMWEST");
document.querySelectorAll('meta[name="description"]').forEach(m => { m.content = m.content.replace(/Viman Distributors/gi, "SAMWEST WHOLESALE DISTRIBUTORS KENYA").replace(/Viman/gi, "SAMWEST"); });
document.querySelectorAll('.brand').forEach(b => { const span=b.querySelector('span'); if(span) span.innerHTML='SAMWEST <b>DISTRIBUTORS KENYA</b>'; });
document.querySelectorAll('footer strong').forEach(e => e.textContent='SAMWEST DISTRIBUTORS KENYA');
document.querySelectorAll('footer span').forEach(e => e.textContent='Your trusted wholesale distributor for quality groceries, household products, cleaning supplies and personal care products across Kenya.');
document.querySelectorAll('footer small').forEach(e => e.textContent='© 2026 SAMWEST WHOLESALE DISTRIBUTORS KENYA. All rights reserved.');
document.querySelectorAll('.eyebrow').forEach(e => { if(/VIMAN/i.test(e.textContent)) e.textContent='SAMWEST WHOLESALE DISTRIBUTORS KENYA'; });