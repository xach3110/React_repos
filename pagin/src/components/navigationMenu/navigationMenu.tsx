import React from 'react'
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import SearchNum from '../sitepagenumsearch/App';
import SearchVin from '../sitepagevinsearch/sitepagevinsearch';
import './Styles.css';

function App() {
    return (
        <div className="App">
            <div>
                <div className='menudiv'>
                    <NavLink className='linkstyle' to='/searchNum'>
                        Поиск по регистрационному номеру
                    </NavLink>
                    <NavLink to='/searchVin' className='linkstyle'>
                        Поиск по VIN-номеру
                    </NavLink>
                </div>
            </div>
            <Routes>
                <Route path="/" element={<Navigate to="/searchNum" replace />} />
                <Route path="/searchNum" element={<SearchNum />} />
                <Route path="/searchVin" element={<SearchVin />} />
            </Routes>
        </div>
    );
}

export default App;