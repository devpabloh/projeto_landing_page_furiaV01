import { useForm } from "react-hook-form";
import {zodResolver} from "@hookform/resolvers/zod"
import { PlayerFormData, playerSchema } from "../../schemas/playerSchema";

/* translate */
import { useTranslation } from "react-i18next";

/* CSS */
import styles from "./PlayerForm.module.css"

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

        if(data.file && data.file.length > 0){
            const file = data.file[0]
            console.log("Arquivo:", file.name, file.type, file.size)
        }
    }

    const {t} = useTranslation()
    
    return (

        <form onSubmit={handleSubmit(onSubmit)} className={styles.containerForm}>
            <input {...register("name")} placeholder={t("placeHolderName")} className={styles.inputContainer}/>
            {errors.name && <span>{errors.name.message}</span>}

            <input {...register("age")} placeholder={t("placeHolderAge")} className={styles.inputContainer}/>
            {errors.age && <span>{errors.age.message}</span>}

            <input {...register("rank")} placeholder="Rank" className={styles.inputContainer}/>
            {errors.rank && <span>{errors.rank.message}</span>}

            <input type="email" {...register("email")} placeholder="e-mail" className={styles.inputContainer} />
            {errors.email && <span>{errors.email.message}</span>}

            <input type="file" {...register("file")}/>
            {errors.file && <span>{errors.file.message}</span>}

            <button type="submit" className={styles.buttonFormCarrer}>{t("labelSubmit")}</button>

        </form>
    )
}

export default PlayerForm