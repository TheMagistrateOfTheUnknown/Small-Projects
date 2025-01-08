package beadandó2;

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
import java.awt.Color;
import java.awt.Dimension;
import java.awt.GridLayout;
import java.awt.Point;
import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.HashSet;
import java.util.Random;
import javax.swing.JButton;
import javax.swing.JLabel;
import javax.swing.JOptionPane;
import javax.swing.JPanel;
import javax.swing.Timer;

/**
 *
 * @author pinter
 */
public class BoardGUI {

    private int counter = 0;
    private int[][] Xtomb;
    private int[][] Ytomb;

    private JButton[][] buttons;
    private Board board;
    private JPanel boardPanel;
    private JLabel timeLabel;
    private int clickNum = 0;
    private long startTime;
    private Timer timer;

    public BoardGUI(int boardSize) {
        board = new Board(boardSize);
        boardPanel = new JPanel();
        boardPanel.setLayout(new GridLayout(board.getBoardSize(), board.getBoardSize()));
        buttons = new JButton[board.getBoardSize()][board.getBoardSize()];
        Xtomb = new int[board.getBoardSize()][board.getBoardSize()];
        Ytomb = new int[board.getBoardSize()][board.getBoardSize()];

        for (int i = 0; i < board.getBoardSize(); ++i) {
            for (int j = 0; j < board.getBoardSize(); ++j) {
                JButton button = new JButton();
                button.addActionListener(new ButtonListener(i, j));
                Xtomb[i][j] = 0;
                Ytomb[i][j] = 0;

                button.setPreferredSize(new Dimension(80, 40));
                buttons[i][j] = button;
                boardPanel.add(button);
            }
        }

        timeLabel = new JLabel(" ");
        timeLabel.setHorizontalAlignment(JLabel.LEFT);
        timer = new Timer(10, new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                timeLabel.setText(elapsedTime() + " ms");
                if (counter % 2 == 0) {
                    timeLabel.setText("Player1 turn");
                } else {
                    timeLabel.setText("Player2 turn");
                }
            }
        });
        startTime = System.currentTimeMillis();
        timer.start();
    }

    public long elapsedTime() {
        return System.currentTimeMillis() - startTime;
    }

    public int delete3(int szam) {
        Random rand = new Random();
        return rand.nextInt(szam);
    }

    public int[] delete4(int szam) {
        Random rand = new Random();
        int array[] = new int[2];
        array[0] = rand.nextInt(szam);
        array[1] = rand.nextInt(szam);
        if (array[0] == array[1]) {
            while (array[0] == array[1]) {
                array[1] = rand.nextInt(szam);
            }
        }
        return array;
    }

    public int[] keres1(int szam, int[][] tomb2, int keresSzam) {
        int tomb[] = new int[2];
        int szamlal = 0;

        for (int i = 0; i < tomb2.length; i++) {
            for (int j = 0; j < tomb2.length; j++) {
                if (tomb2[i][j] == keresSzam) {
                    szamlal++;
                    if (szamlal == szam + 1) {
                        tomb[0] = i;
                        tomb[1] = j;
                        return tomb;
                    }
                }

            }
        }
        return tomb;
    }

    public boolean checkViz(int[][] tomb, int szam, int mennyi) {
        int k = 0;
        for (int i = 0; i < tomb.length; i++) {
            int j = 0;
            while (j < tomb.length && k != mennyi) {
                if (tomb[i][j] == szam) {
                    k++;
                } else {
                    k = 0;
                }
                j++;

            }
            if (k == mennyi) {
                return true;
            }
            k = 0;
        }
        return false;
    }

    public boolean checkFug(int[][] tomb, int szam, int mennyi) {
        int k = 0;
        for (int i = 0; i < tomb.length; i++) {
            int j = 0;
            while (j < tomb.length && k != mennyi) {
                if (tomb[j][i] == szam) {
                    k++;
                } else {
                    k = 0;
                }
                j++;

            }
            if (k == mennyi) {
                return true;
            }
            k = 0;
        }
        return false;
    }

    public boolean checkKeresztPos(int[][] tomb, int szam, int mennyi) {
        for (int i = 0; i < tomb.length; i++) {
            for (int j = 0; j < tomb.length; j++) {
                if (tomb[i][j] == szam) {
                    int kezdetI = i;
                    int szamlalo = 0;
                    int kezdetJ = j;
                    while (kezdetI < tomb.length && kezdetJ < tomb.length && szamlalo != mennyi) {
                        //System.out.println("A szamlalo : " +szamlalo);
                        if (tomb[kezdetI][kezdetJ] == szam) {
                            szamlalo++;
                        } else {
                            szamlalo = 0;
                        }
                        kezdetI++;
                        kezdetJ++;

                    }
                    //System.out.println("A szamlalo a ciklus végén: " + szamlalo);
                    if (szamlalo == mennyi) {

                        return true;
                    }
                }
            }
        }
        return false;
    }

    public boolean checkKeresztNeg(int[][] tomb, int szam, int mennyi) {
        for (int i = 0; i < tomb.length; i++) {
            for (int j = 0; j < tomb.length; j++) {
                if (tomb[i][j] == szam) {
                    int kezdetI = i;
                    int kezdetJ = j;
                    int szamlalo = 0;
                    //atlós keresés pozitívan
                    while (kezdetI > -1 && kezdetJ < tomb.length && szamlalo != mennyi) {
                      //  System.out.println("I : " + kezdetI + " j : " + kezdetJ + " szamol : " + szamlalo);
                        if (tomb[kezdetI][kezdetJ] == szam) {
                            szamlalo++;
                        } else {
                            szamlalo = 0;
                        }
                        kezdetI--;
                        kezdetJ++;

                    }
                    //System.out.println("lefutott");
                    if (szamlalo == mennyi) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    public int[] keres2(int szam[], int[][] tomb2, int keresSzam) {
        int tomb[] = new int[4];
        int szamlal = 0;
        for (int i = 0; i < tomb2.length; i++) {
            for (int j = 0; j < tomb2.length; j++) {
                if (tomb2[i][j] == keresSzam) {
                    szamlal++;
                    //System.out.println("I :" + i + " J : " + j);
                    if (szamlal == szam[0] + 1) {
                        //System.out.println("Megtalaltam I : " + i + " J:" + j);
                        tomb[0] = i;
                        tomb[1] = j;
                    }
                    if (szamlal == szam[1] + 1) {
                        tomb[2] = i;
                        tomb[3] = j;
                        //System.out.println("Megtalaltam a masodik szamot I : " + i + " J:" + j + " masodik szam : " + (tomb[1] + 1) + " szamlalo : " + szamlal);
                    }

                }

                //System.out.println("Szamlalo : "+szamlal);
            }

        }
        return tomb;
    }

    public void refresh(int x, int y) {
        JButton button = new JButton();
        button = buttons[x][y];

        Field field = board.get(x, y);
        counter++;

        if (field.getColor() != null) {
            if (counter % 2 == 0) {
                button.setText("O");
                Ytomb[x][y] = 2;
            } else {
                button.setText("X");
                Xtomb[x][y] = 1;
            }
        }
        if (counter % 2 != 0) {
            if (checkKeresztPos(Xtomb, 1, 4) || checkViz(Xtomb, 1, 4) || checkFug(Xtomb, 1, 4) || checkKeresztNeg(Xtomb, 1, 4)) {
                int szam[] = delete4(mennyi(Xtomb, 1));
                int tomb[] = keres2(szam, Xtomb, 1);
                torlesReal1elem(tomb, Xtomb);
            }
            if (checkKeresztPos(Xtomb, 1, 3) || checkViz(Xtomb, 1, 3) || checkFug(Xtomb, 1, 3) || checkKeresztNeg(Xtomb, 1, 3)) {
                int szam = delete3(mennyi(Xtomb, 1));
                int tomb[] = keres1(szam, Xtomb, 1);
                torlesReal1elem(tomb, Xtomb);
            }
        } else {
            if (checkKeresztPos(Ytomb, 2, 4) || checkViz(Ytomb, 2, 4) || checkFug(Ytomb, 2, 4) || checkKeresztNeg(Ytomb, 2, 4)) {
                int szam[] = delete4(mennyi(Ytomb, 2));
                Arrays.sort(szam);
                int tomb[] = keres2(szam, Ytomb, 2);
                torlesReal1elem(tomb, Ytomb);
            }
            if (checkKeresztPos(Ytomb, 2, 3) || checkViz(Ytomb, 2, 3) || checkFug(Ytomb, 2, 3) || checkKeresztNeg(Ytomb, 2, 3)) {
                int szam = delete3(mennyi(Ytomb, 2));
                int tomb[] = keres1(szam, Ytomb, 2);
                torlesReal1elem(tomb, Ytomb);
            }
        }

    }

    public int mennyi(int[][] tomb, int keresSzam) {
        int szamlal = 0;
        for (int i = 0; i < tomb.length; i++) {
            for (int j = 0; j < tomb.length; j++) {
                if (tomb[i][j] == keresSzam) {
                    szamlal++;
                }
            }
        }
        return szamlal;
    }

    public void torlesReal1elem(int tomb[], int[][] tomb2d) {
        JButton button = new JButton();
        button = buttons[tomb[0]][tomb[1]];
        System.out.println("I : " + tomb[0] + " J : " + tomb[1]);
        button.setText("");
        if (tomb.length == 4) {
            JButton button2 = buttons[tomb[2]][tomb[3]];
            System.out.println("I : " + tomb[2] + " J : " + tomb[3]);
            button2.setText("");
            tomb2d[tomb[0]][tomb[1]] = 0;
            tomb2d[tomb[2]][tomb[3]] = 0;
            board.get(tomb[0], tomb[1]).setColor(null);
            board.get(tomb[2], tomb[3]).setColor(null);

        } else {
            tomb2d[tomb[0]][tomb[1]] = 0;
            board.get(tomb[0], tomb[1]).setColor(null);
        }
    }

    public JPanel getBoardPanel() {
        return boardPanel;
    }

    class ButtonListener implements ActionListener {

        private int x, y;

        public ButtonListener(int x, int y) {
            this.x = x;
            this.y = y;
        }

        @Override
        public void actionPerformed(ActionEvent e) {
            if (board.get(x, y).getColor() == null) {
                board.get(x, y).setColor("");
                refresh(x, y);

            }
            if (checkFug(Xtomb, 1, 5) || checkViz(Xtomb, 1, 5) || checkKeresztPos(Xtomb, 1, 5) || checkKeresztNeg(Xtomb, 1, 5)) {
                timer.stop();
                JOptionPane.showMessageDialog(boardPanel, "Player1 won.", "Congrats!",
                        JOptionPane.PLAIN_MESSAGE);
                ColorClickerGUI gui = new ColorClickerGUI();
            }
            if (checkFug(Ytomb, 2, 5) || checkViz(Ytomb, 2, 5) || checkKeresztPos(Ytomb, 2, 5) || checkKeresztNeg(Ytomb, 2, 5)) {
                timer.stop();
                JOptionPane.showMessageDialog(boardPanel, "Player2 won.", "Congrats!",
                        JOptionPane.PLAIN_MESSAGE);
                ColorClickerGUI gui = new ColorClickerGUI();
            }
            int Xmennyi = mennyi(Xtomb, 1);
            int Ymennyi = mennyi(Ytomb, 2);
            int tabla_nagysag = Ytomb.length * Ytomb.length;
            if board.isOver()) {
                timer.stop();
                JOptionPane.showMessageDialog(boardPanel, "Draw.", "Congrats!",
                        JOptionPane.PLAIN_MESSAGE);
                ColorClickerGUI gui = new ColorClickerGUI();
            }
        }
    }

    public JLabel getTimeLabel() {
        return timeLabel;
    }

}
