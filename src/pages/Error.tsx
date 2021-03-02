import React from 'react';
import './404.scss';
import {useSelector} from 'react-redux';
import {translateFn} from '../i18n/language';
import {RootState} from '../redux/store';

function Error() {
    const {language} = useSelector((state: RootState) => state.lang);
    return (
        <div className='error'>
            <h1>{translateFn('Error', language)}</h1>
            <div className="returnhome">
                <a className='link' href='/'>{translateFn('ErrorLink', language)}</a>
            </div>
        </div>
    )
}

export default Error
