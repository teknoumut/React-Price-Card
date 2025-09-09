# React + Vite

Proje Adı: React Fiyat Kartı Bileşeni
Tekrar kullanılabilir, özelleştirilebilir ve modern bir React fiyatlandırma kartı bileşeni. Tailwind CSS ile hızlı ve kolay bir şekilde stilize edilmiştir.

Ekran Görüntüsü
Özellikler
Tamamen Bileşen Tabanlı: Kolayca içe aktarılıp kullanılabilir.

Özelleştirilebilir Props: Başlık, fiyat, renk, aktif ve pasif özellikler gibi tüm içeriği prop'lar aracılığıyla değiştirebilirsiniz.

Duyarlı Tasarım: Her ekran boyutuna uyum sağlar.

Temiz Kod Yapısı: React'ın en iyi uygulamaları takip edilerek oluşturulmuştur.

Tailwind CSS: Hızlı ve esnek bir şekilde stil oluşturmanıza olanak tanır.

![alt text](/public/image.png)
Kullanılan Teknolojiler
React.js

Tailwind CSS


Kurulum ve Kullanım
Projeyi kendi bilgisayarınızda çalıştırmak için aşağıdaki adımları izleyin.

1. Projeyi Klonlayın
Bash

git clone [GitHub proje linkiniz]
cd [proje-klasörü-adı]
2. Bağımlılıkları Yükleyin
Bash

npm install
# veya
yarn install
3. Projeyi Çalıştırın
npm run dev 
[localhost:51](http://localhost:5173/) adresinde çalışacaktır

Bileşenin Kullanımı
Carditem bileşenini projenize import edip aşağıdaki gibi kullanabilirsiniz:

JavaScript

import React from 'react';
import Carditem from './Carditem'; // Dosya yolunuza göre düzenleyin

const App = () => {
  const aktifOzellikler = [
    "5 GB Depolama",
    "Sınırsız Kullanıcı",
    "E-posta Desteği"
  ];
  
  return (
    <div className="flex justify-center p-8">
      <Carditem
        baslik="Temel Paket"
        fiyat="19"
        aktifYazilar={aktifOzellikler}
        renk="#3B82F6" // Tailwind renk kodları
      />
    </div>
  );
};

export default App;
Bileşen Prop'ları
baslik (string): Kartın başlığını belirler.

fiyat (string/number): Kartın fiyatını belirler.

aktifYazilar (array): Yeşil onay işaretli aktif özellikleri listeler.

pasifYazilar (array): Üstü çizili pasif özellikleri listeler. (Bu özelliği Carditem dosyanızda ekleyebilirsiniz.)

Lisans
Bu proje MIT Lisansı altındadır.

