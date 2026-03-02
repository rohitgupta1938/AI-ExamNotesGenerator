import React from 'react'
import ResponsiveContainer from 'recharts'
function RechartSetup({charts}) {
    if(!charts || charts.length==0) return null;
    return (
        <div className='space-y-8'>
            {charts.map((chart,i)=>(
                <div key={i} className='border border-gray-200 rounded-xl p-4 bg-white'>
                    <h4 className='font-semibold text-gray-800 mb-3'>
                        📊 {chart.title}
                    </h4>
                    <div className='h-72'>
                        <ResponsiveContainer width="100%" height="100%">

                        </ResponsiveContainer>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default RechartSetup
