import { notFound } from "next/navigation"
interface Infoparams {
    params: {
        productId: string
    }
}

export default function Info({ params }: Infoparams) {
    if (parseInt(params.productId) > 100 || parseInt(params.productId) <= 0) {  //parseInt garante que seja um numero
        notFound()
    }
    return (
        <div>
            <p>Informações do produto {params.productId}</p>
        </div>
    )
}