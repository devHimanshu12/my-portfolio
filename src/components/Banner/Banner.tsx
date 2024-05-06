
import Flicking from "@egjs/react-flicking";
import "@egjs/react-flicking/dist/flicking.css";
import { useState } from "react";


export default function Banner(){
    const [panels, setPanels] = useState([0, 1, 2, 3, 4]);

  return( <>
    <Flicking renderOnlyVisible={true}>
      {panels.map(index => <div className="flicking-panel" key={index}>{index + 1}</div>)}
    </Flicking>
    {/* <div className="block is-flex is-justify-content-center">
      <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([panels[0] - 1, ...panels])}>Prepend</span>
      <span className="button mr-2 is-info is-outlined" onClick={() => setPanels([...panels, panels[panels.length - 1] + 1])}>Append</span>
    </div> */}
  </>)
}