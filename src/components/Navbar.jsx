import './Navbar.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faHeart } from '@fortawesome/free-regular-svg-icons';
import { faTruckFast } from '@fortawesome/free-solid-svg-icons';
import { Check } from './Icons'

const Navbar = () => {
    const menuItems = [
        <>
            <Check/>
            {' '}"30-DAY SATISFACTION GUARANTEE"{' '}
        </>,

        <>
            <FontAwesomeIcon icon={faTruckFast} />
            {' '}"FREE DELIVERY ORDERS OVER $40.00"{' '}
        </>,

        <>
            <FontAwesomeIcon icon={faHeart} style={{ color: "#ffffff" }} />
            {' '}50,000+ HAPPY CUSTOMERS{' '}
        </>,

        <>
            <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#ffffff", }} />
            {' '}100% MONEY BACK GUARANTEE{' '}
        </>,

    ];



    const [activeItem, setActiveItem] = useState(0);

    const prevItem = () => {
        if (activeItem === 0) {
            setActiveItem(menuItems.length - 1);
        } else {
            setActiveItem(activeItem - 1);
        }
    };

    const nextItem = () => {
        if (activeItem === menuItems.length - 1) {
            setActiveItem(0);
        } else {
            setActiveItem(activeItem + 1);
        }
    };

    return (
        <div className="container-fluid">
            <nav className="navbar navbar-expand-lg navbar-dark">
                <div className="container text-center">
                    <div
                        id="menu-carousel"
                        className="carousel slide d-lg-none"
                        data-ride="carousel"
                    >
                        <div className="carousel-inner">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`carousel-item ${index === activeItem ? 'active' : ''}`}
                                >
                                    <div className="d-flex align-items-center justify-content-center h-100">
                                        <a className="nav-link text-center" href="/">
                                            {item}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="d-lg-none mt-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <a
                                className="carousel-control-prev"
                                href="#menu-carousel"
                                role="button"
                                data-slide="prev"
                                onClick={prevItem}
                            >
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </a>
                            <a
                                className="carousel-control-next"
                                href="#menu-carousel"
                                role="button"
                                data-slide="next"
                                onClick={nextItem}
                            >
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </a>
                        </div>
                    </div>
                    <ul className="navbar-nav d-none d-lg-flex">
                        {menuItems.map((item, index) => (
                            <li className="nav-item" key={index}>
                                <a className="nav-link" href="/">
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
