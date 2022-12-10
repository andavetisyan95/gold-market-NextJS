export type CommonProps = {
  title: string;
  description: string;
  imgName: string;
};

export type ProductProps = {
  id: string;
  title: string | "No title";
  subtitle: string | "No subtitle";
  price: number | "$";
  image: string | "fallback";
};
