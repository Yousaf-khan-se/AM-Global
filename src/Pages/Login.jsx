import React, { useState } from 'react'
import bg from '../assets/proposal/bg.png'
import loginPic from '../assets/proposal/formPic.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { loginUser } from '../thunk/authThunk'

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    })
    const [showPassword, setShowPassword] = useState(false)

    const dispatch = useDispatch()
    const { loading, error } = useSelector(state => state.user)

    const handleChange = (e) => {
        // e.preventDefault();

        const { name, value, type, checked } = e.target
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? checked : value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        dispatch(loginUser({
            email: formData.email,
            password: formData.password
        }))

    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword)
    }

    return (
        <section className='relative bg-white/45 flex flex-col justify-around items-center min-h-[100vh] md:h-[110vh] py-1'>
            <div className='absolute z-10 md:top-0 h-full w-full'><img src={bg} alt="" className="w-full h-full object-cover" /></div>
            <div className='absolute inset-0 bg-black/[0.7]'></div>
            <div className='ml-4 md:ml-0 md:text-center z-10'>
                <h1 className='text-xl md:text-[2.5rem] font-extrabold m-4 md:m-2 md:mb-6'>Welcome Back</h1>
                <p className='md:text-center text-left md:ml-0 m-4 opacity-80 md:w-[30vw] md:mb-10 mb-2'>
                    Login to access your personalized dashboard, saved jobs, and application status.
                </p>
            </div>
            <div className='z-20 shadow-2xl shadow-black/5 md:p-10 p-3 rounded-xl flex md:flex-row flex-col-reverse justify-center items-center bg-[#272727] m-2 gap-3 md:gap-10 w-[90vw] md:w-[60vw] h-auto md:h-[70vh]'>
                <form onSubmit={handleSubmit} className='md:ml-2 md:w-[35vw] w-full'>
                    <h1 className='text-lg md:text-xl font-semibold mb-1'>Login</h1>
                    <p className='font-extralight opacity-90 md:w-[24vw] text-xs mb-6'>
                        Enter your credentials to access your account and explore global opportunities.
                    </p>

                    {/* field div */}
                    <div className='py-4 flex flex-col justify-center items-start gap-4 text-black'>
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder='Email Address'
                            className='rounded w-full p-[0.4rem] placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                            required
                            disabled={loading}
                        />

                        <div className='relative w-full'>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder='Password'
                                className='rounded w-full p-[0.4rem] pr-10 placeholder:text-xs text-sm border border-white/10 bg-white/10 text-white'
                                required
                                disabled={loading}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-xs text-white/60 hover:text-white"
                                disabled={loading}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>

                    <div className='flex justify-between items-center mb-6'>
                        <div className='relative'>
                            <input
                                type="checkbox"
                                id='rememberMe'
                                name="rememberMe"
                                checked={formData.rememberMe}
                                onChange={handleChange}
                                disabled={loading}
                                className='absolute appearance-none bg-transparent top-0 left-0 w-4 h-4 border border-white/30 rounded checked:after:content-["✓"] checked:after:text-white checked:after:text-xs checked:after:absolute checked:after:top-[-2px] checked:after:left-[1px] checked:after:font-bold'
                            />
                            <label htmlFor="rememberMe" className='text-xs font-extralight px-4 ml-2 opacity-85'>
                                Remember me
                            </label>
                        </div>

                        <Link
                            to="/forgot-password"
                            className={`text-xs text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}
                        >
                            Forgot Password?
                        </Link>
                    </div>

                    {error && (
                        <div className="bg-red-900/20 border border-red-500/30 rounded-lg py-2 px-4 mb-4">
                            <p className="text-xs text-red-400">{error}</p>
                        </div>
                    )}

                    <div className="flex flex-col md:flex-row justify-start items-start md:items-center gap-3">
                        <button
                            type='submit'
                            disabled={loading}
                            className='bg-gradient-to-r from-[#D5BB54]/90 to-[#977619] bg-[#977619] hover:bg-black py-2 md:w-[8vw] w-[20vw] text-xs rounded-full transition-all disabled:opacity-60 disabled:cursor-not-allowed'
                        >
                            {loading ? 'Logging in...' : 'Login'}
                        </button>
                        <p className="text-xs text-white/70">
                            Don't have an account? <Link to="/signup" className={`text-[#D5BB54] hover:underline ${loading ? 'pointer-events-none opacity-50' : ''}`}>Sign up here</Link>
                        </p>
                    </div>

                    <div className="mt-6 text-center">
                        <p className="text-xs text-white/50 mb-3">Or login with</p>
                        <div className="flex justify-center gap-4">
                            <button
                                type="button"
                                className="bg-white/10 hover:bg-white/20 rounded-md px-4 py-2 text-xs flex items-center gap-2 border border-white/5 transition-all"
                                onClick={() => alert('Google login would be integrated here')}
                                disabled={loading}
                            >
                                <span>Google</span>
                            </button>
                            <button
                                type="button"
                                className="bg-white/10 hover:bg-white/20 rounded-md px-4 py-2 text-xs flex items-center gap-2 border border-white/5 transition-all"
                                onClick={() => alert('LinkedIn login would be integrated here')}
                                disabled={loading}
                            >
                                <span>LinkedIn</span>
                            </button>
                        </div>
                    </div>
                </form>
                <div className='hidden md:block'>
                    <img src={loginPic} alt="People working together" className='h-full max-h-[60vh] object-cover' />
                </div>
            </div>
        </section>
    )
}

export default Login