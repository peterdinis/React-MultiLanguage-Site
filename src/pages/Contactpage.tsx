import React from "react";
import "./Contactpage.scss";
import {useSelector} from 'react-redux';
import {translateFn} from '../i18n/language';
import {RootState} from '../redux/store';

function Contactpage() {
  const {language} = useSelector((state: RootState) => state.lang);
  return (
    <div className="contact">
      <h2>{translateFn('ContactUs', language)}</h2>

      <div className="our-links">
        <h3>Facebook: Backpacks Shop</h3>
        <h3>Telephone: 001122233</h3>
        <h3>Email: backpacks@gmail.com</h3>
      </div>

      <footer className="home__footer">
        React Backpacks store &copy; 2021
      </footer>
    </div>
  );
}

export default Contactpage;
