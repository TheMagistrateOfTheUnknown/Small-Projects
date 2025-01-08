/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package databases;

import java.sql.SQLException;
import java.util.Random;
import java.util.logging.Logger;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JTextField;

/**
 *
 * @author Bálint
 */
public class top10Frame {   
    public top10Frame(){
      JFrame top = new JFrame("TOP10");
      top.setBounds(10,10,600,600);
      JLabel szoveg = new JLabel("TOP10");
      szoveg.setBounds(250,10,50,30);
      top.add(szoveg);            
        try {            
            HighScores highScores = new HighScores(10);                  
            
            if(highScores.getHighScores().size() < 10){
                for(int i = 0;i<highScores.getHighScores().size();i++)
            {
                JLabel szov = new JLabel((i+1)+". Nev : "+highScores.getHighScores().get(i).getName()+" győzelmek száma : "+highScores.getHighScores().get(i).getScore());
                szov.setBounds(100,50+(i*40),230,30);
                System.out.println(50+i*40);              
                top.add(szov);
            }
            }
            else
            {
                for(int i = 0;i<10;i++)
            {
                JLabel szov = new JLabel((i+1)+". Nev : "+highScores.getHighScores().get(i).getName()+" győzelmek száma : "+highScores.getHighScores().get(i).getScore());
                szov.setBounds(100,50+(i*40),230,30);
                System.out.println(50+i*40);              
                top.add(szov);
            }
            }
            
            
        } catch (SQLException ex) {
            Logger.getLogger(Databases.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
        }
        JLabel vege = new JLabel();
        vege.setBounds(280,460,100,30);        
        top.getContentPane().add(vege);
        top.setVisible(true);
        top.setResizable(false);
    }
}
