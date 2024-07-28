export interface ORDER {
    order_id: number
    user_id: number
    payment_id: number
    product_id: string
    order_status: string
    delivery_address: string
    amount: any
    isDeleted: boolean
}