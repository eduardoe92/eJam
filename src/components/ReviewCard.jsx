
import React from 'react';
import { Girl, Verified } from './Icons';
import './ReviewCard.css';

function ReviewCard() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="review-card">
                        <div className="row">
                            <Girl />
                            <div className="col-md-4">
                                <div className="review-stars">
                                    ★ ★ ★ ★ ★
                                </div>
                                <div className="review-name">
                                    <strong>Ken T.</strong> <Verified/><span style={{ color: '#5BB59A', fontSize: '16px'}}><small>Verified Customer</small></span>
                                </div>
                            </div>
                            <div className="review-text">
                                "As soon as the Clarifions arrived I put one in my bedroom. this was late in the afternoon. When I went to the bedroom in the evening it smelled clean. When I went to bed I felt I could breathe better. Wonderful."
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ReviewCard;
