import type { UserRole } from "@prisma/client";

declare global {
    namespace Express {
        interface Request {
            user?: { id: string; role: UserRole };
        }

        interface Response {
            success(data: unknown, statusCode?: number): Response;
            error(payload: { code: string; message: string; statusCode?: number; details?: unknown }): Response;
            unauthorization(message?: string): Response;
        }
    }
}

export {};
