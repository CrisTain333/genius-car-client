import React, { useContext } from "react";
import { useLoaderData} from "react-router-dom";
import imgs from "../../assets/images/checkout/checkout.png";
import UserContext from "../../Contexts/Context";
import toast, { Toaster } from 'react-hot-toast';


const Checkout = () => {
    const {user} = useContext(UserContext);
  const {_id,title,price,img} = useLoaderData();

const handleSubmit = (e)=>{

    e.preventDefault();
    const form = e.target

    const fristName =  form.fristName.value
    const lastName = form.lastName.value
    const phoneNumber = form.phoneNumber.value
    const email = form.email.value
    const message =  form.message.value


    const order = {
        serviceId : _id,
        serviceName : title,
        img,
        price,
        customer: `${fristName} ${lastName}`,
        phoneNumber,
        email,
        message
    }

    fetch(' https://genius-car-server-nine-pi.vercel.app/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if(data.acknowledged){
                  toast.success('Order placed successfully')
                    form.reset();
                    
                }
            })
            .catch(er => console.error(er));

}

  return (
    <div>
      <div className="w-full  h-36 rounded-lg shadow-2xl overflow-hidden relative">
        <img
          className="absolute inset-0 h-full w-full object-cover"
          src={imgs}
          alt=""
        />
        <div className="absolute inset-0 bg-gray-900 bg-opacity-75"></div>
        <div className="flex h-full items-center justify-center relative">
          <h1 className="text-5xl text-white tracking-wider">Checkout</h1>
        </div>
      </div>
      <section className="w-3/4 rounded mx-auto bg-gray-200 dark:text-gray-50 mt-10">
	<form  onSubmit={handleSubmit} className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
		<fieldset className="grid grid-cols-3 gap-6 p-6 mx-auto rounded-md shadow-sm dark:bg-gray-900">
			
			<div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
				<div className="col-span-full sm:col-span-3">
					
					<input type="text" placeholder="Frist Name" className="input input-bordered w-full max-w-xs"  name="fristName"   />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs"  name = 'lastName' />
				</div>
				<div className="col-span-full sm:col-span-3">
                    <input type="number" placeholder="Phone Number" className="input input-bordered w-full max-w-xs"  name="phoneNumber" />
				</div>
				<div className="col-span-full sm:col-span-3">
					<input type="text" placeholder="email" defaultValue={user?.email} className="input input-bordered w-full max-w-xs" readOnly  name="email"/>
				</div>
				<div className="col-span-full">
					<textarea name="message" id="" cols="94" placeholder="Your Message"  className="w-full rounded pl-2" rows="3"    >

                    </textarea>
				</div>
				<div className="col-span-full">
					<button className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide  transition duration-200 rounded shadow-md bg-red-500 text-white   hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none w-full" type="submit">Confirm Order</button>
				</div>
			</div>
		</fieldset>
	</form>
</section>

<Toaster
  position="top-right"
  reverseOrder={false}
/>
    </div>
  );
};

export default Checkout;
