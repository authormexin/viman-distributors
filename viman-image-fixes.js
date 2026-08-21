/* Verified public image URLs for Viman bean and Jik products. */
const vimanImageFixes={
  'Maize 90kg':'https://freshdi.com/files/img20240824172426.jpg',
  'Makueni Ndengu 90kg':'https://img.kilimall.com/c/public/store/9953/goods/image/100871902.jpg',
  'Nylon Ndengu 90Kgs':'https://pbs.twimg.com/media/FCHzSt1XIAQYOXy.jpg',
  'Kamande 50kg':'https://cdn.mafrservices.com/sys-master-root/h6e/h84/16930285846558/9003_main.jpg',
  'Jik Bleach Regular 4×1.5L':'https://cdnprod.mafretailproxy.com/sys-master-root/h2b/h0c/47700534951966/480Wx480H_148450_1.jpg',
  'Jik Bleach Colours 4×1.5L':'https://cdnprod.mafretailproxy.com/sys-master-root/h00/h1d/17328408526878/89866_main.jpg_480Wx480H',
  'Makueni Ndengu — Price per KG':'https://img.kilimall.com/c/public/store/9953/goods/image/100871902.jpg',
  'Nylon Ndengu — Price per KG':'https://pbs.twimg.com/media/FCHzSt1XIAQYOXy.jpg',
  'Kamande — Price per KG':'https://cdn.mafrservices.com/sys-master-root/h6e/h84/16930285846558/9003_main.jpg',
  'Njahi — Price per KG':'https://d16zmt6hgq1jhj.cloudfront.net/product/1726/dVUbSsjJhmUivqB0wi6c5s8xrSu0kUQoR19KZBqB.png',
  'Yellow Beans — Price per KG':'https://mamamata.com/cdn/shop/products/image_37aca369-7efa-487b-9e05-2426e766795a_1200x1200.jpg?v=1656195321',
  'Wairimu Beans — Price per KG':'https://gentilsshop.com/cdn/shop/products/Wairimu_RedKidney_beans_Front_1200x1200.jpg?v=1585257930',
  'Nyayo Beans — Price per KG':'https://mekazon.com/cdn/shop/files/Amana_Nyayo_Beans_Red_Kidney_Beans_Premium_Kenyan_Dry_Beans_1kg_MEKAZON.jpg?v=1770818533&width=1000',
  'Rosecoco — Price per KG':'https://static.wixstatic.com/media/b9a05c_e6df03951eb44ecfba0e0fdbc2229634~mv2.jpg/v1/fill/w_521%2Ch_524%2Cal_c%2Cq_80%2Cenc_avif%2Cquality_auto/b9a05c_e6df03951eb44ecfba0e0fdbc2229634~mv2.jpg',
  'Pigeon Peas/Bhaazi — Price per KG':'https://mamamata.com/cdn/shop/products/image_83f25d4b-c9b8-4484-83f6-b0358023922e_800x.jpg?v=1623455314'
};
Object.entries(vimanImageFixes).forEach(([name,url])=>{const p=products.find(x=>x.name===name);if(p)p.img=url;});
if(typeof renderProducts==='function')renderProducts();
if(typeof renderCart==='function')renderCart();