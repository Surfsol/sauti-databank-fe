import React from "react";
import { ResponsiveBar } from "@nivo/bar"
import './temp.css'
import graphLabels from './graphLabels'

const getMaxValue = data => {
    let max = 0
    data.forEach(obj => {
        let values = Object.values(obj)
        values = values.map(i => parseInt(i, 10)).filter(item => Number(item) === item)
        let possMax = Math.max(...values)
        if(possMax > max){
            max = possMax
        }
    })
    
    return max * 1.1
}

const Graph = props => {
        return (
           <div className="Graph-Container">
              <ResponsiveBar
                data={props.data}
                keys={graphLabels[`${props.indexBy}`].labels}
                indexBy={props.indexBy}
                groupMode={props.groupMode} // Possibly add toggle selector to change group mode.
                margin={{ top: 50, right: 170, bottom: 75, left: 80 }}
                padding={0.3}
                innerPadding={0}
                maxValue={getMaxValue(props.data)}
                colors={{ scheme: 'nivo' }}
                borderColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                axisTop={null}
                axisRight={null}
                axisBottom={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: props.label,
                    legendPosition: 'middle',
                    legendOffset: 35
                }}
                axisLeft={{
                    tickSize: 5,
                    tickPadding: 5,
                    tickRotation: 0,
                    legend: 'Quantity', // Possibly toggle percentage or number in future release
                    legendPosition: 'middle',
                    legendOffset: -60
                }}
                labelSkipWidth={0}
                labelSkipHeight={0}
                labelTextColor={{ from: 'color', modifiers: [ [ 'darker', 1.6 ] ] }}
                legends={[
                    {
                        dataFrom: 'keys',
                        anchor: 'bottom-right',
                        direction: 'column',
                        justify: false,
                        translateX: 120,
                        translateY: 0,
                        itemsSpacing: 2,
                        itemWidth: 100,
                        itemHeight: 20,
                        itemDirection: 'left-to-right',
                        itemOpacity: 0.85,
                        symbolSize: 20,
                        effects: [
                            {
                                on: 'hover',
                                style: {
                                    itemOpacity: 1
                                }
                            }
                        ]
                    }
                ]}
                animate={true}
                motionStiffness={90}
                motionDamping={15}
            />
           </div>
        )
};

export default Graph