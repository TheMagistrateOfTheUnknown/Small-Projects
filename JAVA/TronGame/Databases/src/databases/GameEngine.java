/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package databases;

import java.awt.Color;
import java.awt.Graphics;
import java.awt.Image;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.awt.event.KeyEvent;
import java.awt.event.KeyListener;
import java.io.IOException;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.Random;
import java.util.logging.Logger;
import javax.swing.AbstractAction;
import javax.swing.ImageIcon;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.KeyStroke;
import javax.swing.Timer;

/**
 *
 * @author bli
 */
public class GameEngine extends JPanel {

    private final int FPS = 240;
    private final int PADDLE_Y = 300;
    private final int PADDLE_WIDTH = 40;
    private final int PADDLE_HEIGHT = 40;
    private int[][] Xposos = new int[1000][1000];
    private int[][] Xposos1 = new int[1000][1000];
    private Paddle paddle;
    private Paddle paddle2;    
    private int elozoSpeed = 0;
    private int elozoSpeed1 = 0;
    private Timer newFrameTimer;
    ArrayList<Integer> Xpos = new ArrayList<>();
    ArrayList<Integer> Ypos = new ArrayList<>();
    ArrayList<Integer> Xpos1 = new ArrayList<>();
    ArrayList<Integer> Ypos1 = new ArrayList<>();
    String nev1 = "";
    String nev2 = "";
    Color player1;
    Color player2;

    public GameEngine(String nev1, String nev2, Color player1, Color player2) {
        super();
        this.nev1 = nev1;
        this.nev2 = nev2;
        this.player1 = player1;
        this.player2 = player2;
        this.setBackground(Color.BLACK);
        this.getInputMap().put(KeyStroke.getKeyStroke("UP"), "pressed up");
        this.getActionMap().put("pressed up", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {
                paddle.setVelx(0);
                paddle.setVely(-1);
                paddle.setHeight(PADDLE_WIDTH);
                paddle.setWidth(PADDLE_HEIGHT);
                if (elozoSpeed == 3) {
                    paddle.setX(paddle.getX() + 1);
                }
                elozoSpeed = 1;
            }
        });
        this.getInputMap().put(KeyStroke.getKeyStroke("DOWN"), "pressed down");
        this.getActionMap().put("pressed down", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {
                paddle.setVelx(0);
                paddle.setVely(1);
                paddle.setHeight(PADDLE_WIDTH);
                paddle.setWidth(PADDLE_HEIGHT);
                if (elozoSpeed == 3) {
                    paddle.setX(paddle.getX() + 1);
                    paddle.setY(paddle.getY() - 1);
                }
                elozoSpeed = 2;

            }
        });
        this.getInputMap().put(KeyStroke.getKeyStroke("LEFT"), "pressed left");
        this.getActionMap().put("pressed left", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {

                paddle.setVelx(-1);
                paddle.setX(paddle.getX() - PADDLE_WIDTH);
                paddle.setVely(0);
                paddle.setHeight(PADDLE_HEIGHT);
                paddle.setWidth(PADDLE_WIDTH);
                if (elozoSpeed == 1) {
                    paddle.setY(paddle.getY() + PADDLE_WIDTH - PADDLE_HEIGHT + 1);
                    paddle.setX(paddle.getX() + PADDLE_HEIGHT);
                }
                if (elozoSpeed == 2) {
                    paddle.setX(paddle.getX() + PADDLE_HEIGHT);
                }
                elozoSpeed = 3;

            }
        });
        this.getInputMap().put(KeyStroke.getKeyStroke("RIGHT"), "pressed right");
        this.getActionMap().put("pressed right", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {

                paddle.setVelx(1);
                paddle.setVely(0);
                paddle.setHeight(PADDLE_HEIGHT);
                paddle.setWidth(PADDLE_WIDTH);
                if (elozoSpeed == 1) {
                    paddle.setY(paddle.getY() + PADDLE_WIDTH - PADDLE_HEIGHT);
                    paddle.setX(paddle.getX() - 1);
                }
                elozoSpeed = 4;
            }
        });
        this.getInputMap().put(KeyStroke.getKeyStroke("W"), "pressed w");
        this.getActionMap().put("pressed w", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {
                paddle2.setVelx(0);
                paddle2.setVely(-1);
                paddle2.setHeight(PADDLE_WIDTH);
                if (elozoSpeed1 == 3) {
                    paddle2.setX(paddle2.getX() + 1);
                }
                paddle2.setWidth(PADDLE_HEIGHT);
                elozoSpeed1 = 1;
            }
        });
        this.getInputMap().put(KeyStroke.getKeyStroke("S"), "pressed s");
        this.getActionMap().put("pressed s", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {
                paddle2.setVelx(0);
                paddle2.setVely(1);
                if (elozoSpeed1 == 3) {
                    paddle2.setX(paddle2.getX() + 1);
                    paddle2.setY(paddle2.getY() - 1);
                }
                paddle2.setHeight(PADDLE_WIDTH);
                paddle2.setWidth(PADDLE_HEIGHT);
                elozoSpeed1 = 2;

            }
        });
        this.getInputMap().put(KeyStroke.getKeyStroke("A"), "pressed a");
        this.getActionMap().put("pressed a", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {

                paddle2.setVelx(-1);
                paddle2.setX(paddle2.getX() - PADDLE_WIDTH);
                paddle2.setVely(0);
                paddle2.setHeight(PADDLE_HEIGHT);
                paddle2.setWidth(PADDLE_WIDTH);
                if (elozoSpeed1 == 1) {
                    paddle2.setY(paddle2.getY() + PADDLE_WIDTH - PADDLE_HEIGHT + 1);
                    paddle2.setX(paddle2.getX() + PADDLE_HEIGHT);
                }
                if (elozoSpeed1 == 2) {
                    paddle2.setX(paddle2.getX() + PADDLE_HEIGHT);
                }
                elozoSpeed1 = 3;

            }
        });
        this.getInputMap().put(KeyStroke.getKeyStroke("D"), "pressed d");
        this.getActionMap().put("pressed d", new AbstractAction() {
            @Override
            public void actionPerformed(ActionEvent ae) {

                paddle2.setVelx(1);
                paddle2.setVely(0);
                paddle2.setHeight(PADDLE_HEIGHT);
                paddle2.setWidth(PADDLE_WIDTH);
                if (elozoSpeed1 == 1) {
                    paddle2.setY(paddle2.getY() + PADDLE_WIDTH - PADDLE_HEIGHT);
                    paddle2.setX(paddle2.getX() - 1);
                }
                elozoSpeed1 = 4;
            }
        });       
        restart();
        newFrameTimer = new Timer(1000 / FPS, new NewFrameListener());
        newFrameTimer.start();
    }

   
    public void restart() {        
        Image paddleImage = new ImageIcon("data/images/brick01.png").getImage();
        paddle = new Paddle(350, PADDLE_Y, PADDLE_WIDTH, PADDLE_HEIGHT, paddleImage);
        Image paddleImage1 = new ImageIcon("data/images/brick04.png").getImage();
        paddle2 = new Paddle(100, PADDLE_Y, PADDLE_WIDTH, PADDLE_HEIGHT, paddleImage1);       
    }

    @Override //paddle
    protected void paintComponent(Graphics grphcs) {
        super.paintComponent(grphcs);
        grphcs.setColor(player1);
        paddle.draw(grphcs);
        paddle2.draw(grphcs);
        if (paddle.getVelx() == 1) { //jobbra x                
            Xpos.add(paddle.getX());
            for (int i = 0; i < PADDLE_HEIGHT; i++) {
                Xposos[paddle.getY() + i][paddle.getX()] = 1;
            }
            Ypos.add(paddle.getY());
        } else if (paddle.getVelx() == -1) { //balra x
            Xpos.add(paddle.getX() + PADDLE_WIDTH);
            for (int i = 0; i < PADDLE_HEIGHT; i++) {
                Xposos[paddle.getY() + i][(paddle.getX() + PADDLE_WIDTH)] = 1;
            }
            Ypos.add(paddle.getY());
        } else if (paddle.getVely() == -1) { //fel Y                        
            Xpos.add(paddle.getX());                    
            for (int i = 0; i < PADDLE_WIDTH; i++) {               
                Xposos[paddle.getY() + PADDLE_WIDTH][paddle.getX() + i] = 1;
            }
            Ypos.add(paddle.getY() + PADDLE_WIDTH);            
        } else if (paddle.getVely() == 1) { //le Y
            Xpos.add(paddle.getX());
            for (int i = 0; i < PADDLE_WIDTH; i++) {
                Xposos[paddle.getY()][paddle.getX() + i] = 1;
            }
            Ypos.add(paddle.getY());

        }

        for (int i = 0; i < Xpos.size(); i++) {
            int aktual = Xpos.get(i);
            int aktualY = Ypos.get(i);
            grphcs.drawLine(Xpos.get(i), Ypos.get(i), Xpos.get(i), Ypos.get(i));
            if (i + 1 < Xpos.size() && aktual == Xpos.get(i + 1)) {
                for (int k = 1; k < PADDLE_HEIGHT; k++) {
                    grphcs.drawLine(Xpos.get(i) + k, Ypos.get(i), Xpos.get(i) + k, Ypos.get(i));

                }
            }
            if (i + 1 < Xpos.size() && aktualY == Ypos.get(i + 1)) {
                for (int k = 1; k < PADDLE_HEIGHT; k++) {
                    grphcs.drawLine(Xpos.get(i), Ypos.get(i) + k, Xpos.get(i), Ypos.get(i) + k);

                }
            }
        }
        //paddle2
        grphcs.setColor(player2);
        if (paddle2.getVelx() == 1) { //jobbra x
            for (int i = 0; i < PADDLE_HEIGHT; i++) {                
                Xposos1[paddle2.getY() + i][paddle2.getX()] = 1;
            }
            Xpos1.add(paddle2.getX());
            Ypos1.add(paddle2.getY());
        } else if (paddle2.getVelx() == -1) { //balra x
            Xpos1.add(paddle2.getX() + PADDLE_WIDTH);
            for (int i = 0; i < PADDLE_HEIGHT; i++) {
                Xposos1[paddle2.getY() + i][(paddle2.getX() + PADDLE_WIDTH)] = 1;
            }
            Ypos1.add(paddle2.getY());
        } else if (paddle2.getVely() == -1) { //fel Y                        
            Xpos1.add(paddle2.getX());
            for (int i = 0; i < PADDLE_WIDTH; i++) {
                Xposos1[paddle2.getY() + PADDLE_WIDTH][paddle2.getX() + i] = 1;
            }
            Ypos1.add(paddle2.getY() + PADDLE_WIDTH);
        } else if (paddle2.getVely() == 1) { //le Y
            Xpos1.add(paddle2.getX());
            Ypos1.add(paddle2.getY());
            for (int i = 0; i < PADDLE_WIDTH; i++) {
                Xposos1[paddle2.getY()][paddle2.getX() + i] = 1;
            }
        }
        for (int i = 0; i < Xpos1.size(); i++) {
            int aktual = Xpos1.get(i);
            int aktualY = Ypos1.get(i);
            grphcs.drawLine(Xpos1.get(i), Ypos1.get(i), Xpos1.get(i), Ypos1.get(i));
            if (i + 1 < Xpos1.size() && aktual == Xpos1.get(i + 1)) {
                for (int k = 1; k < PADDLE_HEIGHT; k++) {
                    grphcs.drawLine(Xpos1.get(i) + k, Ypos1.get(i), Xpos1.get(i) + k, Ypos1.get(i));
                }
            }
            if (i + 1 < Xpos1.size() && aktualY == Ypos1.get(i + 1)) {
                for (int k = 1; k < PADDLE_HEIGHT; k++) {
                    grphcs.drawLine(Xpos1.get(i), Ypos1.get(i) + k, Xpos1.get(i), Ypos1.get(i) + k);
                }
            }
        }
    }
    public Paddle getPaddle() {
        return paddle;
    }
    public void empty2dArray(int tomb[][]) {
        for (int i = 0; i < 810; i++) {
            for (int j = 0; j < 810; j++) {
                tomb[i][j] = 0;
            }
        }
    }
    public void stopGame() {
        paddle.setVely(0);
        paddle.setVelx(0);
        paddle2.setVely(0);
        paddle2.setVelx(0);
        Xpos.clear();
        Ypos.clear();
        Xpos1.clear();
        Ypos1.clear();
        elozoSpeed1 = 0;
        elozoSpeed = 0;
}
    

    class NewFrameListener implements ActionListener {

        @Override
        public void actionPerformed(ActionEvent ae) {    
           
                //player1 collides with screen
                if (paddle.getX() + PADDLE_WIDTH == 800 || paddle.getX() == 0 || paddle.getY() + PADDLE_WIDTH == 600 || paddle.getY() == 0 /*+paddle.getWidth()*/) {
                    JOptionPane.showMessageDialog(GameEngine.this, nev2 + " wins");
                    stopGame();
                    empty2dArray(Xposos);
                    empty2dArray(Xposos1);                    
                    try {                    
                        HighScores h = new HighScores(10);                                                               
                        h.putHighScore(nev2,1);
                    } catch (SQLException ex) {
                        Logger.getLogger(Databases.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
                    }

                    restart();
                }
                //player2 collides with screen
                if (paddle2.getX() + PADDLE_WIDTH == 800 || paddle2.getX() == 0 || paddle2.getY() + PADDLE_WIDTH == 600 || paddle2.getY() == 0 /*+paddle.getWidth()*/) {
                    JOptionPane.showMessageDialog(GameEngine.this, nev1 + " wins");
                    Xpos.clear();
                    Ypos.clear();
                    Xpos1.clear();
                    Ypos1.clear();
                    elozoSpeed1 = 0;
                    elozoSpeed = 0;                          
                    try {                    
                    HighScores h = new HighScores(10);                                                               
                    h.putHighScore(nev1,1);
                    } catch (SQLException ex) {
                         Logger.getLogger(Databases.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
                    }

                    restart();
                }                                          
                paddle2.move();
                paddle.move();
            
            //paddle2 utkozes fenycsikkal
            if (Xposos[paddle2.getY()][paddle2.getX() + PADDLE_WIDTH] == 1 || Xposos[paddle2.getY() + PADDLE_WIDTH][paddle2.getX() + PADDLE_WIDTH] == 1) {
                JOptionPane.showMessageDialog(GameEngine.this, nev1 + " wins");
                stopGame();
                empty2dArray(Xposos);
                empty2dArray(Xposos1);                
                try {                    
                    HighScores h = new HighScores(10);                                                               
                    h.putHighScore(nev1,1);
                } catch (SQLException ex) {
                        Logger.getLogger(Databases.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
                }
                restart();
            }
            //paddle utkozes fenycsikkal
            if (Xposos1[paddle.getY()][paddle.getX() + PADDLE_WIDTH] == 1 || Xposos1[paddle.getY() + PADDLE_WIDTH][paddle.getX() + PADDLE_WIDTH] == 1) {
                JOptionPane.showMessageDialog(GameEngine.this, nev2 + " wins");
                stopGame();
                empty2dArray(Xposos);
                empty2dArray(Xposos1);               
                try {                    
                    HighScores h = new HighScores(10);                                                               
                    h.putHighScore(nev2,1);
                }catch (SQLException ex) {
                     Logger.getLogger(Databases.class.getName()).log(java.util.logging.Level.SEVERE, null, ex);
                }

                restart();
            }
            if (utkozik(paddle2, paddle)) {                  
                JOptionPane.showMessageDialog(GameEngine.this,"Crash");
                stopGame();
                empty2dArray(Xposos);
                empty2dArray(Xposos1);
                restart();
            }           
            repaint();
        }

    }    
    public boolean utkozik(Paddle egy, Paddle ketto) {
        //utkozik ketto ha jobbra megy
        if ((ketto.getX() - PADDLE_WIDTH == egy.getX() + 1 || ketto.getX() - PADDLE_WIDTH == egy.getX()) && ketto.getY() < egy.getY() + PADDLE_WIDTH && ketto.getY() > egy.getY() - PADDLE_WIDTH) {
            return true;
        }
        //utkozik ketto ha balra megy 
        if ((ketto.getX() + PADDLE_WIDTH == egy.getX() + 1 || ketto.getX() + PADDLE_WIDTH == egy.getX()) && ketto.getY() < egy.getY() + PADDLE_WIDTH && ketto.getY() > egy.getY() - PADDLE_WIDTH) {
            return true;
        }
        //utkozii ketto ha ha felfelé megy
        if ((ketto.getY() + PADDLE_WIDTH == egy.getY() || ketto.getY() + PADDLE_WIDTH == egy.getY() + 1) && ketto.getX() < egy.getX() + PADDLE_WIDTH && ketto.getX() > egy.getX() - PADDLE_WIDTH) {
            return true;
        }
        //utkozik ketto ha lefelé megy
        if ((ketto.getY() - PADDLE_WIDTH == egy.getY() || ketto.getY() - PADDLE_WIDTH == egy.getY() + 1) && ketto.getX() < egy.getX() + PADDLE_WIDTH && ketto.getX() > egy.getX() - PADDLE_WIDTH) {
            return true;
        }
        return false;
    }

}
