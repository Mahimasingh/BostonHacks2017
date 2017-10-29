package thesohyproject.bostonhacksdraft2;

import android.content.Intent;
import android.os.Bundle;
import android.support.design.widget.FloatingActionButton;
import android.support.design.widget.Snackbar;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.Toolbar;
import android.text.Layout;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.LinearLayout;

public class Main3Activity_Doctor extends AppCompatActivity {
    LinearLayout listContainer;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main3__doctor);
        Toolbar toolbar = (Toolbar) findViewById(R.id.toolbar);
        setSupportActionBar(toolbar);

        listContainer = (LinearLayout) findViewById(R.id.listContainer);
        LayoutInflater layoutInflater = getLayoutInflater();
        for (int i = 0; i < 20; i ++) {
            View v = layoutInflater.inflate(R.layout.inflatedview_doctor, null);
            listContainer.addView(v);

        }

        FloatingActionButton fab = (FloatingActionButton) findViewById(R.id.fab);
        fab.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                Snackbar.make(view, "Replace with your own action", Snackbar.LENGTH_LONG)
                        .setAction("Action", null).show();
            }
        });
    }

    public void onClickInfo(View view) {
        Intent intent = new Intent(this, Main4Activity_patientInfo.class);
        startActivity(intent);
    }

    public void onClickHash(View view) {

    }

}
