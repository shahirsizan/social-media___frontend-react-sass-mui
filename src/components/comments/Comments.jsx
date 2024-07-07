import { useContext } from "react";
import "./comments.scss";
import { AuthContext } from "../../context/authContext";

const Comments = () => {
	const { currentUser } = useContext(AuthContext);
	//Temporary
	const comments = [
		{
			id: 1,
			desc: "Hi everyone!",
			name: "Toto",
			userId: 1,
			profilePicture:
				"https://encrypted-tbn0.gstatic.com/licensed-image?q=tbn:ANd9GcTdwrLdkyIUwhM5xuIjPiDbzMRBZQes4rVfVpfki7_EsJpUkQJ2pyR-ve4FD3pgksPxZj2KQXtTcFF2f68",
		},
		{
			id: 2,
			desc: "Shut up",
			name: "Gustav",
			userId: 2,
			profilePicture:
				"https://cdn.britannica.com/86/183386-050-22B602E8/Joaquin-Guzman-capture-2014.jpg",
		},
	];
	return (
		<div className="comments">
			<div className="write">
				<img src={currentUser.profilePic} alt="" />
				<input type="text" placeholder="write a comment" />
				<button>Send</button>
			</div>

			{comments.map((comment) => (
				<div className="comment">
					<img src={comment.profilePicture} alt="" />
					<div className="info">
						<span>{comment.name}</span>
						<p>{comment.desc}</p>
					</div>
					<span className="date">1 hour ago</span>
				</div>
			))}
		</div>
	);
};

export default Comments;
