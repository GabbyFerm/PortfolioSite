import { logos } from '../../data/logosData';

export default function LogoGrid() {
  return (
    <div className="logo-section">
      <h3>Design</h3>
      <p>
        A selection of logos created for various companies and clients — part of my broader
        background in graphic design and visual branding.
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
