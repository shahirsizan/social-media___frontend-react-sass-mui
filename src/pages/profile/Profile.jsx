import "./profile.scss";
import FacebookTwoToneIcon from "@mui/icons-material/FacebookTwoTone";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import TwitterIcon from "@mui/icons-material/Twitter";
import PlaceIcon from "@mui/icons-material/Place";
import LanguageIcon from "@mui/icons-material/Language";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Posts from "../../components/posts/Posts";

const Profile = () => {
	return (
		<div className="profile">
			<div className="images">
				<img
					src="https://cdn-4.motorsport.com/images/amp/68yZd1Q0/s1000/carlos-sainz-ferrari-sf-24.jpg"
					alt=""
					className="cover"
				/>
				<img
					src="https://media.licdn.com/dms/image/D4E03AQGy5Hh-TEty5w/profile-displayphoto-shrink_200_200/0/1695308514513?e=2147483647&v=beta&t=Sw3EMxIzk0c0U3SZxsJD1vdxd3Mjljebq-DTfoCrr_w"
					alt=""
					className="profilePic"
				/>
			</div>

			<div className="profileContainer">
				<div className="uInfo">
					<div className="left">
						<a href="http://facebook.com">
							<FacebookTwoToneIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<TwitterIcon fontSize="large" />
						</a>
						<a href="http://facebook.com">
							<LinkedInIcon fontSize="large" />
						</a>
					</div>

					<div className="center">
						<span>Shahir Adil Sizan</span>
						<div className="info">
							<div className="item">
								<PlaceIcon />
								<span>Bangladesh</span>
							</div>
							<div className="item">
								<LanguageIcon />
								<span>
									https://www.linkedin.com/in/shahir-adil-sizan/
								</span>
							</div>
						</div>
						<button>Follow</button>
					</div>

					<div className="right">
						<EmailOutlinedIcon />
						<MoreVertIcon />
					</div>
				</div>
				<Posts />
			</div>
		</div>
	);
};

export default Profile;
