import React from "react";
import O2 from "../images/O2.png"

function Header(){

    return(
        <div className="container position-relative Header">
            <div className="row align-items-end headerRow">
                <div className="col-sm-6">
                    <div className="row">
                        <div className="col-sm-3">
                            <img  className="rounded float-start" src={O2} alt="O2-Air Box" />

                        </div>
                        <div className="col-sm-9 justify-content-start siteTitle">

                            <h3>AIRBOX</h3>
                            <p>Hosting Provider</p>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <ul className="list-group list-group-horizontal justify-content-evenly navLinks">
                        <li>
                            <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt2224026%2F&psig=AOvVaw3KdTqlZlP8FmdxKnpJVk9o&ust=1707248901064000&source=images&cd=vfe&opi=89978449&ved=0CAYQn5wMahcKEwiw2Nfz-5SEAxUAAAAAHQAAAAAQBA">Home</a>
                        </li>
                        <li>
                            <a href="https://www.bluehost.com/">Web Hosting</a>
                        </li>
                        <li>
                            <a href="https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwi2oYWe_JSEAxWdS38AHTVeBCQYABAAGgJvYQ&ase=2&gclid=EAIaIQobChMItqGFnvyUhAMVnUt_AB01XgQkEAAYAiAAEgI3ovD_BwE&ohost=www.google.com&cid=CAASJORo9xV-Xxa5_HkIyjBNxjxW8e70pEx9CBPofDqBb5g6ioDFVQ&sig=AOD64_0YUcVE94vxmmtraBASYIPUCMTjGA&q&nis=4&adurl&ved=2ahUKEwju_Pid_JSEAxValiYFHZAjC24Q0Qx6BAgBEAE">Reseller Hosting</a>
                        </li>
                        <li>
                            <a href="https://www.dictionary.com/browse/services">Services</a>
                        </li>
                        <li>
                            <a href="https://www.blogger.com/">Blog</a>
                        </li>
                        <li>
                            <a href="https://www.1800contacts.com/">Contacts</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Header;