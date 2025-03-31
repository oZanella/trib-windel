interface Reviewsparams {
    params: {
        productId: number,
        reviewsId: number
    }
}


export default function Reviews({ params }: Reviewsparams) {
    return (
        <div>
            <p>Produto {params.productId}</p>
            <p>Reviews {params.reviewsId}</p>
        </div>
    )
}