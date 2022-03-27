export interface GetCodeForGenerate {
  email?: string;
  phone?: number;
}

export interface AuthUserRequestData {
  email?: string;
  phone?: number;
  code: number;
}
