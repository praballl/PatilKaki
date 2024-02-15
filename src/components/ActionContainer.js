import React, { useState } from 'react';
import './styles/actionbutton.css'
const ActionContainer = () => {
    const [showForm, setShowForm] = useState(false);

    const handleCTAClick = () => {
      setShowForm(true);
      // Add any additional actions you want to perform when the CTA is clicked
      console.log("the button is clicked");
    };
  
    return (
      <div className="cta-section make-center">
        <h2>Unlock Exclusive Offers</h2>
        <p style={{color:'black'}}>Subscribe to our newsletter for special discounts and updates.</p>
        <button  style={{margin:"2% 0"}} onClick={handleCTAClick}>Subscribe Now</button>
  
        {showForm && (
          <div className="subscription-form">
            <form>
              <div class="coolinput">
                <label for="input" class="text">Email Address:</label>
                <input type="text" placeholder="Write here..." name="input" class="input" />
            </div>
            <div className='signup-button'>
            <button>
              Sign up
              <div class="arrow-wrapper">
                  <div class="arrow"></div>

              </div>
          </button>
          </div>
            </form>
          </div>
        )}
      </div>
    );
}

export default ActionContainer
