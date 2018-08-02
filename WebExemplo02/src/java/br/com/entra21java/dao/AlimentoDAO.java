/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package br.com.entra21java.dao;

import br.com.entra21java.database.Conexao;
import br.com.entra21java.bean.AlimentoBean;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Alunos
 */
public class AlimentoDAO {

    public List<AlimentoBean> obterTodos() {
        List<AlimentoBean> alimentos = new ArrayList<>();
        String sql = "SELECT * FROM alimentos";
        try {
            Statement st = Conexao.obterConexao().createStatement();
            st.execute(sql);
            ResultSet resultSet = st.getResultSet();
            while (resultSet.next()) {
                AlimentoBean alimento = new AlimentoBean();
                alimento.setId(resultSet.getInt("id"));
                alimento.setNome(resultSet.getString("nome"));
                alimento.setPreco(resultSet.getDouble("preco"));
                alimento.setQuantidade(resultSet.getByte("quantidade"));
                alimentos.add(alimento);
            }
        } catch (SQLException e) {
            e.printStackTrace();

        }finally{
            Conexao.fecharConexao();
        }
        return alimentos;
    }

}
