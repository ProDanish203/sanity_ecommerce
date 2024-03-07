import { client } from "@/lib/sanity";

const getProduct = async (slug: string) => {
  const query = `
    *[_type == "product" && slug.current == "${slug}"][0]{
        _id,
          name,
          images,
          description,
          "slug": slug.current,
          price,
          "category": category->name
      }
    `;
  const data = await client.fetch(query);
  return data;
};

interface Product {
  _id: string;
  name: string;
  images: any;
  description: string;
  slug: string;
  category: string;
  price: number;
}

const ProductPage = async ({ params }: { params: { slug: string } }) => {
  const data: Product = await getProduct(params.slug);

  return (
    <section className="mx-auto max-w-screen-xl">
      <div className="grid gap-8 md:grid-cols-2">
    
      </div>
    </section>
  );
};

export default ProductPage;
