import productsData from '../../products.json';
import {useState} from "react";


const CardJS = ({button}) => {
    let search
    const products = productsData.Root.Urunler.Urun;
    if (button === 'Bohem')
        search = 'Makine Dokuması Pamuklu'
    if (button === 'İskandinav')
        search = 'İskandinav'
    if (button === 'Vintage')
        search = 'Vintage'
    if (button === 'Lazer Kesim')
        search = 'Dekoratif Pamuklu Dokuma Taban'
    const vintageProducts = products.filter(product => product.UrunAdi.includes(`${search}`));

    const handleProductClick = (event, productId) => {
        event.preventDefault();
        console.log("Tıklanan ürün ID:", productId);
    };

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    {vintageProducts.map(product => (
                        <div key={product.UrunKartiID} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href={product.UrunUrl}
                               onClick={(e) => handleProductClick(e, product.UrunKartiID)}>
                                <img
                                    src={product.Resimler.Resim[0]}
                                    className="img-fluid product-thumbnail"
                                    alt={product.UrunAdi}
                                    style={{objectFit: 'cover', height: '400px'}}
                                />
                                <h6 className="product-title">{product.UrunAdi}</h6>
                                <strong className="product-price">{product.Marka}</strong>
                                <span className="icon-cross mb-2">
                            <img src="images/cross.svg" style={{maxWidth: '100%', height: 'auto'}} alt="Cross"/>
                        </span>
                                {product.UrunSecenek.Secenek.map(option => (
                                    option.EkSecenekOzellik.Ozellik._Deger === "80 x 120 cm" && (
                                        <div key={option.VaryasyonID} className="product-price">
                                            <strong
                                                className="product-price">{option.SatisFiyati} {option.ParaBirimi}</strong>
                                        </div>
                                    )
                                ))}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default CardJS
