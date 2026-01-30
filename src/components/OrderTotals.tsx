import { useMemo } from "react"
import type { OrderItem } from "../types"
import { formatCurrency } from "../helpers"

type OrderTotalProps = {

    order: OrderItem[]

}

export default function OrderTotals({order} : OrderTotalProps) {

    const subtotalAmount = useMemo(() => order.reduce((total, item) => total + (item.price * item.quantity), 0), 
    [order])

    return (
    
    <>
        <div className="space-y-3 mt-10">
        <h2 className="font-black text-2xl">Total y Propina</h2>
        <p>SubTotal a Pagar: {''}
            <span className="font-bold">{formatCurrency(subtotalAmount)}</span>
        </p>

         <p>Propina: {''}
            <span className="font-bold">$0</span>
        </p>

         <p>Total a Pagar: {''}
            <span className="font-bold">$0</span>
        </p>
        </div>

        <button>

        </button>
    
    </>
  )
}
