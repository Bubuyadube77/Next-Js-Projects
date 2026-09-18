import { getAllModels } from "@/app/lib/models"
import type { Model } from "@/app/types"
import { JSX } from "react/jsx-runtime"


export default async function ModelsPage() {
    const models = await getAllModels()
    return models.map((model: Model): JSX.Element => <p key={model.id}>{model.name}</p>)
}