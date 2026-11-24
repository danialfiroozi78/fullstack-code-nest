export type ApiRes<T = never> = {
  success: boolean;
  statusCode: number;
  message: string;
  data: T;
};
