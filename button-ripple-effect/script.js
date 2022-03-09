const buttons = document.querySelectorAll(".ripple");

buttons.forEach((button) => {
	button.addEventListener("click", function (e) {
		//get position clicked on x and y axis
		const x = e.clientX;
		const y = e.clientY;

		//get position of button on x and y axis

		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		//Calculate where in the button we are clicking

		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		// create a circle inside the button for the animation when you click

		const circle = document.createElement("span");
		circle.classList.add("circle");
		circle.style.top = yInside + "px";
		circle.style.left = xInside + "px";

		//put the circle element just created inside the button

		this.appendChild(circle);

		//wait  a certain amount time and the remove the circle from the DOM

		setTimeout(() => circle.remove(), 500);
	});
});
