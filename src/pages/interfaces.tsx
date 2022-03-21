export interface IJoke {
  id: number;
  joke: string;
}

export interface IJokeResponse {
  current_page: Number;
  limit: Number;
  next_page: Number;
  previous_page: Number;
  results: Array<IJoke>;
  search_term: String;
  status: Number;
  total_jokes: Number;
  total_pages: Number;
  }

