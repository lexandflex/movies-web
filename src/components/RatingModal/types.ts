export interface Props {
  showModal: boolean;
  onClose: (flag: boolean) => void;
  totalVotes: number;
  totalRate: number;
  filmId: string;
}
