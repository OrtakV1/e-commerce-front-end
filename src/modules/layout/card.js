import productsData from '../../products.json';


const CardJS = () => {
    const products = productsData.Root.Urunler.Urun;
    const vintageProducts = products.filter(product => product.UrunAdi.includes("Vintage"));
    console.log("a")
    return (
        <div className="product-section">
            <div className="container">
                <div className="row">
                    {vintageProducts.map(product => (
                        <div key={product.UrunKartiID} className="col-12 col-md-4 col-lg-3 mb-5 mb-md-0">
                            <a className="product-item" href={product.UrunUrl}>
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
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CardJS
