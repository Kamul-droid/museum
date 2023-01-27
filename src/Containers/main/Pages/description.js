


const Description = (props) => {
  const {data, listId} = props;
    
    const object = data[parseInt(listId)];
   
    console.log(props.data, props.listId ,'arts');
    console.log(data, listId ,'arts2');
    console.log(data[parseInt(listId)]  ,'arts3');
   

 return(
    <>
        
           

        <section className="py-5">
            <div className="container px-4 px-lg-5 my-5">
                <div className="row gx-4 gx-lg-5 align-items-center">
                {
                    
                    object.primaryImage !== ''  && <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src={object.primaryImage} alt="..." /></div>

                }
                {

                    object.primaryImage ==='' && <div className="col-md-6"><img className="card-img-top mb-5 mb-md-0" src="https://dummyimage.com/450x300/dee2e6/6c757d.jpg" alt="..." /></div>
                }
                    <div className="col-md-6">
                        <div className="small mb-1">{object.creditLine}</div>
                        <h1 className="display-5 fw-bolder">{object.title}</h1>
                        <div className="fs-5 mb-5">
                            <span className="text">{object.dimensions}</span>
                            
                        </div>
                        <p className="lead"> Culture : {object.culture}</p>
                        <p className="lead">Region : {object.region}</p>
                        <p className="lead">City : {object.city}</p>
                    </div>
                </div>
            </div>
        </section>
        <section className="py-5 bg-light">
            <div className="container px-4 px-lg-5 mt-5">
                <h2 className="fw-bolder mb-4">Additional Images</h2>
                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={object.additionalImages[0]} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                    <h5 className="fw-bolder"> Date: {object.objectDate}</h5>
                                 
                                </div>
                            </div>
                           
                        </div>
                    </div>
                    
                    
                    <div className="col mb-5">
                        <div className="card h-100">
                            <img className="card-img-top" src={object.additionalImages[0]} alt="..." />
                            <div className="card-body p-4">
                                <div className="text-center">
                                {
                                    object.tags.length !== 0 &&<a className="navbar-brand"  href={object.tags[0].Wikidata_URL} target="_blank" rel="noreferrer" > Wikipedia </a>

                                }
                                
                                    <h5 className="fw-bolder">Popular Item</h5>
                                    <div className="d-flex justify-content-center small text-warning mb-2">
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                        <div className="bi-star-fill"></div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
    
        
    </>

 )
}

export default Description