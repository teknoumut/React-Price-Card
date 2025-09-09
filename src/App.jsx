
import './App.css'
import Carditem from './components/Cards/Carditem'

function App() {

  const temelpaket = [
    "5 GB Storage",
    "Sınırsız Kullanıcı",
    "E-posta Desteği",
    "7/24 Telefon Desteği"
  ];
   const temelpaketpasifOzellikler = [
    "Ücretsiz Domain",
    "Ücretsiz SSL",
  ];

  const standartpaketAktifOzellikler = [
  "10 GB Storage",
  "Sınırsız Kullanıcı",
  "E-posta Desteği",
  "7/24 Telefon Desteği",
  "Ücretsiz SSL"
];
const standartpaketPasifOzellikler = [
  "Özel Domain",
];

const proPaketAktifOzellikler = [
  "50 GB Storage",
  "Sınırsız Kullanıcı",
  "E-posta ve Telefon Desteği",
  "7/24 Öncelikli Destek",
  "Ücretsiz SSL",
];
const proPaketPasifOzellikler = [
  "Özel API Erişimi"
];
  return (
    <>
       <div className="  md:w-full lg:w-3/4 p-10 grid grid-cols-1 md:grid-cols-3 gap-3 text-center mx-auto">
          <Carditem  baslik={"Temel Paket" } renk={"green"} fiyat={20} aktifYazilar={temelpaket} pasifYazilar={temelpaketpasifOzellikler} butonrenk={"green"} />
          <Carditem  baslik={"Standart Paket"} renk={"blue"} fiyat={35} aktifYazilar={standartpaketAktifOzellikler} pasifYazilar={standartpaketPasifOzellikler} butonrenk={"blue"}/>
          <Carditem  baslik={"Pro Paket"} renk={"red"} fiyat={50} aktifYazilar={proPaketAktifOzellikler} pasifYazilar={proPaketPasifOzellikler} butonrenk={"red"}/>
       </div>
    </>
  )
}

export default App
