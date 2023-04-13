import React from 'react';

const AddTenant = () => {
  return (
       <div className="mt-5">
       <div className="w-25 mx-auto">
        <h3 className=".text-warning-emphasis text-center"><i className='display-6'>Add Tenant</i></h3>
        <label htmlFor="" className='text-secondary'><h6>Name Of Tenant</h6> </label>
        <input type="text" required placeholder="" className="form-control" />
        <label htmlFor="" className='text-secondary'><h6>Contact Number</h6> </label>
        <input type="text" required className='form-control'/>
        <div className="mb-3">
           <label htmlFor="Textarea1" className='text-secondary'><h6>Address</h6></label><br />
           <textarea className="form-control" id="Textarea1" rows="5"></textarea>
       </div>
        <div className="d-flex justify-content-center">
            <button className="btn btn-outline-info mt-2">Submit</button>
            </div>
        </div>
    </div>
  )
}

export default AddTenant;