import Post from "../post/Post";
import "./posts.scss";

const Posts = () => {
	//TEMPORARY
	const posts = [
		{
			id: 1,
			name: "Shahir Adil Sizan",
			userId: 1,
			profilePic:
				"https://media.licdn.com/dms/image/D4E03AQGy5Hh-TEty5w/profile-displayphoto-shrink_200_200/0/1695308514513?e=2147483647&v=beta&t=Sw3EMxIzk0c0U3SZxsJD1vdxd3Mjljebq-DTfoCrr_w",
			desc: "James Vowles has admitted the time is approaching for Williams to make a decision over their future driver line-up, hinting that there could even be a change during the 2024 season. While Alex Albon recently penned a new multi-year deal to stay at Grove, the identity of his team mate for 2025 onwards has yet to be confirmed, with Logan Sargeant coming under increasing pressure during his sophomore campaign.",
			img: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/f_auto/q_auto/fom-website/2024/Britain/vowles-sargeant-silverstone-2024-comp",
		},
		{
			id: 2,
			name: "Shahir Abid Zisan",
			userId: 2,
			profilePic:
				"https://w0.peakpx.com/wallpaper/563/148/HD-wallpaper-charles-leclerc-minimal-scuderia-ferrari-formula-1-leclerc-ferrari-fan-art-f1-red-background-monegasque-racing-drivers-charles-leclerc-minimalism-ferrari.jpg",
			desc: "Charles Leclerc cited a general lack of speed as causing his surprise early exit from qualifying at the British Grand Prix, with the Monegasque admitting that Ferrari need to react quickly in order to bounce back from the “difficult time” they are currently experiencing.",
			img: "https://media.formula1.com/image/upload/f_auto,c_limit,w_960,q_auto/t_16by9North/f_auto/q_auto/fom-website/2024/Britain/GettyImages-2160889193",
		},
	];

	return (
		<div className="posts">
			{posts.map((post) => (
				<Post post={post} key={post.id} />
			))}
		</div>
	);
};

export default Posts;
