class Review {
    username
    star

    constructor(username: string, star?: number) {
        this.username = username
        if (star) {
            this.star = star
        }        
    }
}

const review1 = new Review ("Ana", 5)
const review2 = new Review ("Maria", 3)
const review3 = new Review ("João", 2)
const review4 = new Review ("Carlos", 4)
const review5 = new Review ("Sofia", 1)
const review6 = new Review ("José")

function feedback(review: Review) {
    if('star' in review) {
        console.log(`Agradecemos por nos avaliar com ${review.star} estrelas`)
    } else {
        console.log(`Nos avalie para melhorarmos nossos serviços.`)
    }
}

feedback(review1)
feedback(review2)
feedback(review3)
feedback(review4)
feedback(review5)
feedback(review6)