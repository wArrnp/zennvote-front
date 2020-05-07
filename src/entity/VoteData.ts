import EpisodeData from './EpisodeData';

export default interface VoteData {
  [key: string]: any[] | undefined

  problem?: number[];
  pitch?: EpisodeData[];
  voice?: EpisodeData[];
  funny?: EpisodeData[];
  content?: EpisodeData[];
  original?: EpisodeData[];
  sleep?: EpisodeData[];
  unit?: string[];
  new?: string[];
  grow?: string[];
  master?: string[];
  custom?: {
    episode: string;
    content: string;
  }[];
  message?: {
    name: string;
    content: string;
  }[];
}