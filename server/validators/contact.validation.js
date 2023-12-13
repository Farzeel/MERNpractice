const { z } = require('zod');

const contactSchema = z.object({
    name: z.string().trim().min(3, { message: 'Username must be at least 3 characters long' })
                     .max(30, { message: 'Username can be maximum 30 characters long' }),
    email: z.string().trim().email({ message: 'Invalid email format' }),
    message: z.string().trim().min(20, { message: 'message must be at least 20 characters long' })
   
});

module.exports = contactSchema;
