import React, { useState } from 'react';

const Popup = () => {
  const [showPopup, setShowPopup] = useState(true);
  const [showInput, setShowInput] = useState(false);
  const [price, setPrice] = useState('');

  const handleCancel = () => {
    setShowPopup(false);
  };

  const handleConfirm = () => {
    setShowInput(true);
  };

  const handlePriceSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary logic with the submitted price
    // Here, we're just printing it to the console
    console.log(`Submitted price: ${price}`);
    setShowPopup(false);
  };

  const handleBlur = (e) => {
    if (e.currentTarget === e.target) {
      setShowPopup(false);
    }
  };

  return (
    <div className="popup-container" onClick={handleBlur}>
      {showPopup && (
        <div className="popup" onClick={(e) => e.stopPropagation()}>
          <div className="message">Do you want to continue?</div>
          <div className="buttons">
            <button onClick={handleCancel}>No</button>
            <button onClick={handleConfirm}>Yes</button>
          </div>
          {showInput && (
            <form className="input-form" onSubmit={handlePriceSubmit}>
              <label>
                Price:
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          )}
        </div>
      )}
      <div className={showPopup ? 'background-overlay' : ''}></div>
      <div className={showPopup ? 'background-blur' : ''}>
        {/* Rest of your application components */}
      </div>
    </div>
  );
};

export default Popup;
