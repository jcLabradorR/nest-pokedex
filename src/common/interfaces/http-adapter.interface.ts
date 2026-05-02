
export interface HttpAdapter {
  get<T>(url: string): Promise<T>;
//   post<T>(url: string, body: any, options?: any): Promise<T>;
//   patch<T>(url: string, body: any, options?: any): Promise<T>;
//   delete<T>(url: string, options?: any): Promise<T>;
}