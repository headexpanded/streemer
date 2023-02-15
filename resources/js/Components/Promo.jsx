// a component to display promos on the home page

import PromoLink from "./PromoLink";

export default function Promo({ promoText, className, id, PromoLink, linkText}) {
    return (
        <div className={className} id={id}>
            {promoText}

          <PromoLink className="promoLink" href="#" linkText={linkText}/>  
        </div>
    );
}
