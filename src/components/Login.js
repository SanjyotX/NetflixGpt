import Header from "./Header";

const Login = () =>{
    return <div>
        <Header />
        <div className="absolute">
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/fc9ebadf-d77a-4f9b-a0dd-499af5178dc5/web/IN-en-20260330-TRIFECTA-perspective_81d2307f-4ee1-416d-8721-ac2be7b2da1d_large.jpg" alt="Netflix Background" />
        </div>
        <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0">
            <h1 className="text-white font-bold text-3xl py-4">Sign In</h1>
            <input type="text" placeholder="Email Address" className="p-2 my-2"/>
            <input type="password" placeholder="Password" className="p-2 my-2"/>
            <button className="bg-red-600 text-white p-4 my-4 w-full">Sign In</button>
        </form>
    </div>;
};
export default Login;