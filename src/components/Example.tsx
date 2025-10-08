const Example = () => {
    return(
        <div className="h-screen w-screen flex flex-col items-center justify-center">
            <h1 className= "text-red-600 text-7xl mb-12" >EXAMPLE COMPONENT</h1>

            <div className="space-y-12">
                <div className="border-4 border-black flex">
                    <div className="w-[550px] h-[450px] bg-orange-300"/>
                    <div className="w-[550px] h-[450px] bg-blue-300"/>
                </div>
                
                <h4 className="text-black text-3xl font-extrabold italic">Example Component</h4>
            </div>
        </div>
    )
}

export default Example;