import createHttpError from "http-errors";
import logger from "../config/winstonLoggerConfig.js";
import jwtServices from "../services/jwt.services.js";
import { config } from "../config/envConfig.js";
import { publicRoutes } from "../constants/publicRoutes.js";

const auth = (req, res, next) => {

    if (publicRoutes.includes(req.path)) {
        return next();
    }

    const authHeader = req.headers.authorization;

    if (!authHeader) {
        logger.warn(`{Api:${req.url}, Message:"Authorization header missing"}`);
        return next(createHttpError(401, "unauthorized"));
    }

    const parts = authHeader.split(' ');

    if (parts.length !== 2 || parts[0] !== 'Bearer') {
        logger.warn(`{Api:${req.url}, Message:"Invalid Authorization header format"}`);
        return next(createHttpError(401, "unauthorized"));
    }

    const token = parts[1];

    try {
        const { userId, email, role } = jwtServices.verify(token, config.ACCESS_TOKEN_SECRET);
        req.user = { userId, email, role };
        next();
    } catch (error) {
        logger.error(`{Api:${req.url}, Error:${error.message}, Stack:${error.stack} }`);
        return next(createHttpError(401, "unauthorized"));
    }
};

export default auth;
