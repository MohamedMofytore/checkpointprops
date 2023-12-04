import {players} from "./players"
import Player from "./Player"
const PlayersList=(props)=>{
    return(
        <div style={{display:"flex",justifyContent:"space-between"}}>

  
    {
    players.map((el)=>
   <Player el={el} /> 
    )
}
        </div>
    )
}
export default PlayersList