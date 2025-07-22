public class ArithmeticOperations {
    public static void main(String[] args) {
        if (args.length < 2) {
            System.out.println("Please provide two integers as arguments.");
            return;
        }

        int a = Integer.parseInt(args[0]);
        int b = Integer.parseInt(args[1]);

        System.out.println("First number: " + a);
        System.out.println("Second number: " + b);

        System.out.println("Addition: " + (a + b));
        System.out.println("Subtraction: " + (a - b));
        System.out.println("Multiplication: " + (a * b));

        if (b != 0) {
            System.out.println("Division: " + (a / b));
            System.out.println("Modulus: " + (a % b));
        } else {
            System.out.println("Division and modulus not possible (division by zero)");
        }
    }
}
