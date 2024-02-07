// Header.tsx
import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <div className="footer">
              <div className="contain">
                  <div className="col">
                      <h1>KeyHeaven™</h1>
                      <ul>
                          <li>Microsoft Building 92, NE 36th St, Redmond, WA 98052, États-Unis</li>
                          <li>+1 425-882-8080</li>
                      </ul>
                  </div>
                  <div className="col">
                      <h1>Resources</h1>
                      <ul>
                          <li onClick={() => alert("Ouvrir le store")}>Applications</li>
                      </ul>
                  </div>
                  <div className="col">
                      <h1>Support</h1>
                      <ul>
                          <li onClick={() => alert("send mail")}>Nous contacter</li>
                          <li onClick={() => alert("Page condition générales")}>Conditions générales de ventes</li>
                      </ul>
                  </div>
                  <div className="clearfix"></div>
              </div>
          </div>
  );
};

export default Footer;
