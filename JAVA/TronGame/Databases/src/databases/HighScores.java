/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package databases;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;

/**
 *
 * @author bli
 */
public class HighScores {

    int maxScores;
    PreparedStatement insertStatement;
    PreparedStatement deleteStatement;
    Connection connection;
    private final String dbUserName = "app";
        private final String dbUserPswd = "123";

    public HighScores(int maxScores) throws SQLException {
        this.maxScores = maxScores;
        String dbURL = "jdbc:derby://localhost:1527/highscores;";
        connection = DriverManager.getConnection(dbURL,dbUserName,dbUserPswd);
        String insertQuery = "INSERT INTO HIGHSCORES (TIMESTAMP, NAME, SCORE) VALUES (?, ?, ?)";
        insertStatement = connection.prepareStatement(insertQuery);
        String deleteQuery = "DELETE FROM HIGHSCORES WHERE NAME=?";
        deleteStatement = connection.prepareStatement(deleteQuery);
    }

    public ArrayList<HighScore> getHighScores() throws SQLException {
        String query = "SELECT * FROM HIGHSCORES";
        ArrayList<HighScore> highScores = new ArrayList<>();
        Statement stmt = connection.createStatement();
        ResultSet results = stmt.executeQuery(query);
        while (results.next()) {
            String name = results.getString("NAME");
            int score = results.getInt("SCORE");
            highScores.add(new HighScore(name, score));
        }
        sortHighScores(highScores);
        return highScores;
    }
    public void putHighScore(String name, int score) throws SQLException {
        ArrayList<HighScore> highScores = getHighScores();
        ArrayList<String> nevek = new ArrayList<>();
        for(int i = 0;i<highScores.size();i++)
        {
            nevek.add(highScores.get(i).getName());
        }
        if(nevek.contains(name))
        {
            System.out.println(nevek.get(nevek.indexOf(name)));
            deleteScores(nevek.get(nevek.indexOf(name)));
            insertScore(name,(highScores.get(nevek.indexOf(name)).getScore())+1);                   
        }
        else{
            insertScore(name,score);
        }        
    }

    /**
     * Sort the high scores in descending order.
     * @param highScores 
     */
    private void sortHighScores(ArrayList<HighScore> highScores) {
        Collections.sort(highScores, new Comparator<HighScore>() {
            @Override
            public int compare(HighScore t, HighScore t1) {
                return t1.getScore() - t.getScore();
            }
        });
    }

    private void insertScore(String name, int score) throws SQLException {
        Timestamp ts = new Timestamp(System.currentTimeMillis());
        insertStatement.setTimestamp(1, ts);
        insertStatement.setString(2, name);
        insertStatement.setInt(3, score);
        insertStatement.executeUpdate();
    }

    /**
     * Deletes all the highscores with score.
     *
     * @param score
     */
    public void deleteScores(String score) throws SQLException {
        deleteStatement.setString(1, score);
        deleteStatement.executeUpdate();
    }
}
