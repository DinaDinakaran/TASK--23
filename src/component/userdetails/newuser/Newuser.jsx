import React from 'react'
import "./newuser.css"
//icons
import VisibilityIcon from '@mui/icons-material/Visibility';
const userImg = "https://1.bp.blogspot.com/-6mNE-DZciSQ/X3f4kEzE-6I/AAAAAAAAAsY/O69-37ilztwKLL6Yymi0FtUDtxrHUb94ACLcBGAsYHQ/s16000-rw/beautiful%2Bgirls%2Bimages%2B%25283%2529.jpg"





export default function Newuser() {
  return (
    <div className='newuser'>
      <span className="newusertile">New User</span>
      <div className="newuserpadding">
      <div className="userwrrap">
        <div className="userDetails">
          <img src={userImg} alt="" className="userimg" />
          <div className="usertextdetails">
            <div className="username">Amina Aafrin</div>
            <div className="userjob">Software Engineer</div>
          </div>
          <button className="uservisbility">
            <VisibilityIcon className='icon' />
            <div className="diplay">Display</div>
          </button>
        </div>
      </div>
      <div className="userwrrap">
        <div className="userDetails">
          <img src={userImg} alt="" className="userimg" />
          <div className="usertextdetails">
            <div className="username">Kavya</div>
            <div className="userjob">Software Engineer</div>
          </div>
          <button className="uservisbility">
            <VisibilityIcon className='icon' />
            <div className="diplay">Display</div>
          </button>
        </div>
      </div>
      <div className="userwrrap">
        <div className="userDetails">
          <img src={userImg} alt="" className="userimg" />
          <div className="usertextdetails">
            <div className="username">Dhivya</div>
            <div className="userjob">Software Engineer</div>
          </div>
          <button className="uservisbility">
            <VisibilityIcon className='icon' />
            <div className="diplay">Display</div>
          </button>
        </div>
      </div>
      <div className="userwrrap">
        <div className="userDetails">
          <img src={userImg} alt="" className="userimg" />
          <div className="usertextdetails">
            <div className="username">Zoya</div>
            <div className="userjob">Software Engineer</div>
          </div>
          <button className="uservisbility">
            <VisibilityIcon className='icon' />
            <div className="diplay">Display</div>
          </button>
        </div>
      </div>
      <div className="userwrrap">
        <div className="userDetails">
          <img src={userImg} alt="" className="userimg" />
          <div className="usertextdetails">
            <div className="username">Theju</div>
            <div className="userjob">Software Engineer</div>
          </div>
          <button className="uservisbility">
            <VisibilityIcon className='icon' />
            <div className="diplay">Display</div>
          </button>
        </div>
      </div>
      </div>
    </div>
  )
}
