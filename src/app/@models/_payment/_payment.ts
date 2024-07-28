export interface PAYMENT {
    payment_id: number
    user_id: number
    order_id: number
    payment_mode: string
    trans_id: string
    status: string
    amount: any
    isDeleted: boolean
}