import { logos } from '../../data/logosData';

export default function LogoGrid() {
  return (
    <div className="logo-section">
      <h3>Design</h3>
      <p>
        Logos created for various companies during my time at Mercus Yrkeskläder, where I developed
        logos for new businesses that needed branding for their clothing and promotional products.
      </p>

      <div className="logo-grid">
        {logos.map((logo) => (
          <div key={logo.id} className="logo-item">
            <div className="logo-wrapper">
              <img src={logo.image} alt={logo.alt} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
