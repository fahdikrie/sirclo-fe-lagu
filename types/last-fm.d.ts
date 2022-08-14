type Image = {
  '#text': string;
  size: 'small' | 'medium' | 'large' | 'extralarge' | 'mega';
};

type Attribute = {
  page?: number;
  perPage?: number;
  totalPages?: number;
  total?: number;
};

type FetchUrlType =
  | ((page: number) => string)
  | ((page: number, query: string) => string);
