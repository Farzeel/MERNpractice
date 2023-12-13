const { z } = require('zod');

const userSchema = z.object({
    username: z.string().trim().min(3, { message: 'Username must be at least 3 characters long' })
                     .max(30, { message: 'Username can be maximum 30 characters long' }),
    email: z.string().trim().email({ message: 'Invalid email format' }),
    password: z.string().trim().min(6, { message: 'Password must be at least 6 characters long' }),
    phone: z.string().trim().min(10, { message: 'Phone number must be at least 10 characters' })
                     .max(15, { message: 'Phone number can be maximum 15 characters' }),
});

module.exports = userSchema;
