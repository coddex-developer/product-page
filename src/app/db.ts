export interface Product {
    imageURL: string;
    title: string;
    chipset: string;
    description: string;
    infoProduct: string;
    infoPayment: string;
    descriptionPrice: string;
    price: string
}

export const producdDB: Product[] = [
    {
        imageURL:
            "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mba_13_15__fx2g3qlubdym_large.png",
        title: "Macbook Air de 13 e 15 Pol",
        chipset: "Chip M2 ou M3",
        description:
            "Super finos e rápidos para você trabalhar, jogar ou onde quer que vá.",
        infoProduct: "#",
        descriptionPrice: "A partir de 1descriptionP R$916,18 ou R$10.994,00 à vista",
        infoPayment: "#",
        price: ""
    },
    {
        imageURL:
            "https://www.apple.com/v/mac/home/ca/images/overview/select/product_tile_mbp_14_16__bkl8zusnkpw2_large.png",
        title: "Macbook Pro de 14 e 16 Pol",
        chipset: "M3, M3 PRO ou M3 PRO-MAX",
        description: "Os notebooks Mac mais avançados para usos pesados.",
        infoProduct: "#",
        descriptionPrice: "A partir de 10x de R$1218,51 ou R$12.185,00",
        infoPayment: "#",
        price: ""
    },
];