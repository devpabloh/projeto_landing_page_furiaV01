import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { PlayerFormData, playerSchema } from "../../schemas/playerSchema";

const PlayerForm = ()=>{
    const {
        register, 
        handleSubmit,
        formState: {errors},
    } = useForm<PlayerFormData>({
        resolver: zodResolver(playerSchema),
    })

    const onSubmit = (data: PlayerFormData) =>{
        console.log("Dados Válidos", data)
    }
    
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("name")} placeholder="Nome"/>
            {errors.name && <span>{errors.name.message}</span>}

            <input {...register("rank")} placeholder="Rank"/>
            {errors.rank && <span>{errors.rank.message}</span>}

            <input type="email" {...register("email")} placeholder="e-mail" />
            {errors.email && <span>{errors.email.message}</span>}

            <button type="submit">Enviar</button>

        </form>
    )
}

export default PlayerForm