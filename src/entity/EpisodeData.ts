export default interface EpisodeData {
  episode: number;
  index: number;
  song: string;
  producer: string;
  votable?: boolean;
  error?: string;
  overlapped?: boolean;
}