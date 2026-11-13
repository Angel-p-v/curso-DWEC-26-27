// Paso 1: typemos
// como sera el libro

export interface Book {
  readonly id: number;
  title: string;
  author: string;
  year: number;
  cover: string;
  favorite: boolean;
}

export interface AppState {
  books: readonly Book[];
  search: string;
}
