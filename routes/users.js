const express = require('express');
const router = express.Router();
const pool = require('../db');

router.get('/', async (req, res) => {
  try {
    const [users] = await pool.query('SELECT * FROM users ORDER BY created_at DESC');
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


// GET single client
// router.get('/:id', async (req, res) => {
//     try {
//         const client = await pool.query('SELECT * FROM clients WHERE client_id = ?', [req.params.id]);
//         if (client.length === 0) {
//             return res.status(404).json({ error: 'Client not found' });
//         }
//         res.json(client[0]);
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// POST create client
router.post('/', async (req, res) => {
    const { email, senha} = req.body;
    
    if (!email || !senha) {
        return res.status(400).json({ error: 'email and senha are required' });
    }
    
    try {
        const result = await pool.query(
            'INSERT INTO users (email, senha) VALUES (?, ?)',
            [email, senha]
        );
        res.status(201).json({ 
            user_id: result.affectedRows.user_id, 
            message: 'User created successfully' 
        });
    } catch (error) {
        if (error.code === 'ER_DUP_ENTRY') {
            res.status(409).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: error.message });
        }
    }
});

// Rota POST /api/users/login (ou /api/login)
router.post('/login', async (req, res) => {
  try {
    const { email, senha } = req.body;

    if (!email || !senha) {
      return res.status(400).json({ message: "Email e senha são obrigatórios" });
    }

    const [rows] = await pool.query(
      'SELECT * FROM users WHERE email = ? AND senha = ?',
      [email, senha]
    );

    if (rows.length > 0) {
      return res.status(200).json({ message: "Login realizado com sucesso", user: rows[0] });
    } else {
      return res.status(401).json({ message: "Email ou senha inválido" });
    }
  } catch (error) {
    console.error("Erro na rota /login:", error);
    return res.status(500).json({ error: error.message });
  }
});

// PUT update client
// router.put('/:id', async (req, res) => {
//     const { name, email, address } = req.body;
    
//     try {
//         const result = await pool.query(
//             'UPDATE clients SET name = ?, email = ?, address = ? WHERE client_id = ?',
//             [name, email, address, req.params.id]
//         );
        
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Client not found' });
//         }
        
//         res.json({ message: 'Client updated successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

// DELETE client
// router.delete('/:id', async (req, res) => {
//     try {
//         const result = await pool.query('DELETE FROM clients WHERE client_id = ?', [req.params.id]);
        
//         if (result.affectedRows === 0) {
//             return res.status(404).json({ error: 'Client not found' });
//         }
        
//         res.json({ message: 'Client deleted successfully' });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// });

module.exports = router;
