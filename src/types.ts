export interface ICities {
  cityName: string;
  country: string;
  emoji: any;
  date: string | Date;
  notes: string;
  position: {
    lat: number;
    lng: number;
  };
  id?: string;
}
