import React, {FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setLanguage } from "../redux/actions/languageActions";
import {translateFn} from '../i18n/language';
import {RootState} from '../redux/store';

const Navbar: FC = () => {
  const { language } = useSelector((state: RootState) => state.lang);
  const dispatch = useDispatch();

  const chooseLanguageHandler = (value: string) => {
    dispatch(setLanguage(value));
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand fs-4" href="/">
        {translateFn('NavbarTitle', language)}
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active fs-4" aria-current="page" href="/">
                {translateFn('TextOne', language)}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="/all">
                {translateFn('TextTwo', language)}
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs-4" href="/contact">
                {translateFn('TextThree', language)}
              </a>
            </li>
          </ul>
          <div className="form-buttons">
            <button onClick={() => chooseLanguageHandler('CZ')} className="cz btn btn-outline-success my-2 my-sm-0">
              CZ
            </button> &nbsp;
            <button onClick={() => chooseLanguageHandler('PL')} className="en btn btn-outline-success my-2 my-sm-0">
              PL
            </button>&nbsp;

            <button onClick={() => chooseLanguageHandler('SK')} className="en btn btn-outline-success my-2 my-sm-0">
              SK
            </button>&nbsp;
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
