import React from 'react';

export default function ProductComment({ matchingProduct }) {
  var metin = matchingProduct.Aciklama.__cdata;
  var duzeltilmisMetin = metin.replace(/<br>/g, '');

  function ayirMetniMaddeMadde(metin) {
    // Metni satır satır böler
    const satirlar = metin.split('\n');

    let maddeBaslik = ''; // Şu anki madde başlığı
    const sonuclar = []; // Madde başlıkları ve içeriklerini saklayacak dizi
    let suankiMadde = null; // Şu anki madde

    // Her satırı döngüde işle
    for (let i = 0; i < satirlar.length; i++) {
      const satir = satirlar[i].trim(); // Satırın başındaki ve sonundaki boşlukları temizle

      // Satır boşsa veya boşluklu bir satırsa madde içeriğine ekleyin
      if (satir === '' || /^[\s\u200B]*$/.test(satir)) {
        if (suankiMadde) {
          suankiMadde.icerik += '\n' + satir;
        }
      }
      // Satır bir madde başlığına benziyorsa yeni bir madde oluşturun
      else {
        if (suankiMadde) {
          sonuclar.push(suankiMadde);
        }
        maddeBaslik = satir;
        suankiMadde = {
          baslik: maddeBaslik,
          icerik: '',
        };
      }
    }

    // Son maddeyi sonuçlara ekleyin
    if (suankiMadde) {
      sonuclar.push(suankiMadde);
    }

    return sonuclar;
  }

  console.log(ayirMetniMaddeMadde(duzeltilmisMetin));

  return (
    <div className="comments">
      <div className="container mt-4 p-3 mb-5">
        <ul
          className="nav nav-tabs justify-content-center"
          id="myTabs"
          role="tablist"
        >
          <li className="nav-item" role="presentation">
            <a
              className="nav-link active"
              id="urun-detay-tab"
              data-bs-toggle="tab"
              href="#urun-detay"
              role="tab"
              aria-controls="urun-detay"
              aria-selected="true"
            >
              Ürün Detayı
            </a>
          </li>
          <li className="nav-item" role="presentation">
            <a
              className="nav-link"
              id="urun-yorumlari-tab"
              data-bs-toggle="tab"
              href="#urun-yorumlari"
              role="tab"
              aria-controls="urun-yorumlari"
              aria-selected="false"
            >
              Ürün Yorumları
            </a>
          </li>
        </ul>
        <div className="tab-content" id="myTabsContent">
          <div
            className="tab-pane fade show active"
            id="urun-detay"
            role="tabpanel"
            aria-labelledby="urun-detay-tab"
          >
            <p>{duzeltilmisMetin}</p>
          </div>
          <div
            className="tab-pane fade"
            id="urun-yorumlari"
            role="tabpanel"
            aria-labelledby="urun-yorumlari-tab"
          >
            <div className="mt-2">
              <div className="d-flex flex-row p-3">
                <img
                  src="sdasda"
                  width={40}
                  height={40}
                  className="rounded-circle mr-3"
                  alt="Profil Fotosu"
                />
                <div className="w-100 comments-detail">
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="d-flex flex-row align-items-center">
                      <span className="mr-2">Yusuf Sezer</span>
                    </div>
                    <small>12 Saat Önce</small>
                  </div>
                  <p className="text-justify comment-text mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam
                  </p>
                  <div className="d-flex flex-row user-feed">
                    <span className="wish">
                      <i className="fa fa-heartbeat icon-settings" />
                      24
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
