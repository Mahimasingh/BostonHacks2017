package thesohyproject.bostonhacksdraft2;

/**
 * Created by sohyl on 10/29/17.
 */

public class LogIn {

    private static String [] Usernames = {"Joe", "Susie", "Bill"};
    private static String [] Passwords = {"helpme", "dogsfood", "blowupexplode"};
    private static int [] Ages = {45, 53, 78};
    private static String [] Genders = {"male", "female", "male"};
    private static String [] Hashs = {null, null, null};

    public static User [] Users = {createUser(0), createUser(1), createUser(2)};

    public LogIn() {

    }

    public static User createUser(int i)
    {
        User u1 = new User(Usernames[i], Passwords[i], Ages[i], Genders[i], Hashs[i]);
        return u1;
    }

    public static boolean loginUser(String Username, String password)
    {

        for (int i = 0; i < Usernames[i].length(); i ++) {
            if(Usernames[i].equals(Username) && Passwords[i].equals(password)) {
                return true;
            }
        }
        return false;



    }


}