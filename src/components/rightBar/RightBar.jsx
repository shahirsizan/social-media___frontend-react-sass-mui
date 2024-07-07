import "./rightBar.scss";

const RightBar = () => {
	return (
		<div className="rightBar">
			<div className="container">
				<div className="item">
					<span>Suggestions For You</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://cdn-5.motorsport.com/images/mgl/YMdm7R32/s8/charles-leclerc-ferrari.jpg"
								alt=""
							/>
							<span>Charles Leclerc</span>
						</div>
						<div className="buttons">
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://cdn-6.motorsport.com/images/mgl/YEQ1pGwY/s8/lewis-hamilton-mercedes.jpg"
								alt=""
							/>
							<span>Lewis Hamilton</span>
						</div>
						<div className="buttons">
							<button>follow</button>
							<button>dismiss</button>
						</div>
					</div>
				</div>

				<div className="item">
					<span>Latest Activities</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://cdn-5.motorsport.com/images/mgl/6D1XbeV0/s800/max-verstappen-red-bull-racing.jpg"
								alt=""
							/>
							<p>
								<span>Max Verstappen</span> changed their cover
								picture
							</p>
						</div>
						<span>1 min ago</span>
					</div>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://cdn-1.motorsport.com/images/mgl/0ZRQbbN0/s8/fernando-alonso-aston-martin-r.jpg"
								alt=""
							/>
							<p>
								<span>Fernando Alonso</span> changed their
								profile picture
							</p>
						</div>
						<span>3 min ago</span>
					</div>
				</div>

				<div className="item">
					<span>Online Friends</span>
					<div className="user">
						<div className="userInfo">
							<img
								src="https://cdn-2.motorsport.com/images/mgl/2wBdQNB0/s800/yuki-tsunoda-racing-bulls.jpg"
								alt=""
							/>
							<div className="online" />
							<span>Yuki Tsunoda</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default RightBar;
