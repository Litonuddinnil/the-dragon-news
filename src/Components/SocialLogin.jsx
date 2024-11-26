import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { IoLogoGithub } from "react-icons/io";

const SocialLogin = () => {
    return (
        <div>
            <h2 className='text-xl font-bold mb-3'>Login With</h2>
            <div className='flex flex-col gap-2 '>
                <button className="btn btn-outline text-lg"><FcGoogle></FcGoogle>Login with Google</button>
                <button className="btn btn-outline text-lg"><IoLogoGithub></IoLogoGithub>Login with GitHub</button>
            </div>
        </div>
    );
};

export default SocialLogin;