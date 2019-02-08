class PhoneNumber {
	constructor(input) {
		this.input = input;
	}
	number() {
		// keep only digits
		let digits = this.input.replace(/\D/g, '');

		switch (digits.length) {
			case 11:
				// an 11 digit number must start with '1' (country code for US)
				if (!digits.startsWith('1'))
					return null;

				// drop the country code before falling through to case 10
				digits = digits.substring(1);

			case 10:
				// invalid if area code starts with 0 or 1
				if ('01'.includes(digits.charAt(0)))
					return null;

				// invalid if exchange code starts with 0 or 1
				if ('01'.includes(digits.charAt(3)))
					return null;

				return digits;

			// only length of 11 or 10 digits is valid
			default:
				return null;
		}
	}
}
module.exports = PhoneNumber;
