import React from 'react'
// import custom css
import './slider.css';

// import splide
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';


function Slider() {
  const options = {
    type: 'loop',
    gap: '1rem',
    autoplay: true,
    width: "1000px"
  };

  return (
    <div className="wrapper py-5">
      <div className="container">
        <div className="row">
            <div className="col-12 col-lg-6 col-xl-6 p-4 text-center">
                <Splide
                    options={ options }
                    aria-labelledby="autoplay-example-heading"
                    hasTrack={ false }
                    className='text-center mx-auto h-100'
                >
                <div style={ { position: 'relative' } }>
                    <SplideTrack>
                        <SplideSlide>
                            <img src="https://picsum.photos/1000/500" alt="" className='img-fluid' />
                        </SplideSlide>
                        <SplideSlide>
                           <img src="https://picsum.photos/1000/500" alt="" className='img-fluid' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://picsum.photos/1000/500" alt="" className='img-fluid' />
                        </SplideSlide>
                        <SplideSlide>
                            <img src="https://picsum.photos/1000/500" alt="" className='img-fluid' />
                        </SplideSlide>
                    </SplideTrack>
                </div>

                <div className="splide__progress">
                    <div className="splide__progress__bar" />
                </div>
                </Splide>
            </div>
            <div className="col-12 col-lg-6 col-xl-6 p-4 text-center">
                <img src="https://picsum.photos/1000/500" alt="" className='img-fluid h-100' />
            </div>
        </div>
      </div>
    </div>
  );
}

export default Slider;

