import * as React from 'react';

export default function Login(){
    return(
        <div className='w-full flex flex-col items-center'>
            <div className='bg-white px-10 py-7 rounded-3xl border-2 border-gray-200 w-full max-w-md'>
                <h1 className='text-3xl font-semibold font-Libre_Baskerville text-blue-950'>BEST DEAL</h1>
                <p className='font-medium text-base text-blue-950 mt-4 mb-4'>Welcome! Please Enter your details</p>
                <form className='w-full'>
                    <div>
                        <label className='text-base font-medium'>Email</label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent'
                            type="email"
                            placeholder='Enter Your email'
                            required
                            minLength={5} 
                            maxLength={50} 
                        />               
                    </div>
                    <div>
                        <label className='text-base font-medium'>Password</label>
                        <input 
                            className='w-full border-2 border-gray-100 rounded-xl p-2 mt-1 bg-transparent'
                            type="password"
                            placeholder='Enter Your password'
                            required
                            minLength={8} 
                            maxLength={20} 
                        />            
                    </div>
                    <div className='mt-6'>
                        <button className='text-sm text-blue-400'>Forgot Password</button>
                    </div>
                    <div className='mt-8 flex flex-col gap-y-4'>
                        <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-blue-950 text-white text-base font-bold'>Sign in</button>
                    </div>
                    </form>
                    <div className='mt-8 flex flex-col gap-y-4'>
  <button className='flex py-2 border-2 border-gray-200 items-center justify-center rounded-xl gap-x-2 active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all'>
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.26644 9.76453C6.19903 6.93863 8.85469 4.90909 12.0002 4.90909C13.6912 4.90909 15.2184 5.50909 16.4184 6.49091L19.9093 3C17.7821 1.14545 15.0548 0 12.0002 0C7.27031 0 3.19799 2.6983 1.24023 6.65002L5.26644 9.76453Z" fill="#EA4335"/>
                                <path d="M16.0406 18.0142C14.9508 18.718 13.5659 19.0926 11.9998 19.0926C8.86633 19.0926 6.21896 17.0785 5.27682 14.2695L1.2373 17.3366C3.19263 21.2953 7.26484 24.0017 11.9998 24.0017C14.9327 24.0017 17.7352 22.959 19.834 21.0012L16.0406 18.0142Z" fill="#34A853"/>
                                <path d="M19.8342 20.9978C22.0292 18.9503 23.4545 15.9019 23.4545 11.9982C23.4545 11.2891 23.3455 10.5255 23.1818 9.81641H12V14.4528H18.4364C18.1188 16.0119 17.2663 17.2194 16.0407 18.0108L19.8342 20.9978Z" fill="#4A90E2"/>
                                <path d="M5.27698 14.2663C5.03833 13.5547 4.90909 12.7922 4.90909 11.9984C4.90909 11.2167 5.03444 10.4652 5.2662 9.76294L1.23999 6.64844C0.436587 8.25884 0 10.0738 0 11.9984C0 13.918 0.444781 15.7286 1.23746 17.3334L5.27698 14.2663Z" fill="#FBBC05"/>
                            </svg>
    <span>Sign up with google</span>
  </button>
  <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium text-base'>Already have an account?</p>
                <button className='text-blue-400 font-medium ml-2'>Log in</button>
            </div>
</div>
</div>
</div>)}