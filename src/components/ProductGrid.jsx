import { cartHref, products } from '../data/site'

function ProductCard({ product }) {
  return (
    <a href={product.href} className="group block text-ink no-underline">
      <div className="relative aspect-[4/5] overflow-hidden bg-neutral-100">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-300 group-hover:opacity-0"
        />
        {product.hoverImage && (
          <img
            src={product.hoverImage}
            alt=""
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        )}
      </div>
      <p className="mt-3 font-label text-sm text-black">{product.name}</p>
      <p className="font-mono text-sm font-bold text-black">{product.price}</p>
    </a>
  )
}

export default function ProductGrid() {
  return (
    <section>
      <div className="mx-auto grid max-w-3xl grid-cols-2 gap-4 md:gap-8">
        {products.map((p) => (
          <ProductCard key={p.name} product={p} />
        ))}
      </div>
      <div className="mt-10 flex justify-center">
        <a href={cartHref} className="bg-black px-6 py-3 font-label text-sm text-white no-underline transition-colors hover:bg-button-hover">
          VIEW CART
        </a>
      </div>
    </section>
  )
}