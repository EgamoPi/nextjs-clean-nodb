export const pageAnimation = {
	hidden: {
		opacity: 0,
		y: 300,
	},
	show: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.45,
			when: "beforeChildren",
			staggerChildren: 0.5,
		},
	},
	exit: {
		opacity: 0,
		transition: {
			duration: 0.43,
		},
	},
};

export const nullAnim = {
	hidden: { opacity: 1 },
	show: {
		opacity: 1,
		transition: {
			duration: 0.45,
			when: "beforeChildren",
			staggerChildren: 0.5,
		},
	},
};

export const titleAnimation = {
	hidden: { y: -200, opacity: 0 },
	show: {
		y: 0,
		opacity: 1,
		transition: { duration: 0.75, ease: "easeOut" },
	},
};

export const fade = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			ease: "easeOut",
			duration: 1,
		},
	},
};

export const imageAnimation = {
	hidden: {
		opacity: 0,
		scale: 0.4,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			ease: "easeOut",
			duration: 0.5,
		},
	},
};

export const revealFromLeft = {
	hidden: {
		opacity: 0,
		x: -100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const revealFromRight = {
	hidden: {
		opacity: 0,
		x: 100,
	},
	show: {
		opacity: 1,
		x: 0,
		transition: {
			duration: 0.5,
		},
	},
};

export const widthAnimation = {
	hidden: {
		width: "0%",
	},
	show: {
		width: "100%",
		transition: {
			duration: 0.7,
		},
	},
};

export const zoomInFadeIn = {
	hidden: {
		opacity: 0,
		scale: 0,
	},
	show: {
		opacity: 1,
		scale: 1,
		transition: {
			duration: 0.7,
			ease: "easeOut",
		},
	},
};

/* Menu Animations */

export const displayMenu = {
	hidden: {
		opacity: 0,
		//y: '-100%',
		x: "100%",
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
	show: {
		opacity: 1,
		//y: '0%',
		x: "0%",
		transition: {
			duration: 1,
			ease: "easeOut",
			when: "beforeChildren",
			staggerChildren: 1,
		},
	},
	exit: {
		opacity: 1,
		y: "-100%",
		x: "0",
		transition: {
			duration: 1,
			ease: "easeOut",
		},
	},
};

export const fadeMenu = {
	hidden: {
		opacity: 0,
		scale: 0.5,
		skewX: "70deg",
		transition: {
			ease: "easeOut",
			duration: 1.3,
		},
	},
	show: {
		opacity: 1,
		scale: 1,
		skewX: "0deg",
		transition: {
			ease: "easeInOut",
			duration: 0.5,
			when: "beforeChildren",
			staggerChildren: 1,
		},
	},
};

export const smCircTobgRect = {
	hidden: {
		opacity: 0,
		scale: 0.4,
		borderRadius: "50%",
		transition: {
			ease: "easeOut",
			duration: 1.3,
		},
	},
	show: {
		opacity: 1,
		scale: 1,
		borderRadius: "10%",
		transition: {
			ease: "easeInOut",
			duration: 2,
		},
	},
};
