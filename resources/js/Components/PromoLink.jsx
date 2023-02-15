// a tag for inside Promo components

/* type PromoLinkProps = {
    className: string,
    href: string,
    linkText: string,
}; */

export default function PromoLink({ className, href, linkText }) {
    return (
        <a className={className} href={href}>
            {linkText}
        </a>
    );
}
