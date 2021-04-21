export interface IWekanError {
    isClientSafe: boolean,
    error: string,
    reason: string,
    message: string,
    errorType: string,
    statusCode: number
}