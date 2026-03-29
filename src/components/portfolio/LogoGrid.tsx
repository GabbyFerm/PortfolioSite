import { logos } from '../../data/logosData';

export default function LogoGrid() {
  return (
    // Removed border-top from CSS, so no more dividing line
    <div className="logo-section">
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
