import React, {useEffect, useState} from 'react';
import NavbarJS from "../layout/Navbar";
import FooterJS from "../layout/Footer";
import productsData from "../../products.json";

const DetailsPage = () => {
  const targetId = localStorage.getItem('id');
  const products = productsData.Root.Urunler.Urun;
  const matchingProduct = products.find(product => product.UrunKartiID === targetId);
  const [imageSrc, setImageSrc] = useState(matchingProduct.Resimler.Resim[0]); // Set the initial image source
  const [quantity, setQuantity] = useState(1)
  const [price, setPrice] = useState(0);
  const [value, setValue] = useState(0)


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
      <>
        <NavbarJS/>
        <div className="why-choose-section">
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
                    <img
                      width={65}
                      height={65}
                      onClick={() => changeImageReact(matchingProduct.Resimler.Resim[0])}
                      src={matchingProduct.Resimler.Resim[0]}
                      className="img-thumbnail"
                      alt="Thumbnail 1"
                    />
                    <img
                      width={65}
                      height={65}
                      onClick={() => changeImageReact(matchingProduct.Resimler.Resim[1])}
                      src={matchingProduct.Resimler.Resim[1]}
                      className="img-thumbnail"
                      alt="Thumbnail 1"
                    />
                    <img
                      width={65}
                      height={65}
                      onClick={() => changeImageReact(matchingProduct.Resimler.Resim[2])}
                      src={matchingProduct.Resimler.Resim[2]}
                      className="img-thumbnail"
                      alt="Thumbnail 1"
                    />
                    <img
                      width={65}
                      height={65}
                      onClick={() => changeImageReact(matchingProduct.Resimler.Resim[3])}
                      src={matchingProduct.Resimler.Resim[3]}
                      className="img-thumbnail"
                      alt="Thumbnail 1"
                    />
                    {/* Add more thumbnails here */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <h2 className="section-title">
                  Makine Dokuması Pamuklu Dokuma ve Kaymaz Taban, Şönil , Yüksek
                  Kalite, Uzun Ömürlü ,İnce Yıkanabilir ,Dekoratif Modern Oda
                  Halısı,Kilim
                </h2>
                <p>Stok Kodu: (WOOBTNY054)</p>
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
                          {price ? price +' TL' : 'Seçim Yapınız'}
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
                      <button
                        style={{ color: "black", border: "1px solid black" }}
                        className="btn btn-white-outline m-1 size-button"
                        data-price={50}
                        onClick={()=>setValue(50)}
                      >
                        100x25
                      </button>
                      <button
                        style={{ color: "black", border: "1px solid black" }}
                        className="btn btn-white-outline m-1 size-button"
                        data-price={75}
                        onClick={()=>setValue(75)}
                      >
                        100x50
                      </button>
                      <button
                        style={{ color: "black", border: "1px solid black" }}
                        className="btn btn-white-outline m-1 size-button"
                        data-price={100}
                        onClick={()=>setValue(100)}
                      >
                        100x75
                      </button>
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
                          style={{ width: 50, borderRadius: 30, paddingLeft: 15 }}
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

        <FooterJS/>
      </>

    );
};

export default DetailsPage;
