import { useContext } from "react";
import "./stories.scss";
import { AuthContext } from "../../context/authContext";

const Stories = () => {
	const { currentUser } = useContext(AuthContext);

	//TEMPORARY
	const stories = [
		{
			id: 1,
			name: "John Doe",
			img: "https://images.pexels.com/photos/18814816/pexels-photo-18814816/free-photo-of-speeding-renault-r25-formula-1-car-on-the-track.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 2,
			name: "John Doe",
			img: "https://images.pexels.com/photos/10807493/pexels-photo-10807493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 3,
			name: "John Doe",
			img: "https://images.pexels.com/photos/14578740/pexels-photo-14578740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
		{
			id: 4,
			name: "John Doe",
			img: "https://images.pexels.com/photos/14681398/pexels-photo-14681398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		},
	];

	return (
		<div className="stories">
			<div className="story">
				<img src={currentUser.profilePic} alt="" />
				<span>{currentUser.name}</span>
				<button>+</button>
			</div>
			{/* For the user to upload stories */}

			{stories.map((story) => (
				<div className="story" key={story.id}>
					<img src={story.img} alt="" />
					<span>{story.name}</span>
				</div>
			))}
		</div>
	);
};

export default Stories;
