export interface CategoryI {
  id: string;
  name: string;
  data: CategoryDataI[];
}

export interface CategoryDataI {
  id: string;
  name: string;
  image: string;
}
