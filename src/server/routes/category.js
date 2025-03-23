import { Router } from 'express';
import Category from '../models/category.ts';
const router = Router();

// Create new category
router.post('/', (req, res) => {
  Category.create(req.body)
    .then(category => res.send(category))
    .catch(err => res.status(500).send(err));
});

// Find all
router.get('/', (req, res) => {
  Category.findAll()
    .then(categoryList => res.send(categoryList))
    .catch(err => res.status(500).send(err));
});

// Find one by Id
router.get('/:id', (req, res) => {
  Category.findOneByTodoid(req.params.id)
    .then(category => {
      if (!category) return res.status(404).send({ err: 'Category not found' });
      res.send(category);
    })
    .catch(err => res.status(500).send(err));
});

// Update by Id
router.put('/:id', (req, res) => {
  Category.updateByTodoid(req.params.id, req.body)
    .then(category => res.send(category))
    .catch(err => res.status(500).send(err));
});

// Delete by Id
router.delete('/:id', (req, res) => {
  Category.deleteByTodoid(req.params.id)
    .then(() => res.sendStatus(200))
    .catch(err => res.status(500).send(err));
});

export default router;