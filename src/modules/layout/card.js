import productsData from '../../products.json';
import {useEffect, useState} from "react";

const CardJS = () => {
    const products = productsData.Root.Urunler.Urun;

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    {products.map(product => (
                        <div key={product.UrunKartiID} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href={product.UrunUrl}>
                                <img
                                    src={product.Resimler.Resim[0]}
                                    className="img-fluid product-thumbnail"
                                    alt={product.UrunAdi}
                                />
                                <h3 className="product-title">{product.UrunAdi}</h3>
                                <strong className="product-price">{product.Marka}</strong>
                                <span className="icon-cross">
                  <img src="images/cross.svg" className="img-fluid" alt="Cross"/>
                </span>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardJS
