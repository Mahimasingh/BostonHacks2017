package thesohyproject.bostonhacksdraft2;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.BaseAdapter;
import android.widget.TextView;

import java.util.ArrayList;

/**
 * Created by sohyl on 10/28/17.
 */

public class MyBaseAdapter extends BaseAdapter {
    private Main2Activity context;
    private int layoutID;
    private ArrayList<String> arrData;

    public MyBaseAdapter(Main2Activity context, int layoutID, ArrayList<String> ArrData) {
        this.context = context;
        this.layoutID = layoutID;
        arrData = ArrData;
    }

    @Override
    public int getCount() {
        return arrData.size();
    }

    @Override
    public Object getItem(int i) {
        return arrData.get(i);
    }

    @Override
    public long getItemId(int i) {
        return 0;
    }

    @Override
    public View getView(int i, View view, ViewGroup viewGroup) {
        LayoutInflater layoutInflater = (LayoutInflater) context.getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        TextView textView = (TextView) layoutInflater.inflate(layoutID, null);
        textView.setText(arrData.get(i));
        return null;
    }
}
