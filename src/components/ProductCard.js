import { useNavigate } from 'react-router-dom';
import siteData from '../data/siteData.json';
import { FiPhone, FiMessageCircle } from 'react-icons/fi';

export function ProductCard({ item, type }) {
  const navigate = useNavigate();
  
  const handleCardClick = () => {
    if (type === 'cab') {
      navigate('/cab-detail', { state: { item } });
    } else {
      navigate('/package-detail', { state: { item } });
    }
  };
  
  const handleBookNow = (e) => {
    e.stopPropagation();
    navigate('/booking', { state: { item, type } });
  };

  const phone = siteData.site.primaryPhone;
  const wa = siteData.site.whatsapp.replace(/\D/g, '');
  const message = encodeURIComponent(`Hello, I'm interested in ${item.name || item.title} from ${siteData.site.name}.`);
  
  return (
    <div className="card product-card" onClick={handleCardClick} style={{ cursor: 'pointer' }}>
      <div className="product-image-wrap">
        <img className="product-image" src={item.image} alt={item.name || item.title} />
      </div>

      <div className="product-meta">
        <div className="product-title">{item.name || item.title}</div>
        {type === 'cab' && (
          <div className="product-sub">{item.passengers} Passengers</div>
        )}
        {type === 'package' && (
          <>
            <div className="product-sub">{item.duration}</div>
            <div className="product-cat">{item.route.slice(0, 3).join(' • ')}{item.route.length > 3 ? ' • …' : ''}</div>
          </>
        )}
        {(type === 'package' && item.description) && (
          <div className="product-desc">{item.description}</div>
        )}
        <div className="price-row">
          <div>
            <div className="price">
              {type === 'cab' && `₹${item.startingPrice}.00`}
            </div>
            {type === 'cab' && (
              <div className="product-sub">For {item.startingKm} KM • Then ₹{item.perKm}/KM</div>
            )}
          </div>
        </div>
      </div>
      
      <div className="action-row" onClick={(e) => e.stopPropagation()}>
        <div style={{ display: 'flex', gap: 6 }}>
          <a className="icon-btn" href={`tel:${phone}`} title="Call">
            <FiPhone/>
          </a>
          <a className="icon-btn success" href={`https://wa.me/${wa}?text=${message}`} target="_blank" rel="noreferrer" title="WhatsApp">
            <FiMessageCircle/>
          </a>
        </div>
        <button className="btn-buy" onClick={handleBookNow}>Book Now →</button>
      </div>
    </div>
  );
}

