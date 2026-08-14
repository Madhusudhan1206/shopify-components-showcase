import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * ProductCarousel
 * props: { title: string, products: { name, price, badge }[] }
 * Horizontal scroll-snap row of bold product cards with an optional
 * status badge (New / Bestseller). Visual only, no cart logic.
 */
export default function ProductCarousel({ title, products }) {
  return (
    <section className="gs-carousel">
      <ComponentTag name="ProductCarousel" />
      <h2>{title}</h2>
      <div className="gs-carousel__track">
        {products.map((product) => (
          <div className="gs-product-card" key={product.name}>
            <div className="gs-product-card__media">
              <Placeholder width={320} height={400} label={product.name} bg="1a1a1a" fg="ffffff" />
              {product.badge && <span className="gs-badge">{product.badge}</span>}
            </div>
            <p className="gs-product-card__name">{product.name}</p>
            <p className="gs-product-card__price">{product.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
