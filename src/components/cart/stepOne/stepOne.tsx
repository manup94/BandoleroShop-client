import Basket from "./basket"
import Resume from "./resume"

export default function StepOne(props) {

    const { products } = props
    return (
        <div className="flex w-full container p-10">
            <div className="w-2/3 m-5">
                <Basket products={products} />
            </div>
            <div className="w-1/3 m-5 ">
                <Resume products={products} />
            </div>

        </div>
    )
}
