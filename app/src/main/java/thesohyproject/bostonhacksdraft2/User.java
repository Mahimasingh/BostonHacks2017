package thesohyproject.bostonhacksdraft2;

/**
 * Created by sohyl on 10/29/17.
 */

public class User {

    public String Username;
    public String Password;
    public int Age;
    public String Gender;
    public String Hash;

    public User(String usernameinput, String passwordinput, int ageinput, String genderinput, String hashinput)
    {
        Username = usernameinput;
        Password = passwordinput;
        Age = ageinput;
        Gender = genderinput;
        Hash = hashinput;
    }
}