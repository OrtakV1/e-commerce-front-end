import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleUp } from '@fortawesome/free-solid-svg-icons';



export default function Carpet({vintageProducts,reload,setReload}) {
  const navigate = useNavigate();
  const [isAtTop, setIsAtTop] = useState(true);
  const handleProductClick = (event, productId) => {
    event.preventDefault();
    navigate('/details');
    localStorage.setItem('id',productId)
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0); // Sayfa en üstteyse true olarak ayarlayın
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = (event) => {
    event.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


  if(reload){
    window.location.reload()
    setReload(false)
  }

  return (
    <div className="product-section" >
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
                  style={{borderRadius: '12px', objectFit: 'cover', height: '400px'}}
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
      <div id="back-to-top" style={{ position: 'fixed', bottom: '30px', right: '20px', display: isAtTop ? 'none' : 'block' }}>
        <a href="#/" onClick={scrollToTop}>
          <FontAwesomeIcon icon={faChevronCircleUp} size="3x" color="#3b5d50" />
        </a>
      </div>
    </div>
  )
}
