import React from "react";
import { useEffect, useState } from "react";
import "../static files/Styles/Support Page/support.css";

function SupportPage() {
  const isciUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480716/isci_hzd0pg.jpg";
  const appstoreUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480710/downloadtheapp-removebg-preview_foork2.png";
  const playMarketUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480709/downloadtheapp2-removebg-preview_xqoxim.png";
  const programImageUrl =
    "https://res.cloudinary.com/duufsftkm/image/upload/v1733480718/program-removebg-preview_bstqpu.png";
    

  return (
    <main>
      <section className="hero-support">
        <h1>Nəsə probleminiz var ?</h1>
        <div className="searchDiv">
          <input
            type="text"
            name="supportSearch"
            id="support_search"
            placeholder="Necə kömək edə bilərik ?"
          />
          <button id="sendBtn" type="button">
            Göndər
          </button>
        </div>
      </section>

      <section className="driver-or-customer">
        <div className="cards">
          <div className="card">
            <h1>Sürücülər üçün</h1>
          </div>
          <div className="card">
            <h1>Müştərilər üçün</h1>
          </div>
          <div className="card">
            <h1>Sahibkarlar üçün</h1>
          </div>
        </div>
      </section>

      <section className="DriversSection">
        <img src={isciUrl} alt="driver" />
        <div className="texts">
          <h1>Sürücü olaraq qoşulun</h1>
          <p>
            Əgər sərbəst iş rejimi və yüksək gəlir əldə etmək istəyirsinizsə,
            bizə qoşulun! Bizim şirkətimizdə sürücü olaraq işləmək çox sadədir.
            <br />
            <br />
            Sadəcə qeydiyyatdan keçin, mobil tətbiqimizi yükləyin və müştərilər
            üçün rahat və təhlükəsiz səyahətlər təmin etməyə başlayın. Bizimlə
            işləyərək öz iş cədvəlinizi özünüz təyin edə bilərsiniz. İstədiyiniz
            saatlarda işləyərək əlavə gəlir əldə etmək və müstəqil bir iş
            həyatına sahib olmaq mümkündür. Təcrübəli və peşəkar sürücülərimizi
            gözləyirik, komandamıza qoşulun və işinizi asanlaşdırın!
          </p>
          <a href="#">Sürücü olun</a>
        </div>
      </section>

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

      <section className="ContactSection">
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

export default SupportPage;
