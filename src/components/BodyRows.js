import React from "react";

function BodyRows(){

    return(
        <div className="row bodyColor">
            <CustomerSupport/>
        </div>
    )
}

function CustomerSupport(){

    return(
        <div className="container">
            <div className="row ">
                <div className="col-sm-12 d-flex justify-content-center">
                    <h2 className="customSupport">24/7 Real Person</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h1 className="support">Customer Support</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <h2 className="customSupport">For all our clients</h2>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Unde quam, a, perferendis illum alias velit sint nobis itaque mollitia et culpa, ea ut. Sunt, eaque possimus? Nostrum commodi nihil non.
                    Incidunt ducimus fugiat veritatis laudantium culpa nemo quas reprehenderit. Incidunt ducimus ullam nobis dolorem exercitationem, ab, enim tempore, saepe atque amet sit nam aspernatur officia impedit suscipit provident molestiae. Qui?</p>
                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <button>Try Now</button>
                </div>
            </div>
        </div>
    )
}

export default BodyRows;