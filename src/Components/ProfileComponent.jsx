import React from 'react';
import { NavbarBrand, List, Button } from 'reactstrap';

const ProfileComponent = () => {
    return (
        <div className='profiles'>
            <NavbarBrand className='prof-head'>
                <img src=".\Resources\Imgs\logo.png" alt="No img" srcset="" className='img-fluid net-logo' width={100} />
            </NavbarBrand>
            <div className="container profileContainer" >
                <span>Who's watching?</span>
                <List type="unstyled" className="profileList list-group list-group-horizontal">
                    <li className="profile"><Button color="profileButton"> <img className="profileImg" src=".\Resources\Imgs\Profile logo\blue.png" alt="" /><span className="profilebutton">Asha</span></Button></li>
                    <li className="profile"><Button color="profileButton"> <img className="profileImg" src=".\Resources\Imgs\Profile logo\green.png" alt="" /><span className="profilebutton">Gaurav</span></Button></li>
                    <li className="profile"><Button color="profileButton"> <img className="profileImg" src=".\Resources\Imgs\Profile logo\yellow.png" alt="" /><span className="profilebutton">Neha</span></Button></li>
                    <li className="profile"><Button color="profileButton"> <img className="profileImg" src=".\Resources\Imgs\Profile logo\red.png" alt="" /><span className="profilebutton">Ravi</span></Button></li>
                    <li className="profile"><Button color="profileButton"> <img className="profileImg" src=".\Resources\Imgs\Profile logo\grey.png" alt="" /><span className="profilebutton">Deepak</span></Button></li>
                </List>
                <section>
                    <button className="managePropBtn">Manage Profiles</button>
                </section>
            </div>
        </div>
    )
}

export default ProfileComponent;


