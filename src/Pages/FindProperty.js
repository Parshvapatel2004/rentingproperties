import React from "react";
import Header from "../Common/Header";
import Banner from "../Common/Banner";
import Footer from "../Common/Footer";

const FindProperty = () => {
  return (
    <div>
      <Header />
      <Banner />
      <FindPropertyMain/>
      <Footer />
    </div>
  );
};
function FindPropertyMain() {
  return (
    <>
    <section class="form-16" id="booking">
        
          <div class="form-16-mian py-5">
            <div class="container py-md-3">
                <div class="forms-16-top">
                     <div class="form-right-inf"> 
                         <div class="form-inner-cont">
                           <h3>Find your next perfect place</h3> 
                             <form action="https://p.w3layouts.com/demosWTR/Freedom/12-02-2020/estate_property-freedom-demo_Free/200993729/web/search-results" method="post" class="signin-form">	
                                 <div  class="row book-form">
                                     <div  class="form-input col-lg-8 col-md-6">
                                         <input type="text" name="" placeholder="Enter Your Keywords..." required />
                                     </div>
                                     <div  class="form-input col-lg-4 col-md-6 mt-md-0 mt-3">
                                        <select class="selectpicker">
                                            <option>Select Location</option>
                                            <option>Sydney</option>
                                            <option>Melbourne</option>
                                          </select>
                                          
                                    </div>
                                    <div  class="form-input col-md-4 mt-3">
                                        <input type="text" name="" placeholder="Max Area (sqft)" required />
                                    </div>
                                    <div  class="form-input col-md-4 mt-3">
                                        <select class="selectpicker">
                                            <option>Property Status</option>
                                            <option>Lorem Ipsum</option>
                                            <option>Dolor Sit</option>
                                          </select>
                                          
                                    </div>
                                     <div  class="form-input col-md-4  mt-3">
                                        <select class="selectpicker">
                                            <option>Property type</option>
                                            <option>Doble Bedroom</option>
                                            <option>Single Bedroom</option>
                                          </select>
                                          
                                     </div>
                                     <div  class="form-input col-md-4 mt-3">
                                        <select class="selectpicker">
                                            <option>Select Categories</option>
                                            <option> Categories-1</option>
                                            <option> Categories-2</option>
                                          </select>
                                          
                                     </div>
                                     <div  class="form-input col-md-4  mt-3">
                                        <input type="text" name="" placeholder="Max Price ($)" required />
                                    </div> 
                                    <div  class="bottom-btn col-md-4  mt-3">
                                    <button class="btn">Search</button>
                                    </div>
                                 </div>
                                
                                
                                 
                             </form>
                         </div>
                     </div>
                 </div>
             </div>
             </div>
         </section>
    </>
  );
}

export default FindProperty;
