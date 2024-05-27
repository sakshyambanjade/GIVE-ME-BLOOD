import React from "react";
import {
  MDBCarousel,
  MDBCarouselItem,
  MDBCol,
  MDBRow,
} from "mdb-react-ui-kit";
import vflex from '../Components/vflex'
export default function App() {
  return (
    <MDBRow className="py-5 d-flex justify-content-center">
      <MDBCol md="9" className="text-center">
        <MDBCarousel showControls dark>
        <h3 className="mb-4">Testimonials</h3>
        <vflex/>
          <MDBCarouselItem className="active">
            <p className="lead font-italic mx-4 mx-md-5">
              "Thankyou Give Me Blood was able to get blood on time"
            </p>
            <div className="mt-5 mb-5">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(2).webp"
                className="rounded-circle img-fluid shadow-1-strong"
                alt="sample image"
                width="100"
                height="100"
              />
            </div>
            <p className="text-muted mb-0">- Anna Morian</p>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <p className="lead font-italic mx-4 mx-md-5">
              "Thankyou Give Me Blood was able to get blood on time"
            </p>
            <div className="mt-5 mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(31).webp"
                className="rounded-circle img-fluid shadow-1-strong"
                alt="sample image"
                width="100"
                height="100"
              />
            </div>
            <p className="text-muted mb-0">- Teresa May</p>
          </MDBCarouselItem>
          <MDBCarouselItem>
            <p className="lead font-italic mx-4 mx-md-5">
              "Thankyou Give Me Blood was able to get blood on time"
            </p>
            <div className="mt-5 mb-4">
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                className="rounded-circle img-fluid shadow-1-strong"
                alt="sample image"
                width="100"
                height="100"
              />
            </div>
            <p className="text-muted mb-0">- Kate Allise</p>
          </MDBCarouselItem>
        </MDBCarousel>
      </MDBCol>
    </MDBRow>
  );
}
