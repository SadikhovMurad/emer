import React, { useEffect, useState } from "react";
import "../static files/Styles/Home Page/services.css";
import "../static files/Styles/Home Page/classes.css";
import "../static files/Styles/Home Page/driver.css";
import "../static files/Styles/Home Page/hero.css";
import "../static files/Styles/Home Page/qr.css";
import "../static files/Styles/Home Page/contact.css";

function HomePage() {
  const heroBackgroundImage =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480717/newhero_am0po8.jpg";
  const passengerImageUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480717/passenger_vhcnfe.jpg";
  const appstoreUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480710/downloadtheapp-removebg-preview_foork2.png";
  const playMarketUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480709/downloadtheapp2-removebg-preview_xqoxim.png";
  const programImageUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480718/program-removebg-preview_bstqpu.png";
    const isciUrl="https://res.cloudinary.com/duufsftkm/image/upload/v1733480716/isci_hzd0pg.jpg";

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".fade-in-bottom");
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        if (rect.top <= window.innerHeight && rect.bottom >= 0) {
          element.classList.add("visible");
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check in case the user has already scrolled

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main id="main">
      {/* Hero Section */}
      <section
        className={`hero ${visible ? "visible" : ""}`}
        style={{
          backgroundImage: `url(${heroBackgroundImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
        }}
      >
        <div>
          <h1>EMER sizin xidmətinizdədir</h1>
          <p>
            Mobil tətbiqimiz vasitəsilə asanlıqla sifariş verin. Gedişinizi indi
            planlayın və vaxtınıza qənaət edin.
          </p>
          <a id="openModal">İndi yüklə</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="ServicesSection fade-in-bottom">
        <h1 className="header">Şəhərdaxili xidmətimiz</h1>
        <div className="ServicesDiv">
          <img src={passengerImageUrl} alt="passenger" />
          <div className="texts">
            <h2>Bizim gedişlərimiz</h2>
            <p>
              Şəhərdə sürətli və rahat yolçuluq axtarırsınızsa, doğru
              yerdəsiniz!
              <br />
              Mobil tətbiqimizlə taksi sifariş etmək asandır. Sadə interfeys və
              sürətli sifarişlə yaxınlıqdakı sürücülərdən birini çağırın.
              <br />
              <br />
              Tətbiqimiz canlı izləmə, dəqiq qiymətlər və rahat ödəniş üsulları
              təklif edir.
              <br />
              Vaxt itirmədən mobil tətbiqimizi yükləyin və rahat səyahətdən həzz
              alın.
            </p>
            <a id="openModal">İndi yüklə</a>
          </div>
        </div>
      </section>

      {/* Download App Section */}
      <section className="downloadAppSection">
        <div>
          <h1 className="download-text">Emer proqramını yükləyin</h1>
          <a className="playmarket" href="#">
            <img src={playMarketUrl} alt="playmarket" />
          </a>
          <a className="appstore" href="#">
            <img src={appstoreUrl} alt="appstore" />
          </a>
          <h1 className="download-text2">
            Smartfonunuza Emer tətbiqimizi yükləyib taksi sifariş edə
            bilərsiniz.
          </h1>
        </div>
        <img src={programImageUrl} alt="" />
      </section>

      {/* Classes Section */}
      <section className="ClassesSection fade-in-bottom">
        <h1 className="header">Xidmət siniflərimiz</h1>
        <div id="cardSection" className="cards">
          <ul>
            {[
              {
                title: "Ekonom",
                description: "Büdcənizə uyğun sərfəli və rahat yolçuluq...",
              },
              {
                title: "Komfort",
                description: "Yüksək rahatlıq və keyfiyyətli sürüş üçün...",
              },
              {
                title: "Komfort +",
                description: "Komfort + sinfi ilə yüksək səviyyəli xidmət.",
              },
              {
                title: "XL",
                description: "Böyük qruplar üçün geniş avtomobillər.",
              },
              { title: "Biznes", description: "İş görüşləri üçün lüks seçim." },
              {
                title: "Çatdırılma",
                description: "Sənədlər və əşyalar üçün çatdırılma.",
              },
              {
                title: "Şəhərdən şəhərə",
                description: "Uzaq məsafələr üçün xidmət.",
              },
              {
                title: "Evakuator",
                description: "Yolda qalmış avtomobillər üçün.",
              },
              {
                title: "Ayıq sürücü",
                description: "Təhlükəsiz və sərxoş olmayan sürücülər.",
              },
            ].map((service, index) => (
              <li key={index}>
                <div className="card fade-in-bottom">
                  <h1>{service.title}</h1>
                  <p>{service.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Drivers Section */}
      <section className="DriversSectionForHome fade-in-bottom">
        <img src={isciUrl} alt="driver" />
        <div className="texts">
          <h1>Sürücü olaraq qoşulun</h1>
          <p>
            Əgər sərbəst iş rejimi və yüksək gəlir əldə etmək istəyirsinizsə,
            bizə qoşulun!
          </p>
          <a href="driver.html">Sürücü olun</a>
        </div>
      </section>

      {/* Contact Section */}
      <section className="ContactSection fade-in-bottom">
        <h1>Şikayət və təkliflər</h1>
        <form className="form">
          <div className="emailTextbox">
            <input
              type="text"
              placeholder="E-Mail Adresiniz"
              name="email"
              id="email"
            />
          </div>
          <div className="phoneNumberTextbox">
            <input
              type="text"
              placeholder="Əlaqə nömrəsi"
              name="phonenumber"
              id="phonenumber"
            />
          </div>
          <div className="messageTextbox">
            <textarea
              placeholder="Şikayət və ya təklifiniz"
              name="message"
              id="message"
            ></textarea>
          </div>
          <button className="submitButton" type="submit">
            Göndərmək
          </button>
        </form>
      </section>
    </main>
  );
}

export default HomePage;
