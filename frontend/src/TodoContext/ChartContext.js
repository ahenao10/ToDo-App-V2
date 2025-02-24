import React from "react";

const ChartContext = React.createContext();

function ChartProvider({ children }) {

    const [openDashboard, setOpenDashboard] = React.useState(false);
    
    return (
        <ChartContext.Provider value={{
            openDashboard,
            setOpenDashboard
        }}>
            {children}
        </ChartContext.Provider>
    );
};

export { ChartContext, ChartProvider }