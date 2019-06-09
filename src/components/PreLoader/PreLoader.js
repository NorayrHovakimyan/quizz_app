import React from "react";

const PreLoader = () =>{
  return(
      <div className='container center'>
          <div className="preloader-wrapper big active"
               style={{position:'absolute',top: '50%'}}>
              <div className="spinner-layer spinner-blue-only">
                  <div className="circle-clipper left">
                      <div className="circle"></div>
                  </div>
                  <div className="gap-patch">
                      <div className="circle"></div>
                  </div>
                  <div className="circle-clipper right">
                      <div className="circle"></div>
                  </div>
              </div>
          </div>
      </div>
  )
};





export default PreLoader;