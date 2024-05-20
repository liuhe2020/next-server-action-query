'use server';

type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: {
    id: number;
    name: string;
    image: string;
  };
  images: string[];
};

export async function getProduct() {
  try {
    const response = await fetch('https://api.escuelajs.co/api/v1/products');
    if (!response.ok) return undefined;
    const data: Product[] = await response.json();
    console.log(data);
    return data;
  } catch (e) {
    console.error(e);
    return undefined;
  }
}
