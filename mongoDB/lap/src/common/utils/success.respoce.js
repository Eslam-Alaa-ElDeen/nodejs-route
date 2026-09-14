export const successResponse = ({res, data=undefined, message="done",status=200}={}) => {
    return res.status(status).json({
        message,
        status,
        data
    });
}