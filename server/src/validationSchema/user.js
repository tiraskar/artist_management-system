import Joi from "joi";

export const createUserSchema = Joi.object({
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).max(15).required(),
    dob: Joi.string().required(),
    gender: Joi.string().valid("m", "f", "o").required(),
    address: Joi.string().required(),
    role_type: Joi.string().valid("super_admin", "artist_manager", "artist").required(),
    password: Joi.string()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .required()
        .messages({
            "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            "string.min": "Password must be at least 8 characters long",
            "any.required": "Password is required"
        }),
});

export const updateUserSchema = Joi.object({
    id: Joi.number().required(),
    first_name: Joi.string().min(3).required(),
    last_name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    phone: Joi.string().min(10).max(15).required(),
    dob: Joi.string().required(),
    gender: Joi.string().valid("m", "f", "o").required(),
    address: Joi.string().required(),
    role_type: Joi.string().valid("super_admin", "artist_manager", "artist").required(),
    password: Joi.string()
        .min(8)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/)
        .required()
        .messages({
            "string.pattern.base": "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character",
            "string.min": "Password must be at least 8 characters long",
            "any.required": "Password is required"
        }).allow(null, ""),
});

export const getAllUsersSchema = Joi.object({
    limit: Joi.number().min(1).max(100).required(),
    page: Joi.number().min(1).required()
});