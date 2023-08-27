import React, {useState} from 'react';
import NavbarJS from "../layout/Navbar";
import FooterJS from "../layout/Footer";

const DetailsPage = () => {
  const [imageSrc, setImageSrc] = useState("https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");

  const changeImageReact = (newImageSrc) => {
    setImageSrc(newImageSrc); // setImageSrc, görüntüyü tutan state'i güncellemek için kullanılan state değişkeni
  };


  return (
      <>
        <NavbarJS/>
        <div className="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-5">
                <div className="intro-excerpt">
                  <h1>About Us</h1>
                  <p className="mb-4">
                    Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
                    velit. Aliquam vulputate velit imperdiet dolor tempor tristique.
                  </p>

                  <p>
                    <a href="#/" className="btn btn-secondary me-2">
                      Shop Now
                    </a>
                    <a href="#/" className="btn btn-white-outline">
                      Explore
                    </a>
                  </p>
                </div>
              </div>
              <div className="col-lg-7">
                <div className="hero-img-wrap">
                  {/* eslint-disable-next-line jsx-a11y/img-redundant-alt */}
                  <img src="/images/couch.png" className="img-fluid"  alt="image"/>
                </div>
              </div>
            </div>
          </div>
        </div>


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
                      onClick={() => changeImageReact("https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
                      src="https://images.pexels.com/photos/1866149/pexels-photo-1866149.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="img-thumbnail"
                      alt="Thumbnail 1"
                    />
                    <img
                      width={65}
                      height={65}
                      onClick={() => changeImageReact("https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")}
                      src="https://images.pexels.com/photos/6580227/pexels-photo-6580227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                      className="img-thumbnail"
                      alt="Thumbnail 2"
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
                        <b className="price">Seçim Yapınız</b>
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
                      >
                        100x25
                      </button>
                      <button
                        style={{ color: "black", border: "1px solid black" }}
                        className="btn btn-white-outline m-1 size-button"
                        data-price={75}
                      >
                        100x50
                      </button>
                      <button
                        style={{ color: "black", border: "1px solid black" }}
                        className="btn btn-white-outline m-1 size-button"
                        data-price={100}
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
                          >
                            -
                          </button>
                        </div>
                        <input
                          type="number"
                          className="text-center"
                          id="productQuantity"
                          defaultValue={1}
                          min={1}
                          style={{ width: 50, borderRadius: 30, paddingLeft: 15 }}
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-secondary"
                            type="button"
                            id="increaseQuantity"
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
        {/* End Why Choose Us Section */}

        <FooterJS/>
      </>

    );
};

export default DetailsPage;
