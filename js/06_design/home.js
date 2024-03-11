// ------------- CREATE HOME DESIGN --------------------------

const loadHome=()=>{
    const textHome = document.getElementById('show-info');
    textHome.innerHTML=`
        <div id="carouselExampleCaptions" class="carousel slide">

            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>

            <div class="carousel-inner">

                <div class="carousel-item active">
                    <img src="img/software Engineering.jpg" class="d-block w-100 img-fluid" alt="software image">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Software Engineering</h5>
                        <p>"Where Wisdom Shapes Futures"</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="img/electronics engineering.jpg" class="d-block w-100 img-fluid" alt="electronics image">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Electronics Engineering</h5>
                        <p>"Where Wisdom Shapes Futures"</p>
                    </div>
                </div>

                <div class="carousel-item">
                    <img src="img/electrical Engineering.jpg" class="d-block w-100 img-fluid" alt="electrical image">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>Electrical Engineering</h5>
                        <p>"Where Wisdom Shapes Futures"</p>
                    </div>
                </div>

            </div>

            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>

            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>

        </div>
    `;
}
