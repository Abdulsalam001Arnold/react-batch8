import { ToastContainer, toast } from "react-toastify"
import { axiosInstance } from "../api/axios"
import { useState } from "react"
import Loader from "../components/Loader"

export default function Signup() {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })

    const [loading, setLoading] = useState(false)

    const handleChange = (event) => {
        const {name, value} = event.target

        setFormData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

   let message = ""
    const handleSubmit = async (event) => {
        event.preventDefault()
        setLoading(true)
        try{
         const response = await axiosInstance.post("/api/signup", formData)
        message = response.data.message
         if(response.data) {
          toast.success(response.data.message)
         }
        }catch(err) {
        console.error(err)
        toast.error(err)
        throw new Error(err)
        } finally {
          setLoading(false)
          setFormData({
            username: "",
            email: "",
            password: ""
          })
        }
    }



    return(
        <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
            <ToastContainer/>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">Create an account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form method="POST" onSubmit={handleSubmit} className="space-y-6">

        <div>
        <label htmlFor="username" className="block text-sm/6 font-medium text-gray-900">Username</label>
        <div className="mt-2">
          <input id="username" type="text" name="username" onChange={handleChange} value={formData.username} required autoComplete="name" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">Email address</label>
        <div className="mt-2">
          <input id="email" type="email" name="email" required onChange={handleChange} value={formData.email} autoComplete="email" className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-900">Password</label>
        </div>
        <div className="mt-2">
          <input id="password" type="password" name="password" required autoComplete="current-password" onChange={handleChange} value={formData.password} className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" />
        </div>
      </div>

      <div>
        {loading ? <Loader/> : 
        <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        }
      </div>

      <p>{message}</p>
    </form>
  </div>
</div>
    )
}