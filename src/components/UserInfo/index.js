// Write your JS code here
import './index.css'

const UserInfo = props => {
  const {item} = props
  return (
    <div className="user">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png"
        alt="profile"
        className="img1"
      />
      <h1 className="heading">Wade Warren</h1>
      <p className="para">Software Developer At UK</p>
    </div>
  )
}
export default UserInfo
