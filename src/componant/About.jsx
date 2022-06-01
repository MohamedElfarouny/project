import f from "../images/4m.png";
import c from "../images/car.jpg";
import m from "../images/minibus.jpg";
import B from "../images/bus.png";
import d from "../images/driver.jpg";
import Co from "../images/contact_us.jpg";
const About=()=>{
    return(
       
        <div>
        <div>
            <div className="pa">About Us</div>
            
       </div>

    
    <div className="table"  >
        <div>
            <div>
                <img src={f} className="img" alt={""}/>
            </div>
            <div><div className="pre">
                    <div>4M Company</div> - A travel and delivery company, setting up trips inside and outside cities.
                    Under the slogan of customer comfort and safety during the trip.
                                    
                    <div>Our company</div>  is equipped with the latest types of cars to provide comfort and safety.
                    We also have a selection of drivers at the highest level and years of experience on the roads.
                </div>
            </div>
        </div>
    </div>

    <div className="table A">
        <div className="titles">
            WHAT WE HAVE
        </div>
    </div>

    <div className="table B">
        <div>
            <div>
                <div className="titles"><span>latest Cars</span></div>
                <div className="pre">
                    The company contains the latest types of cars, with or without drivers.
                    The company has all German, American and Chinese cars, as the customer prefers what is suitable for him.
                </div>
            </div>
        </div>
        <div>
            <img src={c} className="img " alt={""}/>
        </div>
    </div>

    <div className="table">
        
        <div>
            <div>
                <div className="titles"><div>Latest Minibuses</div></div>
                <div className="pre">
                    The company has the latest types of minibuses with drivers, which distinguishes the company by providing all means of comfort and safety.
                </div>
            </div>
        </div>
        <div>
            <img src={m} className="img C" alt={""} />
        </div>
    </div>

    <div className="table D">
        <div>
            <div>
                <div className="titles"><div>buses</div></div>
                <div className="pre">
                    The company has a group of the latest buses.
                    All sizes, especially the big bus trips to travel to the favorite countries.
                </div>
            </div>
        </div>
        <div>
            <img src={B} className="img" alt={""}/>
        </div>
    </div>

    <div className="table">
        
        <div>
            <div>
                <div className="titles"><div>Our drivers</div></div>
                <div className="pre">
                    In our company, we enjoy the participation of the best edivte of highly trained drivers.
                    In addition to great experience on all desert and local roads.
                    We also have the appropriate uniforms and that is what distinguishes our drivers.
                    And also the appropriate behavior for all our customers.
                    It is also available for them to travel for days without hesitation to return home and other things that exist in other companies.
                    Under the slogan of customer comfort and safety is the most important.
                </div>
            </div>
        </div>
        <div>
            <img src={d} className="img" alt={""}/>
        </div>
    </div>

    <div className="table E">
        <pre></pre>
    </div>

    <div>
        <div><img src={Co} className="imga F" alt={""} /></div>
    </div>
    <div>
        <div className="table contact">
            <div className="t " >
                <div className="t">Adress :</div>
                <div className="t">Sadat City,Elmenofia,Egypt</div>
            </div>
            <div>
                <div className="t G">E-mail :</div>
                <div className="t G">4MGroup2022@yahoo.com</div>
            </div>
            <div  >
                <div className="t">Phone  :</div>
                <div className="t">084-123-8456</div>
            </div>
        </div>
    </div>
    <footer className="do">
      <div> &copy; 2022 Outdoorsie . All right reseved </div>
    </footer>
    </div>
    )
};
export default About;