import React from "react";
import "../static files/Styles/Company Pages/drivers.css";
import "../static files/Styles/Company Pages/hero.css";
import "../static files/Styles/Company Pages/info.css";

const CompanyPage = () => {
  const passengerImageUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480717/passenger_vhcnfe.jpg";
  const carUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480630/car_qrz99u.png";
  const w247Url =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480630/24-hours-support_viuu6f.png";
  const bestPriceUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480630/best-price_agrbvd.png";
  const customerSupport =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480630/customer-support_lr20kf.png";
  const driverUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480630/driver_chxhhu.png";
  const testProgramUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480631/test_mhms1y.png";
  const driverSectionUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480631/driverssection_eihf8o.jpg";
  const contactMe =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480720/support_wejgxs.jpg";
  return (
    <main>
      {/* Hero Section */}
      <section className="hero-company">
        <h1 style={{ textShadow: "0 3px 6px rgba(0, 0, 0, 0.7)" }}>
          EMER'lə tanış olun
        </h1>
        <p className="hero-subtitle">
          EMER şəhərində müştərilər üçün müstəsna xidmətlər təqdim edir
        </p>
        <div className="cards">
          <div className="card">
            <h1>18</h1>
            <p>Şəhərdə göstərilən xidmət</p>
          </div>
          <div className="card">
            <h1>120</h1>
            <p>EMER'ə məxsus təcrübəli sürücülər</p>
          </div>
          <div className="card">
            <h1>18</h1>
            <p>EMER'ə məxsus şirkət maşınları</p>
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="aboutCompany">
        <h1 className="header">
          Şirkət haqqında<span>.</span>
        </h1>
        <p className="aboutCompanyP">
          Şirkətimiz müştərilərimizə yüksək keyfiyyətli və etibarlı nəqliyyat
          xidməti təqdim etmək məqsədilə qurulmuşdur...
        </p>
        <div className="goals">
          <div className="texts">
            <h1>Missiya və Məqsəd</h1>
            <p>
              Missiyamız, müştərilərimizin təhlükəsiz, rahat və sərfəli şəkildə
              təyinat nöqtələrinə çatmalarını təmin etməkdir...
            </p>
          </div>
          <img src={passengerImageUrl} alt="EMER car" />
        </div>
      </section>

      {/* Preferences Section */}
      <section className="preferences">
        <h1 className="header">Üstünlüklərimiz</h1>
        <div className="preferencesCards">
          {[
            {
              img: testProgramUrl,
              alt: "application",
              title: "İnteraktiv və Rahat Mobil Tətbiq",
              description:
                "Bizim mobil tətbiqimiz müştərilərimizin rahatlığını ən ön plana qoyaraq hazırlanmışdır...",
            },
            {
              img: w247Url,
              alt: "247support",
              title: "24/7 Xidmət",
              description:
                "Bizim taksi xidmətimiz günün hər saatında, həftənin hər günü fəaliyyət göstərir...",
            },
            {
              img: carUrl,
              alt: "car",
              title: "Təmiz və Komfortlu Avtomobillər",
              description:
                "Bizim şirkətimiz müştərilərimizin rahatlığını və məmnuniyyətini təmin etmək üçün...",
            },
            {
              img: customerSupport,
              alt: "application",
              title: "Yüksək Müştəri Məmnuniyyəti və Dəstək",
              description:
                "Müştəri məmnuniyyəti bizim üçün sadəcə bir prioritet deyil...",
            },
          ].map((card, index) => (
            <div className="card" key={index}>
              <img src={card.img} alt={card.alt} />
              <div className="texts">
                <h1>{card.title}</h1>
                <p>{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Drivers Section */}
      <section className="drivers">
        <h1 className="header">Sürücülərimiz haqqında</h1>
        <div className="body">
          <img src={driverSectionUrl} alt="driver" />
          <div className="texts">
            <ul>
              {[
                {
                  title: "1. Peşəkar və Təcrübəli Sürücülər",
                  description:
                    "Şirkətimiz yalnız ən yaxşı və peşəkar sürücülərlə işləyir...",
                },
                {
                  title: "2. Şəhəri Yaxşı Tanıyan Yerli Ekspertlər",
                  description:
                    "Sürücülərimiz şəhərin hər bir küçəsini və məhəlləsini yaxşı tanıyır...",
                },
                {
                  title: "3. Nəzakət və Müştəri Yönümlü Xidmət",
                  description:
                    "Sürücülərimiz nəzakətli və müştəri yönümlü yanaşmaları ilə tanınır...",
                },
              ].map((item, index) => (
                <li key={index}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="infoEmer">
        <div className="texts">
          <h1 className="header">Bizimlə əlaqə</h1>
          <ul>
            <li>
              <h2>Əlaqə nömrəsi</h2>
              <p>0777676767</p>
            </li>
            <li>
              <h2>E-poçt</h2>
              <p>sadikhov377@gmail.com</p>
            </li>
            <li>
              <h2>Məkan</h2>
              <p>Af city,28 May avenue.</p>
            </li>
            <li className="buttons">
              <a className="button2" href="/driver.html">
                Tez-tez verilən suallar
              </a>
            </li>
          </ul>
        </div>
        <img src={contactMe} alt="support" />
      </section>
    </main>
  );
};

export default CompanyPage;
