export interface IState {
  questions: IQuestion[];
  status: StatusKind;
  index: number;
  answer: null | number;
  points: number;
}

export interface IQuestion {
  question: string;
  options: string[];
  correctOption: number;
  points: number;
}

export enum ActionKind {
  dataReceived = 'dataReceived',
  dataFailed = 'dataFailed',
  start = 'start',
  newAnswer = 'newAnswer',
  nextQuestion = 'nextQuestion',
}

export enum StatusKind {
  loading = 'loading',
  error = 'error',
  ready = 'ready',
  active = 'active',
  finished = 'finished',
}
