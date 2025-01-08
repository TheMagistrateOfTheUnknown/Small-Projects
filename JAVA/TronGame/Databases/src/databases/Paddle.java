/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package databases;

import java.awt.Graphics;
import java.awt.Image;
import javax.swing.JComponent;

/**
 *
 * @author bli
 */
public class Paddle extends Sprite {

    private double velx;
    private double vely;
    public Paddle(int x, int y, int width, int height, Image image) {
        super(x, y, width, height, image);
    }

    public void setImage(Image image) {
        this.image = image;
    }

    public void move() {
        if ((velx < 0 && x > 0) || (velx > 0 && x + width <= 800)) {
            x += velx;          
            y+= vely;
        }
        if ((vely < 0 && y > 0) || (vely > 0 && y + height <= 800)) {                  
            y+= vely;
        }
    }

    public double getVelx() {
        return velx;
    }
     public double getVely() {
        return vely;
    }

    public void setVelx(double velx) {
        this.velx = velx;
    }
    public void setVely(double vely) {
        this.vely = vely;
    }
}

