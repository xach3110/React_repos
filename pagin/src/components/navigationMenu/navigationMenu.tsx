import React from 'react';
import { NavLink, Route, Routes, Navigate, useLocation } from 'react-router-dom';
import SearchNum from '../sitepagenumsearch/App';
import SearchVin from '../sitepagevinsearch/sitepagevinsearch';
import './Styles.css';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
    const location = useLocation();
    
    return (
        <div className="App">
            <div className="background-image">
                {/* Фоновая картинка */}
            </div>
            <div className='menudiv'>
                <NavLink className='linkstyle' to='/searchNum'>
                    Поиск по регистрационному номеру
                </NavLink>
                <NavLink to='/searchVin' className='linkstyle'>
                    Поиск по VIN-номеру
                </NavLink>
            </div>

            <TransitionGroup component={null}>
                <CSSTransition
                    key={location.key}
                    classNames="fade"
                    timeout={300}
                >
                    <div className="page">
                        <Routes location={location}>
                            <Route path="/" element={<Navigate to="/searchNum" replace />} />
                            <Route path="/searchNum" element={<SearchNum />} />
                            <Route path="/searchVin" element={<SearchVin />} />
                        </Routes>
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </div>
    );
}

export default App;
