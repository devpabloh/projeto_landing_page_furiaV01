import {z} from "zod"

export const playerSchema = z.object({
    name: z.string().min(3, "Nome deve ter pelo menos 3 caracteres"),
    age: z.number().min(12, "Idade mínima 12 anos"),
    rank: z.string().min(3, "O ranking deve ter pelo menos 3 caracteres"),
    email: z.string().email("E-mail inválido"),
})

export type PlayerFormData = z.infer<typeof playerSchema>