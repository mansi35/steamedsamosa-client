import React from 'react';
import './TierBasedProducts.scss';

function TierBasedProducts() {
  return (
    <div className="tier__description">
      <div className="tier">
        <div className="tier__type basic">Basic</div>
        <div className="tier__type standard">Standard</div>
        <div className="tier__type premium">Premium</div>
      </div>
      <div className="description">
        <div className="price__discount">
          <div className="price">
            <s className="original__price">31,000</s>
            <p className="new__price">23,000</p>
          </div>
          <div className="discount">20% off</div>
        </div>
        <ul>
          <li>
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          </li>
          <li>
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          </li>
          <li>
            quae ab illo inventore veritatis et quasi architecto beatae vitae
          </li>
          <li>
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
          </li>
          <li>
            aspernatur aut odit aut fugit sed quia consequuntur magni dolores
            eos
          </li>
          <li>
            qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
          </li>
          <li>dolorem ipsum quia dolor sit amet, consectetur</li>
        </ul>
      </div>
    </div>
  );
}

export default TierBasedProducts;
