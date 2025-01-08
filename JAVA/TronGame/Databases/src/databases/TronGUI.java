/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package databases;
import java.awt.Color;
import java.awt.Dimension;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.sql.SQLException;
import java.util.Random;
import java.util.logging.Logger;
import javax.swing.ButtonGroup;
import javax.swing.JButton;
import javax.swing.JFrame;
import javax.swing.JLabel;
import javax.swing.JMenu;
import javax.swing.JMenuBar;
import javax.swing.JMenuItem;
import javax.swing.JRadioButton;
import javax.swing.JTextField;

/**
 *
 * @author bli
 */
public class TronGUI {
    private JFrame frames;
    private GameEngine gameArea;
    private String nev1 ="";
    private String nev2="";
    private Color player1;
    private Color player2;

    public TronGUI(String nev1,String nev2,Color player1,Color player2) {
        this.nev1 = nev1;
        this.nev2 = nev2;
        this.player1 = player1;
        this.player2 = player2;
        frames = new JFrame("Arkanoid");
        frames.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        gameArea = new GameEngine(nev1,nev2,player1,player2);        
        frames.getContentPane().add(gameArea);        
        frames.setPreferredSize(new Dimension(800, 600));
        JMenuBar menu2 = new JMenuBar();
        JMenu menuk = new JMenu("Menu");
        JMenuItem new_game = new JMenuItem("NEW GAME");
        JMenuItem Top10 = new JMenuItem("TOP10");
        menuk.add(new_game);
        menuk.add(Top10);
        menu2.add(menuk);
        frames.setJMenuBar(menu2);
        new_game.addActionListener(new ActionListener(){
            @Override
            public void actionPerformed(ActionEvent ae)
            {
                menuFrame j = new menuFrame();
                gameArea.stopGame();
                frames.dispose();
                
            }
        });
        Top10.addActionListener(new ActionListener(){
            @Override
            public void actionPerformed(ActionEvent ae)
            {                
                top10Frame f = new top10Frame();                                                                                                         
            }
        });
        frames.setResizable(false);
        frames.pack();
        frames.setVisible(true);
    }
     public JFrame getFrame() {
        return frames;
    }

    public GameEngine getGameArea() {
        return gameArea;
    }
}
   
       
    

   
   
    

