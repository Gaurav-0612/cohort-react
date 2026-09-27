
import { useAuth } from '../components/hooks/useAuth'
const RegisterPage = () => {
  const {register,registerFormSubmit,handleSubmit,errors,}=useAuth()
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-8">

        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Create Account
          </h1>
          <p className="text-gray-500 mt-2">
            Register to get started
          </p>
        </div>

        {/* Register Form */}
        <form onSubmit={handleSubmit(registerFormSubmit)} className="space-y-5">

          {/* Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Name
            </label>
            <input
            {...register("name",{required:"name is required"})}
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
             {errors.name && (
              <p className="text-red-600">{errors.name.message}</p>
            )}
          </div>

          {/* Gmail */}
          <div>
            
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Gmail
            </label>
            <input
             {
              ...register("gmail",{required:"gmail is required"})
            }
              type="email"
              placeholder="Enter your Gmail"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
             {errors.gmail && (
              <p className="text-red-600">{errors.gmail.message}</p>
            )}
          </div>

          {/* Password */}
          <div>
            
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
             {
              ...register("password",{required:"password is required",minLength:{value:6,message:"minimun 6 letter is required"},})
            }
              type="password"
              placeholder="Create a password"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />
             {errors.password && (
              <p className="text-red-600">{errors.password.message}</p>
            )}
          </div>

          {/* Register Button */}
          <button

            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg transition duration-200"
          >
            Register
          </button>
        </form>

        {/* Login */}
        <div className="flex items-center justify-center gap-2 mt-6 text-sm">
          <span className="text-gray-500">
            Already have an account?
          </span>

          <button
          onClick={()=> navigate('/')}
            type="button"
            className="text-blue-600 font-semibold hover:text-blue-700 hover:underline cursor-pointer"
          >
            Login
          </button>
        </div>

      </div>
    </div>
  )
}

export default RegisterPage
