export interface IDialog {
  id: string;
  name: {
    first: string,
    last: string
  };
  avatar: string;
  message: string;
  timestamp: Date;
  online: boolean;
  newMessageCount: number;
}
