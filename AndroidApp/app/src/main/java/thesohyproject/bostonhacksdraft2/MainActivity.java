package thesohyproject.bostonhacksdraft2;

import android.content.Intent;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RadioButton;

import static android.provider.AlarmClock.EXTRA_MESSAGE;

public class MainActivity extends AppCompatActivity {

    LogIn login = new LogIn();
    EditText editText1;
    EditText editText2;




    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);
    }

    public void toNextPage(View view) {
        RadioButton radioButton1 = (RadioButton) findViewById(R.id.radioButtonPatient);
        RadioButton radioButton2 = (RadioButton) findViewById(R.id.radioButtonDoctor);
        editText1 = (EditText) findViewById(R.id.username);
        editText2 = (EditText) findViewById(R.id.password);



        if (login.loginUser(editText1.getText().toString(), editText2.getText().toString())) {
            if (radioButton1.isChecked()) {
                Intent intent = new Intent(this, Main2Activity.class);
                startActivity(intent);
            } else if (radioButton2.isChecked()) {
                Intent intent = new Intent(this, Main3Activity_Doctor.class);
                startActivity(intent);
            }
        }

    }
}
