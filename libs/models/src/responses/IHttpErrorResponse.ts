export type IHttpErrorResponse = (
  | { error: string }
  | { errors: Record<string, string> }
) & { status: number; type: string };
