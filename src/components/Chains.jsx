import React, { useState, useEffect } from 'react';
import { API_URL } from '../api';
import { FaRegArrowAltCircleRight, FaRegArrowAltCircleLeft } from "react-icons/fa";
import { PulseLoader } from 'react-spinners';

const Chains = () => {
  const [vendorData, setVendorData] = useState([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [loading, setLoading] = useState(true);

  const vendorFirmHandler = async () => {
    try {
      const response = await fetch(`${API_URL}/vendor/all-vendors`);
      const newData = await response.json();
      setVendorData(newData);
    } catch (error) {
      console.error("Failed to fetch data:", error);
      alert("Failed to fetch data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    vendorFirmHandler();
  }, []);

  const handleScroll = (direction) => {
    const gallery = document.getElementById("chainGallery");
    const scrollAmount = 300;

    if (direction === 'left') {
      gallery.scrollTo({
        left: gallery.scrollLeft - scrollAmount,
        behavior: 'smooth',
      });
    } else if (direction === 'right') {
      gallery.scrollTo({
        left: gallery.scrollLeft + scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  if (loading) {
    return (
      <div className="loader" style={{ textAlign: 'center', marginTop: '2rem' }}>
        <p>Loading...</p>
        <PulseLoader color="#36D7B7" />
      </div>
    );
  }

  return (
    <>
      <div className="btnSection">
        <button onClick={() => handleScroll("left")}>
          <FaRegArrowAltCircleLeft className='btnIcons' />
        </button>
        <button onClick={() => handleScroll("right")}>
          <FaRegArrowAltCircleRight className='btnIcons' />
        </button>
      </div>

      <h2>Top Restaurant Chains in Anantapur</h2>

      <div
        className="chainSection"
        id="chainGallery"
        onScroll={(e) => setScrollPosition(e.target.scrollLeft)}
      >
        {vendorData.vendors && vendorData.vendors.map((vendor, vendorIdx) => (
          <div className="vendorBox" key={vendorIdx}>
            {vendor.firm.map((item, itemIdx) => (
              <div key={itemIdx}>
                <div>{item.firmName}</div>
                <div className="firmImage">
                  <img src={`${API_URL}/uploads/${item.image}`} alt={item.firmName} />
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Chains;
