window.fn = module.exports = {
	fn: function () {
		fn();
	}
};

function fn() {
	return this;
}

export function efn() {
	return this
}

export async function eafn() {
	return this;
}

export const ecfn = () => {}

export const ecafn = async () => {}
