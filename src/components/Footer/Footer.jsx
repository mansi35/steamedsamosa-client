import {
  Facebook, Google, LinkedIn, Instagram,
} from '@mui/icons-material';
import './Footer.scss';
import React from 'react';

function Footer() {
  return (
    <div className="footer">
      <div className="footer__details">
        <div className="footer__detailssocial">
          <p>The one stop solution to your event management woes. Together we spread love and positivity.</p>
          <div className="footer__detailssocialicons">
            <Facebook />
            <Google />
            <LinkedIn />
            <Instagram />
          </div>
          <p>admin@sTEAMedSaMoSA.app</p>
        </div>
        <div className="footer__detailspages">
          <div>
            <p>About</p>
            <p>Team</p>
          </div>
          <div>
            <p>Blogs</p>
            <p>Community</p>
          </div>
        </div>
      </div>
      <div className="footer__copyright">
        <p>Copyright    2022  |   sTEAMed SaMoSA</p>
      </div>
    </div>
  );
}

export default Footer;
