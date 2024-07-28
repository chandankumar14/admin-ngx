export interface PRODUCT_MODEL {
    product_id: number
    product_name: string,
    product_size: string
    sku_cod: string,
    quantity: number
    price: any,
    in_stock: boolean
    product_image: string
    product_description: string
    category_id: number
    isDeleted: boolean
}

export interface PRODUCT_CATEGORY {
    category_id: number
    category_name: string
    category_banner1: string
}

export interface PRODUCT_VARIANT {
    product_variant_id: number
    product_id: number
    product_name: string
    product_size: string
    sku_code: string
    price: any
    in_stock: boolean
    category_id: number,
    isDeleted: boolean
}