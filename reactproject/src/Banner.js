
export default function Banner() {
  return (
    // <div className="col-10"><img src="https://darshan.ac.in/U01/Slider/Slide_4.jpg?V=2.1.4" id="bac-image" /></div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src="https://darshan.ac.in/U01/Slider/Slide_4.jpg?V=2.1.4" class="d-block w-100" alt="..."/>
        </div>
        <div class="carousel-item">
          <img src="https://darshan.ac.in/U01/Slider/Slide_3.jpg?V=2.1.4" class="d-block w-100" alt="..."/>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  )
}