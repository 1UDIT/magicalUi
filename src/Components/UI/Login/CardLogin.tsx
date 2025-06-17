'use client'

import { useState } from "react"; 
import { LiaLinkedinIn } from "react-icons/lia";
import { LuFacebook, LuKeyRound, LuLockKeyhole } from "react-icons/lu";
import { MdEmail } from "react-icons/md"; 
import { Card, CardHeader, CardFooter, CardContent } from "../card";
import { Button } from "../Button";

function CardLogin({ onFlip }: { onFlip: () => void }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [rememberMe, setRememberMe] = useState(false);

    return (
        <Card color="light" className="mx-auto max-w-md h-[670px] p-6 dark:bg-white border-2 border-amber-600  ">

            <CardHeader color="light" className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600">
                    <span className="text-xl text-white">
                        <LuLockKeyhole />
                    </span>
                </div>
                <h2 className="text-2xl font-bold text-gray-600 dark:text-black">Welcome Back</h2>
                <p className="mt-1 text-gray-500 dark:text-black">
                    Sign in to continue to your account
                </p>
            </CardHeader>

            <CardContent color="light">
                <div className="space-y-6">
                    {/* Email */}
                    <div>
                        <label htmlFor="email" className="text-start mb-1 block text-sm font-medium text-gray-700 dark:text-black">
                            Email Address
                        </label>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <MdEmail className="text-gray-500" />
                            </div>
                            <input
                                type="email"
                                id="email"
                                aria-label="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500"
                                placeholder="you@example.com"
                            />
                        </div>
                    </div>

                    {/* Password */}
                    <div>
                        <div className="mb-1 flex items-center justify-between">
                            <label htmlFor="password" className="text-sm font-medium text-gray-700 dark:text-black">
                                Password
                            </label>
                            <a href="#" className="text-sm text-blue-600 hover:underline dark:text-black">
                                Forgot password?
                            </a>
                        </div>
                        <div className="relative">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                <LuKeyRound className="text-gray-500 dark:text-black" />
                            </div>
                            <input
                                type="password"
                                id="password"
                                aria-label="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="block w-full rounded-lg border border-gray-300 py-2 pr-3 pl-10 focus:border-blue-500 focus:ring-blue-500 placeholder:text-gray-500"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    {/* Remember Me */}
                    <div className="flex items-center">
                        <input
                            id="remember_me"
                            type="checkbox"
                            checked={rememberMe}
                            onChange={() => setRememberMe(!rememberMe)}
                            className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500 dark:text-black"
                        />
                        <label htmlFor="remember_me" className="ml-2 block text-sm text-gray-700 dark:text-black">
                            Remember me
                        </label>
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full py-2 font-medium text-white transition-colors duration-300 bg-blue-700 hover:bg-blue-500 cursor-pointer dark:text-black">
                        Sign In
                    </Button>
                </div>
            </CardContent>

            <CardFooter color="light" className="border-t border-gray-100 text-center flex-col">
                <p className="text-gray-600 dark:text-black">
                    Don't have an account?{" "}
                    <button onClick={onFlip} className="font-medium text-blue-600 hover:underline">
                        Sign up
                    </button>
                </p>

                {/* Social Auth */}
                <div className="mt-4">
                    <div className="relative">
                        <div className="absolute inset-0 flex items-center">
                            <div className="w-full border-t border-gray-200"></div>
                        </div>
                        <div className="relative flex justify-center text-sm">
                            <span className="px-2 bg-blue-600 text-white">Or continue with</span>
                        </div>
                    </div>

                    <div className="mt-4 grid grid-cols-3 gap-3">
                        <Button color="primary" className="bg-blue-700 hover:bg-blue-500 font-bold text-white flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 transition-colors cursor-pointer">
                            <span>G</span>
                        </Button>
                        <Button color="primary" className="bg-blue-700 hover:bg-blue-500 font-bold text-white flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 transition-colors cursor-pointer">
                            <LuFacebook />
                        </Button>
                        <Button color="primary" className="bg-blue-700 hover:bg-blue-500 font-bold text-white flex items-center justify-center rounded-md border border-gray-300 px-4 py-2 transition-colors cursor-pointer">
                            <LiaLinkedinIn />
                        </Button>
                    </div>
                </div>
            </CardFooter>
        </Card>
    );
}

export default CardLogin;
