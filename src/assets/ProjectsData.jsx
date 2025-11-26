const projectsData = [
  {
    id: 1,
    title: "Book Shelf",
    description: "Kitapları düzenlemek ve alıntıları kaydetmek için kişisel kütüphane uygulaması.",
    image: "/screenshots/library-ss-2.png",
    images: [
      "/screenshots/library-ss-1.png",
      "/screenshots/library-ss-3.png",
      "/screenshots/library-ss-4.png"
    ],
    githubLink: "https://github.com/EsmaNurSolmaz/kutuphane",
    liveLink: "https://library-client-yki4.onrender.com",
    about: "Bu proje, MERN stack kullanılarak geliştirilmiş bir Kütüphane Yönetim Web Uygulamasıdır. Kullanıcılar kitapları yönetebilir, alıntılar ve notlar ekleyebilir ve verilerini dışa aktarabilir.",
    features: [
      "Kişisel kütüphane yönetimi",
      "Google Books'tan kitap ekleme ve arama/filtreleme yapabilme",
      "Kütüphaneyi düzenleme: kitap ekleme veya silme",
      "Kitaplara etiket ekleme ve etiketlere göre arama",
      "Alıntı ve sayfa notları ekleme; OCR teknolojisi ile görsellerden metin çıkarma",
      "Alıntı ve notları PDF veya Word dosyası olarak dışa aktarma",
    ],
    tech: [
      "React",
      "Bootstrap",
      "Express",
      "MongoDB",
      "Node.js",
      "Axios",
      "JWT",
      "pdf-lib",
      "docx",
      "File Saver"
    ]
  },

  {
    id: 2,
    title: "Locked Diary",
    description: "Kişisel günlükleri saklamak için güvenli, uçtan uca şifrelenmiş bir mobil uygulama.",
    image: "/screenshots/diary-ss-3.PNG",
    images:[
      "/screenshots/diary-ss-1.PNG",
      "/screenshots/diary-ss-2.PNG",
      "/screenshots/diary-ss-4.PNG",
      "/screenshots/diary-ss-5.PNG"
    ],
    githubLink:"https://github.com/EsmaNurSolmaz/Locked-Diary-App",
    liveLink:"",
    about: "Kilitli Günlük uygulaması, React Native ve Firebase kullanılarak geliştirilmiş güvenli bir mobil uygulamadır. Kullanıcıların özel günlük kayıtlarını maksimum güvenlik için uçtan uca şifreleme ile saklamasına olanak tanır. Her bir kayıt, kullanıcı tarafından giriş sırasında sağlanan benzersiz bir anahtar ile şifrelenir; böylece yalnızca kaydı oluşturan kullanıcı bu kaydı çözebilir ve görüntüleyebilir. Bu uygulama, kişisel notlarını yetkisiz erişimlerden korumak isteyenler için yüksek düzeyde gizlilik ve güvenlik sunar.",
    features: [
      "Secure Storage: Tüm günlük kayıtları şifrelenmiş şekilde Firebase Firestore’da güvenli olarak saklanır.",
      "Authentication: Kullanıcılar Firebase Authentication ile kayıt olabilir, giriş yapabilir ve şifrelerini sıfırlayabilir.",
      "Diary Entries: Kullanıcılar günlük kişisel kayıtlarını oluşturabilir, görüntüleyebilir ve düzenleyebilir.",
      "Encryption: Her günlük kaydı, kullanıcıya özel bir anahtar ile şifrelenir; böylece yalnızca kaydın sahibi bu kaydı çözebilir ve okuyabilir."
    ],
    tech: [
      "React Native",
      "Expo",
      "Firebase",
      "Firebase storage",
      "crypto-jS"
    ]
  },

  {
    id: 3,
    title: "Finance Manager",
    description: "Harcamaları takip etmek için modern bir finans uygulaması.",
    image: "/screenshots/finance-ss-3.PNG",
    images:[
      "/screenshots/finance-ss-1.PNG",
      "/screenshots/finance-ss-2.PNG",
      "/screenshots/finance-ss-4.PNG",
      "/screenshots/finance-ss-5.PNG",
      "/screenshots/finance-ss-6.PNG",
      "/screenshots/finance-ss-3.PNG"
    ],
    githubLink: "https://github.com/EsmaNurSolmaz/finance-manager",
    liveLink:"",
    about: "Bütçe Takip Uygulaması, React Native & Expo ile geliştirilmiş kullanıcı dostu bir mobil uygulamadır. Kullanıcıların günlük ve aylık finansal aktivitelerini takip etmelerine yardımcı olur. Uygulama; gelir ve gider kaydetme, kategorilere göre harcamaları görüntüleme ve finansal durumu etkileşimli grafiklerle görselleştirme imkânı sunar. Temiz arayüzü ile, günlük bütçe takibini kolaylaştırmayı amaçlar.",
    features: [
      "Gelir ve gider ekleme",
      "İşlemleri kategorilere ayırma",
      "Toplam bakiye, toplam gider ve kalan aylık bütçeyi görme",
      "Kategori bazlı harcama dökümü",
      "Periyodik finansal özet görme",
      "Etkileşimli grafikler (pie chart)",
      "Önemli finansal notları kaydetme, görüntüleme, düzenleme veya silme",
      "Son ödeme tarihleri veya ödeme günleri için hatırlatıcı kurma",
      "Gerçek zamanlı döviz kurlarını görme (USD, EUR, GBP vb.)",
      "Otomatik veya manuel yenileme seçenekleri",
      "Modern ve temiz arayüz"
    ],
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express.js",
      "JWT",
      "CSS",
      "Currency Api"
    ]
  },

  {
    id: 4,
    title: "Emotional Jar",
    description: "Neşeli anları bir ‘duygusal rezervuar’da güvenle saklayan ve rastgele yeniden keşfetmeyi sağlayan etkileşimli web uygulaması.",
    image: "/screenshots/emo-jar-ss-1.png",
    images:[
      "/screenshots/emo-jar-ss-0.png",
      "/screenshots/emo-jar-ss-2.png",
      "/screenshots/emo-jar-ss-3.png"
    ],
    githubLink: "https://github.com/EsmaNurSolmaz/Emotional-Jar",
    liveLink: "https://emotional-jar-ztey.onrender.com/",
    about: "Emotional Jar, neşeli anları yakalayıp güvenle saklamaya olanak tanıyan bir web uygulamasıdır. Bu uygulamayla saklanan anlar, dilendiğinde rastgele yeniden keşfedilebilir.",
    features: [
      "Not girişi",
      "Geçmiş girişleri rastgele görüntüleme",
      "Güvenli veri depolama"
    ],
    tech: [
      "React",
      "Bootstrap",
      "Express",
      "MongoDB",
      "Node.js",
      "JWT"
    ]
  }

];

export default projectsData;
