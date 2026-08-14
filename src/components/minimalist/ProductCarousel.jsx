import Placeholder from '../shared/Placeholder';
import ComponentTag from '../shared/ComponentTag';

/**
 * ProductCarousel
 * props: { title: string, products: { name, tag, price }[] }
 * Horizontal scroll-snap row of dense product cards with a variant-style
 * "Add to cart" affordance (visual only, no cart logic).
 */
export default function ProductCarousel({ title, products }) {
  return (
    <section className="min-carousel">
      <ComponentTag name="ProductCarousel" />
      <h2>{title}</h2>
      <div className="min-carousel__track">
        {products.map((product) => (
          <div className="min-product-card" key={product.name}>
            <Placeholder width={300} height={300} label={product.name} bg="f6f6f4" fg="9a9a92" />
            <p className="min-product-card__tag">{product.tag}</p>
            <p className="min-product-card__name">{product.name}</p>
            <p className="min-product-card__price">{product.price}</p>
            <button type="button" className="min-btn min-btn--outline">
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
