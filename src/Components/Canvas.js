import React, { useRef, useEffect } from "react";

const width = document.documentElement.clientWidth;

const Canvas = (props) => {
	const { draw, ...rest } = props;

	const canvasRef = useRef(null);

	useEffect(() => {
		const canvas = canvasRef.current;
		const context = canvas.getContext("2d");
		let frameCount = 0;
		let animationFrameId;

		const render = () => {
			frameCount++;
			draw(context, frameCount);
			animationFrameId = window.requestAnimationFrame(render);
		};
		render();

		return () => {
			window.cancelAnimationFrame(animationFrameId);
		};
	}, [draw]);

	return <canvas width={width} height="2200" ref={canvasRef} {...props} />;
};

export default Canvas;
