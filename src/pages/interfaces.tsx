export interface IJoke {
  [key: string]: any;
  id: number;
  joke: string;
}

export interface JokeVotes extends IJoke {
  votes: number;
  voteInt: number;
}

export interface IJokeResponse {
  current_page: number;
  limit: number;
  next_page: number;
  previous_page: number;
  results: Array<IJoke>;
  search_term: String;
  status: number;
  total_jokes: number;
  total_pages: number;
}
