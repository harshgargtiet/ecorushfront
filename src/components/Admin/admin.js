import React from "react";

const Admin =()=>{
    return (
        <>
        <h1>Admin Page</h1>
        <div className="card">
            hello world
        </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    <div className="card" style={{margin: '10%'}}>
                        <div style={{margin: '10%'}} >
                            <div>
                                
                            </div>
                        </div>
                    </div>

                    <div className="card" style={{margin: '10%'}}>
                        <div style={{margin: '10%'}} >
                            <h3 >123 Main St</h3>
                            <p >3 bd | 2 ba | 1,500 sqft</p>
                            <p >$500,000</p>
                            <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                                View Details
                            </button>
                        </div>
                    </div>

                    <div className="card" style={{margin: '10%'}}>
                        <div style={{margin: '10%'}} >
                            <h3 >123 Main St</h3>
                            <p >3 bd | 2 ba | 1,500 sqft</p>
                            <p >$500,000</p>
                            <button className="mt-6 px-4 py-2 bg-amber-800 text-white rounded-md hover:bg-amber-700">
                                View Details
                            </button>
                        </div>
                    </div>
                </div>

                
        </>
    );
}

export default Admin;