import React, {useEffect, useRef, useState} from 'react';
import NavbarJS from "../layout/Navbar";
import FooterJS from "../layout/Footer";
import productsData from "../../products.json";

const DetailsPage = () => {
  const targetId = localStorage.getItem('id');

  const products = productsData.Root.Urunler.Urun;
  const matchingProduct = products.find(product => product.UrunKartiID === targetId);
  console.log(matchingProduct);
  const [imageSrc, setImageSrc] = useState(matchingProduct.Resimler.Resim[0]); // Set the initial image source
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0)
  const pageTopRef = useRef(null);

  useEffect(() => {
    if (pageTopRef.current) {
      pageTopRef.current.scrollIntoView();
    }
  }, []);


  useEffect(() => {
    // Her 'quantity' değeri değiştiğinde 'value' güncelleniyor.
    setPrice(value * quantity);
  }, [quantity, value]);
  const increaseQuantity = () => {
  setQuantity(quantity + 1)
  }

  const decreaseQuantity = () => {
    if (quantity > 1) { // Check if quantity is greater than 1
      setQuantity(quantity - 1);
    }
  }

  const changeImageReact = (newImageSrc) => {
    setImageSrc(newImageSrc);
  };


  return (
      <div ref={pageTopRef}>
        <NavbarJS/>
        <div className="why-choose-section" >
          <div className="container">
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-5 col-sm-12 p-3">
                <div className="img-wrap">
                  <div className="images p-1 d-flex justify-content-center">
                    {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                    <img
                      id="main-image"
                      src={imageSrc}
                      className="img-fluid fixed-image"
                      alt="Main Image"
                    />
                  </div>
                  <div className="text-center d-flex justify-content-center mt-3">
                  {matchingProduct.Resimler.Resim.slice(0, 4).map((resim, index) => (
                    <img
                      key={index}
                      width={65}
                      height={65}
                      onClick={() => changeImageReact(resim)}
                      src={resim}
                      className="img-thumbnail"
                      alt={`Thumbnail ${index + 1}`}
                      style={{ cursor: "pointer" }}
                    />
                  ))}

                    {/* Add more thumbnails here */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="section-title">
                  {matchingProduct.UrunAdi}
                </h2>
                <p>Stok Kodu: ({matchingProduct.UrunSecenek.Secenek[0].StokKodu})</p>
                <div className="row my-3">
                  <div className="col-12 col-md-12">
                    <div className="feature">
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star checked" />
                      <span className="fa fa-star" />
                      <span style={{ marginLeft: 5 }}>
                  <b>4.6</b>
                </span>
                    </div>
                    <div className="feature mt-0 pt-0">
                      <strong style={{ fontSize: 20 }}>
                        <b className="price">
                          {price ? price.toFixed(2) +' TL' : 'Seçim Yapınız'}
                        </b>
                      </strong>
                    </div>
                  </div>
                  <style
                    dangerouslySetInnerHTML={{
                      __html:
                        "\n              .fixed-image {\n                width: 550px;\n                height: 500px;\n                object-fit: cover;\n              }\n\n              .checked {\n                color: orange;\n              }\n            "
                    }}
                  />
                  <div className="col-12 col-md-12 col-sm-12">
                    <div className="feature">
                      {matchingProduct.UrunSecenek.Secenek.map((secenek, index) => (
                        <button
                          key={index}
                          style={{
                            color: "black",
                            border: "1px solid black",
                            background: secenek.SatisFiyati === value ? "gray" : "white",
                          }}
                          className={`btn btn-white-outline m-1 size-button ${
                            secenek.SatisFiyati === value ? "active" : ""
                          }`}
                          onClick={() => setValue(secenek.SatisFiyati)}
                        >
                          {secenek.EkSecenekOzellik.Ozellik._Deger}
                        </button>
                      ))}
                    </div>
                  </div>
                  <div className="col-12 col-md-12">
                    <div className="feature">
                      <div className="input-group ml-3">
                        <div className="input-group-prepend">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="decreaseQuantity"
                            onClick={decreaseQuantity}
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="number"
                          className="text-center"
                          id="productQuantity"
                          defaultValue={1}
                          value={quantity}
                          min={1}
                          style={{ width: 50, borderRadius: 30}}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="increaseQuantity"
                            onClick={increaseQuantity}
                          >
                            +
                          </button>
                        </div>
                        <button
                          className="btn btn-primary "
                          style={{ borderRadius: 30, marginLeft: 10 }}
                        >
                          Sepete Ekle
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
  <div class="comments">
    <div class="container mt-4 p-3 mb-5">
      <ul class="nav nav-tabs justify-content-center" id="myTabs" role="tablist" >
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="urun-detay-tab" data-bs-toggle="tab" href="#urun-detay" role="tab"
            aria-controls="urun-detay" aria-selected="true">Ürün Detayı</a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="urun-yorumlari-tab" data-bs-toggle="tab" href="#urun-yorumlari" role="tab"
            aria-controls="urun-yorumlari" aria-selected="false">Ürün Yorumları</a>
        </li>
      </ul>
      <div class="tab-content" id="myTabsContent">
        
        <div class="tab-pane fade show active" id="urun-detay" role="tabpanel" aria-labelledby="urun-detay-tab">
          <p>Hayalini kurduğunuz sıcaklık ve zarafet için kırmızı rengin büyülü dünyasına adım atın. Kırmızı renkli
            halımız, odanıza derinlik ve canlılık katacak ve her adımınızda sizi tutkulu bir yolculuğa davet edecektir.
          </p>
          <p>Kırmızı, enerji ve tutkunun rengidir. Bu halı, odanıza bu dinamik ve coşkulu hissi getirecek. Hem modern
            hem de klasik dekorasyon tarzlarına mükemmel bir şekilde uyum sağlayan bu halı, evinize sıcaklık ve zarafet
            katmanın mükemmel bir yoludur.</p>
          <p>Dokusu, her dokunuşta rahatlık hissi verirken, zengin kırmızı rengi, odanıza sıcaklık ve şıklık katar. Bu
            halı, oturma odası, yatak odası veya yemek odası gibi herhangi bir odaya mükemmel bir şekilde uyum sağlar.
          </p>
          <p>Kaliteli malzemelerden üretilmiş olan bu halı, dayanıklılığı ve uzun ömürlü kullanımıyla sizi memnun
            edecektir. Ayrıca, kolay temizlenir ve bakımı yapılır, böylece uzun yıllar boyunca güzelliğini korur.</p>
          <p>Kırmızı rengin enerjisini ve sıcaklığını evinize getirin. Bu muhteşem kırmızı renkli halı, mekanınıza zarif
            bir dokunuş katarken, odanızı daha davetkar ve canlı bir hale getirecektir.</p>
        </div>

        
        <div class="tab-pane fade" id="urun-yorumlari" role="tabpanel" aria-labelledby="urun-yorumlari-tab">



          
          <div class="mt-2">

            <div class="d-flex flex-row p-3">

              {/* Kanka burada img yüklenmiyor burada hata alıyorum*/ }
              {/* <img src="" width="40" height="40" class="rounded-circle mr-3"> */}

              <div class="w-100 comments-detail">

                <div class="d-flex justify-content-between align-items-center">
                  <div class="d-flex flex-row align-items-center">
                    <span class="mr-2">Yusuf Sezer</span>
                  </div>
                  <small>12 Saat Önce</small>
                </div>

                <p class="text-justify comment-text mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</p>
                <div class="d-flex flex-row user-feed">
                  <span class="wish"><i class="fa fa-heartbeat icon-settings"></i>24</span>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  </div>

        <FooterJS/>
      </div>

    );
};

export default DetailsPage;
