interface Infoparams {
    params: {
        productId: number
    }
}

export default function Info({ params }: Infoparams) {
    return (
        <div>
            <p>Informações do produto {params.productId}</p>
        </div>
    )
}