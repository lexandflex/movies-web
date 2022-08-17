export interface Props {
  showModal: boolean;
  onClose: (flag: boolean) => void;
  totalVotes: number;
  totalRate: number;
  yourRating: number;
  filmId: string;
}
