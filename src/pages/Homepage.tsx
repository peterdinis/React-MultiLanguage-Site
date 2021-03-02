import React from "react";
import "./Homepage.scss";
import {useSelector} from 'react-redux';
import {translateFn} from '../i18n/language';
import {RootState} from '../redux/store';

function Homepage() {
  const {language} = useSelector((state: RootState) => state.lang);
  return (
    <div>
      <div className="home">
        <h1 className="home__title">{translateFn('Home', language)}</h1>
        <p className="home__subtitle">{translateFn('Our Backpacks', language)}</p>
        <div className="button__helper">
          <button className="home__button">
            <a className='home__link' href='/all'>
              {translateFn('Button', language)}
            </a>
          </button>
        </div>
      </div>

      <div className='home__about'>
        <h1 className="home__aboutheader">{translateFn('About', language)}</h1>

        <div className="about__text">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aut?
            </p>
        </div>
      </div>

      <footer className='home__footer'>
          {translateFn('Footer', language)} &copy; 2021
      </footer>
    </div>
  );
}

export default Homepage;
