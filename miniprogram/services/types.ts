export type IMethod = 
  "OPTIONS" | "GET" | "HEAD" | "POST" | "PUT" | "DELETE" | "TRACE" | "CONNECT" | undefined

export interface IRequestProps {
  url: string
  method: IMethod
  data?:  string | Record<string, any> | ArrayBuffer
}
