/**
 * Modelo de datos para representar errores provenientes de la API.
 * Proporciona información estructurada sobre errores en las solicitudes HTTP.
 */
export interface ApiError {
    statusCode: number;
    message: string;
    details?: {
        field?: string;
        issue?: string;
    }[];
    timestamp: string; // ISO 8601 date string
}

export const createApiError = (
    statusCode: number,
    message: string,
    details?: ApiError['details']
): ApiError => ({
    statusCode,
    message,
    details: details || [],
    timestamp: new Date().toISOString(),
});

export const isApiError = (error: unknown): error is ApiError => {
    return (
        typeof error === 'object' &&
        error !== null &&
        'statusCode' in error &&
        'message' in error &&
        'timestamp' in error
    );
};