/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package databases;

import java.awt.Color;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JOptionPane;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

/**
 *
 * @author Bálint
 */
public class menuFrame {
    public JRadioButton red1 = new JRadioButton("RED");
   public JRadioButton red2 = new JRadioButton("RED");
   public JRadioButton green1 = new JRadioButton("GREEN");
   public JRadioButton green2 = new JRadioButton("GREEN");
   public JRadioButton grey1 = new JRadioButton("GREY");
   public JRadioButton grey2 = new JRadioButton("GREY");
   public JRadioButton blue1 = new JRadioButton("BLUE");
   public JRadioButton blue2 = new JRadioButton("BLUE");
   public JRadioButton yellow1 = new JRadioButton("YELLOW");
   public JRadioButton yellow2 = new JRadioButton("YELLOW");
   public JRadioButton purple1 = new JRadioButton("PINK");
   public JRadioButton purple2 = new JRadioButton("PINK");
    public       JButton gomb = new JButton("KEZDES");
           public  String nev1 = "";
            public String nev2 = "";
            public Color player1 = Color.WHITE;
            public Color player2=Color.WHITE;
   public JTextField motto2 = new JTextField();

      public JTextField motto1 = new JTextField() ;
      public JFrame f = new JFrame("Tron");

    public menuFrame(){
   //set size and location of frame
   f.setSize(600, 600);
   f.setLocation(100, 150);
   //make sure it quits when x is clicked
   f.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
   //set look and feel
   f.setDefaultLookAndFeelDecorated(true);
   JLabel labelM = new JLabel("Add meg a jatekos neved");
   labelM.setBounds(220, 30, 200, 30);
   //set size of the text box
   motto1.setBounds(90, 100, 200, 30);
   //set size of the text box
   f.getContentPane().setBackground(Color.BLACK);
   motto2.setBounds(310, 100, 200, 30);
   
   JLabel color_text = new JLabel("Válaszd ki a színt");
   color_text.setBounds(240,140,200,30);
   red1.setBounds(150,180,150,30);
   red1.setForeground(Color.RED);
   red1.setBackground(Color.BLACK);
   red2.setBounds(360,180,150,30);
   red2.setForeground(Color.RED);
   red2.setBackground(Color.BLACK);
   green1.setBounds(150,220,150,30);
   green1.setForeground(Color.GREEN);
   green1.setBackground(Color.BLACK);
   green2.setBounds(360,220,150,30);
   green2.setForeground(Color.GREEN);
   green2.setBackground(Color.BLACK);
   grey1.setBounds(150,260,150,30);
   grey1.setForeground(Color.GRAY);
   grey1.setBackground(Color.BLACK);
   grey2.setBounds(360,260,150,30);
   grey2.setForeground(Color.GRAY);
   grey2.setBackground(Color.BLACK);
   blue1.setBounds(150,300,150,30);
   blue1.setForeground(Color.BLUE);
   blue1.setBackground(Color.BLACK);
   blue2.setBounds(360,300,150,30);
   blue2.setForeground(Color.BLUE);
   blue2.setBackground(Color.BLACK);
   yellow1.setBounds(150,340,150,30);
   yellow1.setForeground(Color.YELLOW);
   yellow1.setBackground(Color.BLACK);
   yellow2.setBounds(360,340,150,30);
   yellow2.setForeground(Color.YELLOW);
   yellow2.setBackground(Color.BLACK);
   purple1.setBounds(150,380,150,30);
   purple1.setForeground(Color.PINK);
   purple1.setBackground(Color.BLACK);
   purple2.setBounds(360,380,150,30);
   purple2.setForeground(Color.PINK);
   purple2.setBackground(Color.BLACK);

   f.add(color_text);
   f.add(red1);
   f.add(red2);
   f.add(green1);
   f.add(green2);
   f.add(grey1);
   f.add(grey2);
   f.add(blue1);
   f.add(blue2);
   f.add(yellow1);
   f.add(yellow2);
   f.add(purple1);
   f.add(purple2);
   ButtonGroup G1 = new ButtonGroup();
   ButtonGroup G2 = new ButtonGroup();
   G1.add(red1);
   G2.add(red2);
   G1.add(green1);
   G2.add(green2);
   G1.add(grey1);
   G2.add(grey2);
   G1.add(blue1);
   G2.add(blue2);
   G1.add(yellow1);
   G2.add(yellow2);
   G1.add(purple1);
   G2.add(purple2);
   JMenuBar menu =new JMenuBar();
   JMenu x = new JMenu("Menu");
   
   JMenuItem top10 = new JMenuItem("TOP10");
   x.add(top10);
   menu.add(x);
   f.setJMenuBar(menu);
   f.setResizable(false);
   f.add(labelM);
   f.add(motto2);
   f.add(motto1);
   f.setLayout(null);
   f.setVisible(true);
   gomb.setBounds(200,420,150,40);
   f.add(gomb);
   top10.addActionListener(new ActionListener(){
       public void actionPerformed(ActionEvent e)
       {
           top10Frame f = new top10Frame();
       }
   });
   gomb.addActionListener(new ActionListener (){
        public void actionPerformed(ActionEvent e)
        {
             nev1 = motto1.getText();
             nev2 = motto2.getText();
             player1 = Color.WHITE;
             player2=Color.LIGHT_GRAY;
            
            f.dispose();
            if(red1.isSelected()) player1 = Color.RED;
            if(green1.isSelected())    player1 = Color.GREEN;
            if(grey1.isSelected())player1 = Color.GRAY;
            if(blue1.isSelected()) player1 = Color.BLUE;
            if(yellow1.isSelected()) player1 = Color.YELLOW;
            if(purple1.isSelected()) player1 = Color.PINK;
            if(red2.isSelected()) player2 = Color.RED;
            if(green2.isSelected())    player2 = Color.GREEN;
            if(grey2.isSelected())player2 = Color.GRAY;
            if(blue2.isSelected()) player2 = Color.BLUE;
            if(yellow2.isSelected()) player2 = Color.YELLOW;
            if(purple2.isSelected()) player2 = Color.PINK;
            if(player1 == player2) player2 = Color.WHITE;            
            if(nev1.length() == 0) nev1 = "Player1";
            if(nev2.length()==0) nev2 ="Player2";
            TronGUI uj = new TronGUI(nev1,nev2,player1,player2);           
        }
    });
}
}
