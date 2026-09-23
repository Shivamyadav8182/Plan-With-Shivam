import Card from "./Card";
import "../index.css";

  
  function Tours({tours , removeTour}){
    return(
        <div className="container">
            <div>
                <h2 className="title">plan With Shivam</h2>
            </div>
        <div className="cards">

      {
            tours.map((tour) => {
                return <Card  key = {tour.id} {...tour} removeTour = {removeTour}></Card>
            } )

        }
            
        </div>
         </div>
    )
  }



export default Tours;