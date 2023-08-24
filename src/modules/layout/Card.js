import productsData from '../../products.json';
import {useNavigate} from "react-router-dom";


const CardJS = ({button}) => {
    const products = productsData.Root.Urunler.Urun;
    const searchOptions = {
        'Bohem': 'Makine Dokuması Pamuklu',
        'İskandinav': 'İskandinav',
        'Vintage': 'Vintage',
        'Lazer Kesim': 'Dekoratif Pamuklu Dokuma Taban'
    };
    const search = searchOptions[button] || ''
    const vintageProducts = products.filter(product => product.UrunAdi.includes(`${search}`));
    const navigate = useNavigate();
    const handleProductClick = (event, productId) => {
        event.preventDefault();
        navigate(`/details/`);
    };

    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    {vintageProducts.slice(0, 12).map(product => (
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
