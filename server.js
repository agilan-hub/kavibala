import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/refactor', (req, res) => {
  const { code } = req.body;

  if (!code) {
    return res.status(400).json({ error: 'Code is required' });
  }

  setTimeout(() => {
    // Simple mock "refactored" logic
    let refactoredCode = code;
    
    // Example: change 'var' to 'const' or 'let'
    refactoredCode = refactoredCode.replace(/\bvar\b/g, 'let');
    
    if (code.includes('var') || code.includes('def ')) {
        // Pretend we did some real work
    }

    const payload = {
      original: code,
      refactored: refactoredCode.length > 20 ? refactoredCode.trim() + '\n\n// Intelligently Refactored by Antigravity AI\n' : refactoredCode,
      score: Math.floor(Math.random() * 20) + 80, // Score between 80-100
      tests_passed: true,
      explanation: 'Replaced outdated variable declarations. Ensured code conforms to modern linting standards. Optimized logic loops for readability.',
    };

    res.json(payload);
  }, 2500); // Simulate network/AI delay
});

const PORT = 3001;
app.listen(PORT, () => console.log(`Antigravity AI Backend running on port ${PORT}`));
