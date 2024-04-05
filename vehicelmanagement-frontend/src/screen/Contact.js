import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "../screen/contact.css";
import person1 from "../images/person1.jpg";
import person2 from "../images/person2.jpg";
import person3 from "../images/person3.jpg";

function Contact()
{
return(
<>

<main>
<br></br> <br></br>
  <section className="team">
    <div className="container">
      <div className="row">
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src={person1} alt="" />
            <h4>Kiran Patil</h4>
            <span>Chief Executive Officer</span>
            <p>
              Magni qui quod omnis unde et eos fuga et exercitationem. Odio
              veritatis perspiciatis quaerat qui aut aut aut
            </p>
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src={person2} alt="" />
            <h4>Mohit Mukati</h4>
            <span>Product Manager</span>
            <p>
              Repellat fugiat adipisci nemo illum nesciunt voluptas repellendus.
              In architecto rerum rerum temporibus
            </p>
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src={person3} alt="" />
            <h4>Krishnakant Parmar</h4>
            <span>CTO</span>
            <p>
              Voluptas necessitatibus occaecati quia. Earum totam consequuntur
              qui porro et laborum toro des clara
            </p>
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>



          </div>
        </div>

        <div className="col-lg-4 col-md-6 d-flex align-items-stretch">
          <div className="member">
            <img src={person1} alt="" />
            <h4>Mayank Gupta</h4>
            <span>CTO</span>
            <p>
              Voluptas necessitatibus occaecati quia. Earum totam consequuntur
              qui porro et laborum toro des clara
            </p>
            <div className="social">
              <a href="#">
                <i className="bi bi-twitter" />
              </a>
              <a href="#">
                <i className="bi bi-facebook" />
              </a>
              <a href="#">
                <i className="bi bi-instagram" />
              </a>
              <a href="#">
                <i className="bi bi-linkedin" />
              </a>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
  <br></br> <br></br> <br></br> <br></br> <br></br> <br></br>
</main>



</>)

}

export default Contact;