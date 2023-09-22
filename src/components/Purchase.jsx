import React, { useState } from 'react';
import './Purchase.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import ReviewCard from './ReviewCard';
import { Amex, Apple, ClarifionMain, ClarifionPurshase, Google, Guarantee, LockMain, MasterCard, Paypal, ShopPay, Visa } from './Icons';

const Purchase = () => {
    const [currentStep, setCurrentStep] = useState(3);

    const steps = [
        { label: 'Cart Review', icon: <FontAwesomeIcon icon={faCheck} className="step-icon-check" />, reload: true },
        { label: 'Checkout', icon: <FontAwesomeIcon icon={faCheck} className="step-icon-check" />, reload: true },
        { label: 'Special Offer', icon: '3' },
        { label: 'Confirmation', icon: '4' },
    ];

    const handleStepClick = (stepIndex) => {
        if (stepIndex < currentStep) {
            setCurrentStep(stepIndex + 1);
            if (steps[stepIndex].reload) {
                window.location.reload();
            }
        }
    };

    const [rating, setRating] = useState(0);
    const handleStarClick = (starIndex) => {
        setRating(starIndex + 1);
    };

    return (
        <>
            <div className="steps-container">
                {steps.map((step, index) => (
                    <div
                        key={index}
                        className={`step-item ${currentStep === index + 1 ? 'active' : ''}`}
                        onClick={() => handleStepClick(index)}
                    >
                        <div className={`step-content ${currentStep === index + 1 ? 'font-weight-bold' : ''}`}>
                            <div className={`step-icon ${currentStep === index + 1 ? 'active' : ''}`}>{step.icon}</div>
                            <div className="step-label">
                                <span className="desktop-label">Step {index + 1}: </span>
                                {step.label}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="container">
                <div className="row align-items-start">
                    <div className="col-12 col-md-6 col-lg-6 order-2 order-md-1 d-none d-md-block">
                        <div className="p-4 zoom-image">
                            <ClarifionMain />
                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-6 order-1 order-md-2">
                        <div className="p-4">
                            <h2 className='h2-text'>
                                <span style={{ color: 'blue' }}>ONE TIME ONLY</span> Special Price For 6 Extra Clarifion For Only <span style={{ color: 'blue' }}>$14 Each</span> ($84.00 Total!)
                            </h2>
                        </div>
                        <div className="col-12 d-block d-md-none">
                            <div className="p-4 zoom-image">
                                <ClarifionMain />
                            </div>
                        </div>
                        <div className="ecommerce-info">
                            <div className="row contenedorPurchase">
                                <div className="main-container">
                                    <div className="column-1">
                                        <ClarifionPurshase />
                                    </div>
                                    <div className="column-2">
                                        <div className="row-1">
                                            <div className="sub-container sub-container-2">
                                                <h3 className='subTexto'>Clarifion Air Ionizer</h3>
                                            </div>
                                            <div className="sub-container sub-container-3">
                                                <p className="strike">$180</p>
                                            </div>
                                            <div className="sub-container sub-container-4">
                                                <p className="bold">$84</p>
                                            </div>
                                        </div>
                                        <div className="row-2">
                                            <div className="sub-container sub-container-5">
                                                <div className="review-stars stars-purchase">
                                                    {[1, 2, 3, 4, 5].map((index) => (
                                                        <span
                                                            key={index}
                                                            className={`star ${index <= rating ? 'active' : ''}`}
                                                            onClick={() => handleStarClick(index)}
                                                        >
                                                            ★
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row-3">
                                            <div className="sub-container sub-container-6">
                                                <ul className="custom-list">
                                                    <li>
                                                        <p><span className="circle-icon"></span> 12 left in Stock</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="row-4">
                                            <div className="sub-container sub-container-7">
                                                <p className='textMain'>Simply plug a Clarifion into any standard outlet and replace bulky, expensive air purifiers with a simple.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-unstyled">
                                <li className="mb-2">
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "#005eff" }} /> Negative Ion Technology may <strong>help with allergens</strong>
                                </li>
                                <li className="mb-2">
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "#005eff" }} /> Designed for <strong>air rejuvenation</strong>
                                </li>
                                <li className="mb-2">
                                    <FontAwesomeIcon icon={faCheck} style={{ color: "#005eff" }} /> <strong>Perfect for every room</strong> in all types of places.
                                </li>
                            </ul>
                            <div className="circle-with-text">
                                <div className="circle">
                                    <span className="percentage">%</span>
                                </div>
                                <div className="text">
                                    Save <span className="blue-text">"53%"</span> and get <span className="blue-text">"6 extra Clarifion"</span> for only <span className="blue-text">"$14 Each"</span>
                                </div>
                            </div>
                            <div className="col-md-12 mt-3">
                                <button
                                    className="btn btn-success custom-button"
                                    onClick={() => {
                                        window.location.reload();
                                    }}
                                >
                                    <strong>YES - CLAIM MY DISCOUNT <FontAwesomeIcon icon={faArrowRight} style={{ color: "#ffffff" }} /></strong>
                                </button>
                            </div>
                            <div className="container containerInfo">
                                <div className="top-row">
                                    <div className="left-column">
                                        Free Shipping
                                    </div>
                                    <div className="divider"></div>
                                    <div className="right-column">
                                        <LockMain/> Secure 256-Bit SSL Encryption
                                    </div>
                                </div>
                                <div className="divider2"></div>
                                <div className="bottom-row">
                                    <div className="full-width-container">
                                        <div className="payment-icons">
                                            <Visa/><ShopPay/><Paypal/><MasterCard/><Google/><Apple/><Amex/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="sub-container sub-container-2">
                                <h3
                                    className='subTexto red-underlined-text'
                                    onClick={() => {
                                        window.location.reload();
                                    }}
                                >
                                    NO THANKS, I DONT'T WANT THIS
                                </h3>
                            </div>
                            <div className="my-container">
                                <div className="my-left-column">
                                    <Guarantee />
                                </div>
                                <div className="my-right-column">
                                    <p>If you are not completely thrilled with your Clarifion - We have a <strong>30 day satisfaction guarantee.</strong> Please refer to our return policy at the bottom of the page for more details. Happy Shopping!</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ReviewCard />
        </>
    );
};

export default Purchase;
