import React, {useEffect, useState} from 'react';
import NavbarJS from '../layout/Navbar';
import productsData from "../../products.json";
import Carpet from './Carpet';
import FooterJS from '../layout/Footer';

const CarpetTypesJS = () => {
    
    const products = productsData.Root.Urunler.Urun;
    const navbar = {
        'Renk': 'Renk',
        'Mutfak Halıları': ['Mutfak','Kaydırmaz Mutfak'],
        'Premium Özel Desen Kilimler': 'Özel',
        'Modern Halı Tarzları': ['Modern','Vintage','Soyut Desen'],
        'Şekil': ['Dikdörtgen', 'Kare', 'Oval'],
        'Çocuk Halıları': 'Çocuk',
        'İndirimler':'Muhteşem İndirimli Ürünler'
    };
    const [reload,setReload] = useState(false)

  // Kullanıcının seçtiği anahtar kelimeleri al
  const selectedTerms = navbar[localStorage.getItem('navbar')] || [];
  const searchTerms = Array.isArray(selectedTerms) ? selectedTerms : [selectedTerms];

  // Her bir anahtar kelime için ayrı ayrı ürünleri ara ve birleştir
  let vintageProducts = [];
  searchTerms.forEach(term => {
      let resultsForTerm = [];

      if (localStorage.getItem('navbar') === 'İndirimler') {
          resultsForTerm = products.filter(product => product.Kategori.includes(term));
      } else {
          resultsForTerm = products.filter(product => product.UrunAdi.includes(term));
      }

      vintageProducts.push(...resultsForTerm);
  });

    useEffect(() => {
        // Sayfa yüklendiğinde localStorage'dan değeri al
        localStorage.getItem('navbar');
    }, []);


    return (
        <>
           <NavbarJS setReload={setReload}/>
           <Carpet vintageProducts={vintageProducts} reload={reload} setReload={setReload}/>
           <FooterJS/>
        </>
    );
};

export default CarpetTypesJS;
