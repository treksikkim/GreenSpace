export const ApiResponse = <T = undefined>(
  statusCode: number,
  message: string,
  data?: T,
  key?: string
) => {
  return {
    success: statusCode <= 300,
    statusCode,
    message,
    data,
    key
  };
};
