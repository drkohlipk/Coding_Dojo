class bitFun {
	public static String printBinary(float num) {
		if (num >= 1 || num <= 0) {
			return "ERROR";
		}

		StringBuilder binary = new StringBuilder();
		binary.append(".");

		while (num > 0) {
			if (binary.length() >= 32) {
				return "ERROR";
			}

			float r = num * 2;

			if (r >= 1) {
				binary.append(1);
				num = r - 1;
			} else {
				binary.append(0);
				num = r;
			}
		}
		return binary.toString();
	}

	public static void main(String[] args) {
		float n = (float).751;

		System.out.println(printBinary(n));

		System.out.println(Long.toBinaryString(Double.doubleToRawLongBits(n)));
		// System.out.println(Integer.toBinaryString(n));
	}
}
