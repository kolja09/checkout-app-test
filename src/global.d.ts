export {};
declare global {
  interface Window {
    loadSignIn: (rootId: string) => void;
  }
  type IThunkApi = {
    onSuccess?: (data: unknown) => void;
    onError?: (e: ApiError) => void;
  };
}
