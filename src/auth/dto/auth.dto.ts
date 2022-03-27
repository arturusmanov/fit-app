export class GenerateCodeForEmailDto {
  public email: string;
}

export class GenerateCodeForPhoneDto {
  public phone: number;
}

export class AuthByEmailDto {
  public email: string;
  public code: number;
}

export class AuthByPhoneDto {
  readonly phone: number;
  readonly code: number;
}