import { SignIn } from '@clerk/clerk-react'

const Login = () => {
  return (
    <div className='mt-24 flex items-center justify-center py-5 lg:py-20'>
        <SignIn />
    </div>
  )
}

export default Login