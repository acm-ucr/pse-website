const Example = () => {
    return (
        <div className="flex h-screen w-screen flex-col justify-center items-center">
            <h1 className="mb-5 text-5xl text-red-600">EXAMPLE COMPONENT</h1>

            <div className="flex flex-col items-start">
                <div className="flex outline-4">
                    <div className="h-80 w-100 bg-orange-300"></div>
                    <div className="h-80 w-100 bg-blue-300"></div>
                </div>
                <div className="mt-5 italic font-bold text-left text-lg">Example Component</div>

            </div>
        </div>
    )
}

export default Example;