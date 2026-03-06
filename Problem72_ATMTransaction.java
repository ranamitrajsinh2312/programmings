import java.util.*;

public class Problem72_ATMTransaction {
    public static void main(String[] args) {

        Scanner sc = new Scanner(System.in);

        int balance = 50000;
        int withdraw, deposit;

        int PIN = 1234;                 // correct PIN
        int attempts = 3;               // max attempts

        int dailyLimit = 20000;         // daily withdrawal limit
        int todayWithdrawn = 0;

        int transactionCount = 0;
        String[] miniStatement = new String[10];  // last 10 transactions

        // ---------------- PIN VERIFICATION -----------------
        while (attempts > 0) {
            System.out.print("Enter PIN: ");
            int enteredPIN = sc.nextInt();

            if (enteredPIN == PIN) {
                System.out.println("Login Successful!\n");
                break;
            } else {
                attempts--;
                System.out.println("Wrong PIN! Attempts left: " + attempts);
            }
            if (attempts == 0) {
                System.out.println("Account Locked. Visit Bank.");
                return;
            }
        }

        // ------------------ MAIN MENU ----------------------
        while (true) {
            System.out.println("\n------ ATM MENU ------");
            System.out.println("1. Check Balance");
            System.out.println("2. Withdraw Amount");
            System.out.println("3. Deposit Amount");
            System.out.println("4. Mini Statement (Last 10)");
            System.out.println("5. Exit");
            System.out.print("Enter your choice: ");
            int choice = sc.nextInt();

            switch (choice) {

                case 1:
                    System.out.println("Your balance is: ₹" + balance);
                    break;

                case 2:
                    System.out.print("Enter amount to withdraw: ");
                    withdraw = sc.nextInt();

                    if (withdraw <= 0) {
                        System.out.println("Invalid Amount.");
                    }
                    else if (withdraw > balance) {
                        System.out.println("Insufficient Balance.");
                    }
                    else if (todayWithdrawn + withdraw > dailyLimit) {
                        System.out.println("Daily Limit Exceeded! Limit: ₹" + dailyLimit);
                    }
                    else {
                        balance -= withdraw;
                        todayWithdrawn += withdraw;

                        // store in mini statement
                        miniStatement[transactionCount % 10] = "Withdraw: ₹" + withdraw;
                        transactionCount++;

                        System.out.println("Withdraw Successful!");
                    }
                    break;

                case 3:
                    System.out.print("Enter amount to deposit: ");
                    deposit = sc.nextInt();

                    if (deposit <= 0) {
                        System.out.println("Invalid deposit amount.");
                    } else {
                        balance += deposit;

                        // store in mini statement
                        miniStatement[transactionCount % 10] = "Deposit: ₹" + deposit;
                        transactionCount++;

                        System.out.println("Deposit Successful!");
                    }
                    break;

                case 4:
                    System.out.println("\n----- MINI STATEMENT -----");
                    if (transactionCount == 0) {
                        System.out.println("No Transactions Yet.");
                    } else {
                        int count = Math.min(transactionCount, 10);
                        for (int i = transactionCount - count; i < transactionCount; i++) {
                            System.out.println(miniStatement[i % 10]);
                        }
                    }
                    break;

                case 5:
                    System.out.println("Thank you for using our ATM!");
                    return;

                default:
                    System.out.println("Invalid choice!");
            }
        }
    }
}
