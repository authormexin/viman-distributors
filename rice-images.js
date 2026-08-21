(() => {
  const riceImages = {
    '25kgs BASMATI RICE': 'https://cdn.mafrservices.com/sys-master-root/h29/h16/32257238171678/21752_main.jpg',
    '25kgs BIRIYANI RICE': 'https://cdn.mafrservices.com/sys-master-root/h77/hb0/27011296362526/21762_main.jpg',
    '25kgs PISHORI RICE': 'https://cdn.mafrservices.com/sys-master-root/he1/h3b/29514579935262/170960_main.jpg',
    '25kgs SINDANO RICE': 'https://d16zmt6hgq1jhj.cloudfront.net/product/35932/SINDANO-RICE-25KG-PKG-509681296.webp'
  };

  function fixRiceImages() {
    document.querySelectorAll('#products .card').forEach(card => {
      const title = card.querySelector('h3');
      const image = card.querySelector('img');
      if (!title || !image) return;

      const correctImage = riceImages[title.textContent.trim()];
      if (!correctImage) return;

      if (image.src !== correctImage) {
        image.src = correctImage;
      }
      image.alt = title.textContent.trim();
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    fixRiceImages();
    const products = document.querySelector('#products');
    if (products) {
      new MutationObserver(fixRiceImages).observe(products, { childList: true });
    }
  });
})();
