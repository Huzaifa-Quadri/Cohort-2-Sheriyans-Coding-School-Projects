import {MoveUpRight} from 'lucide-react';
const Hero_bottom = () => {
  return (
    <div className="hero-bottom">
        <div className="left">
            <p>Train with real professionals <br />Get the real results</p>
            <span>
              <img src="https://resources.prod.atpmedia.pulselive.com/photo-resources/2024/10/01/7d88669b-783b-48df-ba0f-4080532342d0/Taylor-Fritz-US-Open-2024-Photoshoot-Lifestyle-1.jpg?height=260&width=380" alt="player1" />

              <img src="https://s7ap1.scene7.com/is/image/tennisau/mark-philippousis-profile:Small" alt="player2" />

              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSw1duGNJR5OPC03eMTyJ-azFnGxOSkOm9UaA&s" alt="player3" />
            </span>
        </div>
        <div className="right">
            <a href="#">Instagram<MoveUpRight /></a>
            <a href="#">Facebook<MoveUpRight /></a>
            <a href="#">Tik Tok<MoveUpRight /></a>
        </div>
    </div>
  )
}

export default Hero_bottom