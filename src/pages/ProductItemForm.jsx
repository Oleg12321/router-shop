import React, { useRef, useState } from 'react'

import './ProductItemForm.css'


export default function ProductItemForm() {
  // const [amountProducts, setAmountProducts] = useState(0)
  // const amountInputRef = useRef();
  // const productData = useSelector((state => state.items))
  // const dispatch = useDispatch();
  // console.log(amountInputRef);
  // const enteredAmount = amountInputRef.current?.value;
  // const enteredAmountNumber = +enteredAmount;

  // const submitHandler = (event) => {
  //   event.preventDefault();
  //   setAmountProducts(enteredAmountNumber)
  //   dispatch(
  //     addProduct({
  //       id: new Date(),
  //       amount: amountProducts,
  //     })
  //   );
  // }
  return (
    <div>
      {/* {amountProducts}
      <form className="form" onSubmit={submitHandler}>
        <input
          type="number"
          ref={amountInputRef}
          label="Amount"
          input={{
            id: "amount",
            type: "number",
            min: "1",
            max: "5",
            step: "1",
            defaultValue: "1",
          }}
        />
        <button>+ Add</button>
        {!amountIsValid && <p>Please enter a valid amount (1-5).</p>}
      </form> */}
    </div>
  );
}
