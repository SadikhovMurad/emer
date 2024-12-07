import React from "react";
import "../static files/Styles/Be A Driver Page/features.css";
import "../static files/Styles/Be A Driver Page/hero.css";
import "../static files/Styles/Be A Driver Page/info.css";

const DriverPage = () => {
  const appstoreUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480710/downloadtheapp-removebg-preview_foork2.png";
  const playMarketUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480709/downloadtheapp2-removebg-preview_xqoxim.png";
  const programImageUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480718/program-removebg-preview_bstqpu.png";
  const emerDriverUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480712/emerDriver_unudst.png";
  return (
    <main id="main">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="text-content">
            <h1>EMER Driver'ı Yükləyin</h1>
            <p>
              Rahat qazanc əldə etmək üçün bizim tətbiqimizi yükləyin və sərbəst
              qrafiklə işləyin!
            </p>
            <img src={emerDriverUrl} alt="QR Code" className="qr-code" />
          </div>
          <div className="image-content">
            <img
              src={programImageUrl}
              alt="App Preview"
              className="phone-image"
            />
          </div>
        </div>
        <div className="background-overlay"></div>
      </section>

      {/* Info Section */}
      <section className="info-section">
        <h2>Bizim proqramımız necə işləyir?</h2>
        <p>
          İstədiyiniz vaxt işləyin. Bizim qeyri-ənənəvi qrafiklə sərbəst
          işləyin!
        </p>
        <p>
          Proqrama qeydiyyatdan keçmək üçün kiçik bir sorğu forması doldurub bir
          neçə sənəd təqdim etməlisiniz.
        </p>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="feature-left">
          <h1 className="download-text">Emer driver'ı yükləyin</h1>
          <div className="store-buttons">
            <a className="playmarket" href="#">
              <img
                src={playMarketUrl}
                alt="playmarket"
              />
            </a>
            <a className="appstore" href="#">
              <img
                src={appstoreUrl}
                alt="appstore"
              />
            </a>
          </div>
          <h1 className="download-text2">
            Smartfonunuzda Emer driver tətbiqimizi yükləyib qeydiyyatdan keçə
            bilərsiniz.
          </h1>
        </div>
        <div className="feature-right">
          <div className="feature-item">
            <h3>Asan Yükləmə</h3>
            <p>
              Proqramı bir neçə saniyə ərzində yükləyin və dərhal istifadə
              etməyə başlayın. Hər hansı bir mürəkkəblik yoxdur!
            </p>
          </div>
          <div className="feature-item">
            <h3>Sərbəst İş Qrafiki</h3>
            <p>
              İstədiyiniz vaxt işləyin. Rahatlıqla iş saatlarını tənzimləyin və
              sərbəst çalışma imkanına sahib olun.
            </p>
          </div>
          <div className="feature-item">
            <h3>Güvənli Qeydiyyat</h3>
            <p>
              Sadə sorğu forması və sənəd təqdim etmə prosesi ilə qeydiyyatınızı
              tamamlayın. Etibarlı və sürətli.
            </p>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1519.5871863171058!2d49.838641024535555!3d40.38282779846509!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40307da044366d0d%3A0xad2da94c2d67332f!2zQUYgQ8SwVFksIEFGIENJVFksIDY2IFIuQsO8bGLDvGwgUHIsIEJha8SxIDEwMDU!5e0!3m2!1sru!2saz!4v1732824833153!5m2!1sru!2saz"
          width="90%"
          height="400"
          className="map-iframe"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </main>
  );
};

export default DriverPage;
