import { notFound } from 'next/navigation' //import da file notfound e seus dados

interface Reviewsparams {
    params: {
        productId: string,
        reviewsId: string,
    }
}

export default function Reviews({ params }: Reviewsparams) {
    if (parseInt(params.reviewsId) > 1000 || parseInt(params.reviewsId) <= 0 || parseInt(params.productId) > 100) {  //parseInt garante que seja um numero
        notFound()
    }

    return (
        <div>
            <p>Produto {params.productId}</p>
            <p>Review {params.reviewsId}</p>
        </div>
    )
}