import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { FiSend } from 'react-icons/fi';

export function Booking() {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state?.item || {};
  const itemType = location.state?.type || 'cab';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    fromDate: '',
    toDate: '',
    comments: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const whatsappNumber = siteData.site.whatsapp.replace(/\D/g, '');
    const itemName = item.name || item.title || 'Service';
    const itemPrice = item.startingPrice || 'Get quote';
    
    const travelDates = itemType === 'cab'
      ? `\n*Travel Dates:*\n• From: ${formData.fromDate || 'Not specified'}\n• To: ${formData.toDate || 'Not specified'}\n`
      : '';

    const message = `*Booking Request*\n\n*${itemName}*${itemType === 'cab' ? '\nStarting Price: ₹' + itemPrice : ''}\n\n*Customer Details:*\n• Name: ${formData.name}\n• Phone: ${formData.phone}\n• Email: ${formData.email}\n${travelDates}\n${formData.comments ? `*Comments:*\n${formData.comments}\n` : ''}---\nSubmitted via ${siteData.site.name}`;

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div>
      <section style={{ paddingTop: 16 }}>
        <div className="card" style={{ padding: 20, maxWidth: 600, margin: '0 auto' }}>
          <div style={{ marginBottom: 20 }}>
            <h2 style={{ margin: 0, fontSize: 24, fontWeight: 800 }}>Book Now</h2>
            <div className="muted" style={{ fontSize: 14, marginTop: 6 }}>
              {item.name || item.title}
            </div>
            {itemType === 'cab' && item.startingPrice && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                <div className="muted" style={{ fontSize: 14 }}>
                  Starting Price: ₹{item.startingPrice} (for {item.startingKm} KM)
                </div>
                <div className="muted" style={{ fontSize: 14 }}>
                  Extra KM: ₹{item.perKm}/KM
                </div>
              </div>
            )}
          </div>

          <form onSubmit={handleSubmit}>
            <div style={{ display: 'grid', gap: 16 }}>
              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 600 }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '15px',
                    background: '#fff'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 600 }}>
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '15px',
                    background: '#fff'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 600 }}>
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '15px',
                    background: '#fff'
                  }}
                />
              </div>

              {itemType === 'cab' && (
                <div>
                  <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 600 }}>
                    From Date
                  </label>
                  <input
                    type="date"
                    name="fromDate"
                    value={formData.fromDate}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontSize: '15px',
                      background: '#fff'
                    }}
                  />
                </div>
              )}

              {itemType === 'cab' && (
                <div>
                  <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 600 }}>
                    To Date
                  </label>
                  <input
                    type="date"
                    name="toDate"
                    value={formData.toDate}
                    onChange={handleChange}
                    style={{
                      width: '100%',
                      padding: '12px',
                      borderRadius: '10px',
                      border: '1px solid rgba(0,0,0,0.12)',
                      fontSize: '15px',
                      background: '#fff'
                    }}
                  />
                </div>
              )}

              <div>
                <label style={{ display: 'block', marginBottom: 6, fontSize: 14, fontWeight: 600 }}>
                  Comments / Special Requests
                </label>
                <textarea
                  name="comments"
                  value={formData.comments}
                  onChange={handleChange}
                  rows={4}
                  style={{
                    width: '100%',
                    padding: '12px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    fontSize: '15px',
                    background: '#fff',
                    resize: 'vertical',
                    fontFamily: 'inherit'
                  }}
                  placeholder="Any special requirements or comments..."
                />
              </div>

              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  style={{
                    flex: 1,
                    padding: '14px',
                    borderRadius: '10px',
                    border: '1px solid rgba(0,0,0,0.12)',
                    background: '#fff',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="btn primary"
                  style={{
                    flex: 1,
                    padding: '14px',
                    borderRadius: '10px',
                    fontSize: '15px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: 8
                  }}
                >
                  <FiSend/> Send Message
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

