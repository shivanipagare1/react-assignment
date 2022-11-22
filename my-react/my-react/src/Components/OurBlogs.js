import React from "react";
import img1 from "../assets/image/img1.png";
import img2 from "../assets/image/img2.png";
import img3 from "../assets/image/img3.png";
import whiteIMG from "../assets/image/whiteIMG.png";

function Ourblogs() {
  return (
    <div className="Ourblogs">
      <h2 style={{ marginLeft: "100px" }}>Our Blogs</h2>
      <p style={{ color: "black", fontSize: "x-large", marginTop: "0px" }}>Get to know our insights</p>
      <img className="Img1" src={img1} alt="#" height={400}></img><img className="Img2" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dlS43KTUic3k-YOup_1uES1Qif-CR8qPLg&usqp=CAU" alt="#"></img>
      <div>
        <h4> A Comprihansive Guide <br></br>
          to Salsforce Data <br></br>
          migration</h4>
        <h5>Salsforce is a customer relationship<br></br>
          management CRM software that helps<br></br>
          business manage there costomer data.</h5><br></br>
      </div>
      <div>
        <img className="Img3" src="https://cdn.pixabay.com/photo/2018/03/10/09/45/businessman-3213659__340.jpg" alt="#"></img>
        <img className="Img4" src={whiteIMG}></img><h4 className="heading">A Comprehansive Guide To Healthcare<br></br>Interoperability and Redox Integration</h4>
        <h5 className="healthcare">The consumer is the king. <br></br>This applies t the healthcare industry too.</h5>
      </div>
      <div>
        <img className="Img5" src={img2} alt="#"></img>
        </div>
      <div>
        <img className="Img6" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dlS43KTUic3k-YOup_1uES1Qif-CR8qPLg&usqp=CAU" alt="#"></img>
      </div>
      <div>
        <img className="Img7" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1dlS43KTUic3k-YOup_1uES1Qif-CR8qPLg&usqp=CAU" alt="#"></img>
      </div>
      <div>
      <img className="Img8" src={img3} alt="#"></img>
      </div>
      <div>
      <h6 className="Img5content">Telemedicine App<br></br> Development Solutions : <br></br>
      Types, features,Process,<br></br>Cost, and Trends
      </h6>
      <h6 className="Image5content">
        About how the pandamic pushec<br></br> innovation and digitalization<br></br> in healthare, 
        much has been<br></br> writen. the telemedicine app<br></br> development solutions <br></br>
        played a critical role.
      </h6>
    </div>
    <div>
      <h6 className="Img7content">
        What is salesforce<br></br> Financial Services<br></br> cloud?
      </h6>
      <h6 className="Image7content">
        Salesforce Financial Services Cloud is a<br></br> CRM specielly designed for financial<br></br> service companies.
      </h6>
    </div>
    </div>
      )
}

      export default Ourblogs;