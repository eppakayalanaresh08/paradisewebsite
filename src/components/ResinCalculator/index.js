import React, { useEffect } from "react";
import "./index.css";
import Footer from "../Footer";
import { useState } from "react";

function ResinCalculator() {

    const [activeIndex, setaActiveState] = useState({mainindex: "", shape: "", applying: "", ratio: ""});

    const [activeMesurements, setActiveMeasturemnts] = useState({ length: "", breadth: "", thickness: "", diameter: ""});

    const [activeTotal, setActiveTotal] = useState({total: 0, resin: 0, hardener: 0, cost: 0});

    // const [activeDiameter, setActiveDiameter] = usestate({})

    const onClickShape = (index) =>{
        setaActiveState(prevState => ({
            ...prevState,
            shape:index,
            mainindex: 1
        }));
        
    };
    const onClickApplying = (shapes) =>{
        setaActiveState(prevState => ({
            ...prevState,
            mainindex: 2,
            applying: shapes
        }))
    }

    const onClickRatio = (ratios) =>{
        setaActiveState(prevState => ({
            ...prevState,
            mainindex: 3,
            ratio: ratios
        }))
    }

    const handleChangeLength = (event) => {
        const {value} = event.target
        setActiveMeasturemnts(prevState => ({
            ...prevState,
            mainindex: 4,
            length: value
        }))
    }

    const handleChangeBreadth = (event) => {
        const {value} = event.target
        setActiveMeasturemnts(prevState => ({
            ...prevState,
            mainindex: 4,
            breadth: value
        }))
    }

    const handleChangeDiameter = (event) => {
        const {value} = event.target
        setActiveMeasturemnts(prevState => ({
            ...prevState,
            mainindex: 4,
            diameter: value
        }))
    }

    const handleChangeThickness = (event) => {
        const {value} = event.target
        setActiveMeasturemnts(prevState => ({
            ...prevState,
            mainindex: 4,
            thickness: value
        }))
    }
    useEffect(() =>{
        setActiveTotal(prevState => {
            const vartotal = activeMesurements.length * activeMesurements.breadth * 0.84;
            const varresin = activeIndex.ratio === 3 ? (vartotal / 3) * 2 : (vartotal / 4) * 3;
            // const varhardener = activeIndex.ratio === 3 ? vartotal / 3 * 2 : vartotal / 4 * 3;
            
            return{
                ...prevState,
                total: vartotal,
                resin: varresin,
                hardener: vartotal - varresin
            };
        })
    },[activeMesurements.length, activeMesurements.breadth, activeIndex.ratio])
    
    // useEffect(() =>{
    //     setActiveTotal(prevState => {
            
    //     })
    // },[activeMesurements.thickness, activeMesurements.diameter])

    console.log(activeTotal);
    return (
        <div className="conatainer">
            <div className="container-card">
                <h1>Please select an option</h1>
                <div>
                    <button onClick={() => onClickShape("rectangle")} className="name">Rectangle</button>
                    <button onClick={() => onClickShape("circle")} className="name">Circle</button>
                </div>
                <div className={activeIndex.mainindex === 1 || activeIndex.mainindex === 2 ||  activeIndex.mainindex === 3 ? "active" : "inactive"}>
                    <h2 className="headings">What are you planning to do with Tulsi Resin and Hardener?</h2>
                    <button onClick={() => onClickApplying("coating")} className="name">COATING</button>
                    <button onClick={() => onClickApplying("casting")} className="name">CASTING</button>
                </div>
                <div className={activeIndex.mainindex === 2 ||  activeIndex.mainindex === 3 ? "active" : "inactive"}>
                    <h2 className="headings">Which type of Epoxy resin hardener are you using?</h2>
                    <button onClick={() => onClickRatio(3)} className="name">2:1</button>
                    <button onClick={() => onClickRatio(4)} className="name">3:1</button>
                </div>
                <div className={activeIndex.mainindex === 3 ? "active" : "inactive"}>
                    <h1>
                        {activeIndex.shape} {activeIndex.applying}
                    </h1>
                </div>
                <div>
                    <div className={activeIndex.mainindex === 3 ? "active" : "inactive"}>
                        {activeIndex.shape === "rectangle" ? (
                            activeIndex.applying === "coating" ? (
                                <div>
                                    <input type="text" value={activeMesurements.length} onChange={handleChangeLength} className="textbox" placeholder="Enter Length here..."/>
                                    <input type="text" value={activeMesurements.breadth} onChange={handleChangeBreadth} className="textbox" placeholder="Enter Breadth here..."/>
                                </div>
                            ) : (
                                <div>
                                    <input type="text" value={activeMesurements.length} onChange={handleChangeLength} className="textbox" placeholder="Enter Length here..."/>
                                    <input type="text" value={activeMesurements.breadth} onChange={handleChangeBreadth} className="textbox" placeholder="Enter Breadth here..."/>
                                    <input type="text" value={activeMesurements.thickness} onChange={handleChangeThickness} className="textbox" placeholder="Enter Thickness here..."/>
                                </div>
                            )
                        ):(
                            activeIndex.applying === "coating" ? (
                                <div>
                                    <input type="text" value={activeMesurements.diameter} onChange={handleChangeDiameter} className="textbox" placeholder="Enter diameter here..."/>
                                </div>
                            ):(
                                <div>
                                    <input type="text" value={activeMesurements.diameter} onChange={handleChangeDiameter} className="textbox" placeholder="Enter diameter here..."/>
                                    <input type="text" value={activeMesurements.thickness} onChange={handleChangeThickness} className="textbox" placeholder="Enter Thickness here..."/>
                                </div>
                            )
                        )}
                    </div>
                </div>
                <div className={activeMesurements.length > 0 ? "active" : "inactive"}>
                    <p>Total Tulsi Resin Required</p>
                    <h1>Total: <span> <span>{Number((activeTotal.total).toFixed(3))}</span> Grams or <span>{Number((activeTotal.total / 1000).toFixed(3))} Kg's</span></span></h1>
                    <h1>Resin: <span><span>{Number((activeTotal.resin).toFixed(3))}</span>Gm and Hardener: <span>{Number((activeTotal.hardener).toFixed(3))}Gm</span></span></h1>
                </div>
            </div>
            <Footer />

        </div>
    )
}

export default ResinCalculator;